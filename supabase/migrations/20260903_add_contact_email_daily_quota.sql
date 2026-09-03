-- M1-08 security update (ADR-015): hard daily notification-email quota.
-- This migration must recreate the current production schema on top of
-- 20260902_create_contact_messages.sql — do not rewrite that file's
-- historical semantics, extend it here instead.

-- notification_status now also allows 'suppressed': the email was
-- intentionally NOT attempted because the daily quota was exhausted.
-- This is distinct from 'failed' (a slot was reserved but Resend itself
-- failed) — a suppressed notification is not a failed contact submission,
-- the row is still safely persisted and reviewable manually.
alter table public.contact_messages
  drop constraint if exists contact_messages_notification_status_check;

alter table public.contact_messages
  add constraint contact_messages_notification_status_check
  check (
    notification_status in ('pending', 'sent', 'failed', 'suppressed')
  );

-- One row per UTC calendar day, incremented atomically by
-- reserve_contact_email_slot() below. No public/anonymous access — same
-- posture as contact_messages: the server (service-role key) is the only
-- caller, via the Route Handler.
create table if not exists public.contact_email_quota (
  quota_date date primary key,
  used integer not null default 0,
  updated_at timestamptz not null default now()
);

alter table public.contact_email_quota
enable row level security;

-- RLS with zero policies already denies all access to anon/authenticated;
-- these explicit revokes are defense-in-depth, matching the posture
-- already established for contact_messages.
revoke all on public.contact_email_quota from anon, authenticated;

-- Atomic reservation: a single `UPDATE ... WHERE used < p_limit` acquires
-- a row lock on that day's quota row, so concurrent requests are
-- serialized by Postgres itself. Do NOT reimplement this as a separate
-- "SELECT count(*) then INSERT if under limit" — that has a race window
-- where two concurrent requests can both read the same count and both
-- proceed, silently exceeding the cap.
create or replace function public.reserve_contact_email_slot(p_limit integer)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  v_today date := (now() at time zone 'utc')::date;
begin
  insert into public.contact_email_quota (quota_date, used)
  values (v_today, 0)
  on conflict (quota_date) do nothing;

  update public.contact_email_quota
  set used = used + 1,
      updated_at = now()
  where quota_date = v_today
    and used < p_limit;

  return found;
end;
$$;

-- Only the server (service-role) may call this — never anon/authenticated,
-- even though the function is SECURITY DEFINER and could otherwise be
-- invoked by any role with EXECUTE.
revoke all on function public.reserve_contact_email_slot(integer) from public, anon, authenticated;
grant execute on function public.reserve_contact_email_slot(integer) to service_role;

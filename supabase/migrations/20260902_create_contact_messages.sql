-- M1-08: contact form persistence.
-- No public/anonymous policies are created on purpose — the browser never
-- talks to Supabase directly; every insert/update comes from the Next.js
-- Route Handler (src/app/api/contact/route.ts) using the service-role key,
-- which bypasses RLS by design. RLS stays enabled with zero policies so
-- any other key (anon, authenticated) has zero access to this table.

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),

  name text not null
    check (char_length(name) between 2 and 100),

  email text not null
    check (char_length(email) between 3 and 254),

  phone text not null
    check (char_length(phone) between 7 and 40),

  message text null
    check (
      message is null
      or char_length(message) <= 2000
    ),

  locale text not null
    check (locale in ('en', 'pt')),

  status text not null default 'new'
    check (
      status in ('new', 'read', 'replied', 'archived')
    ),

  notification_status text not null default 'pending'
    check (
      notification_status in ('pending', 'sent', 'failed')
    ),

  notification_error text null,

  created_at timestamptz not null default now()
);

alter table public.contact_messages
enable row level security;

create index if not exists
contact_messages_created_at_idx
on public.contact_messages (created_at desc);

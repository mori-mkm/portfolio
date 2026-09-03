/**
 * Narrow retry for a single Supabase Data API error code: PGRST303 ("JWT
 * issued at future"), observed live (M1-08, 2026-09-03) as an intermittent
 * clock-skew condition in Supabase's sb_secret_-key-to-JWT exchange —
 * alternating between consecutive calls with identical client/key/code
 * path, ruling out grants/RLS/wrong-key causes.
 *
 * PGRST303 is an authentication rejection: it happens before the request
 * reaches the database, so the underlying SQL (including the quota RPC's
 * `used = used + 1`) never executes. That is what makes retrying it safe —
 * unlike a timeout, connection reset, or generic 5xx, a PGRST303 rejection
 * has definitely NOT run the operation, so re-attempting cannot double an
 * insert or double-consume the daily quota. Any other error — including
 * plain 401/403, 42501, network failures, or timeouts — must NOT be
 * retried here, because those can occur *after* the operation executed,
 * where a retry could duplicate a contact row or a quota decrement.
 */

const RETRYABLE_CODE = "PGRST303";
const BACKOFFS_MS = [600, 1500];
const MAX_ATTEMPTS = 1 + BACKOFFS_MS.length;

type PostgrestLikeError = { code?: string } | null | undefined;
type PostgrestLikeResult<T> = { data: T | null; error: PostgrestLikeError };

function isPgrst303(error: PostgrestLikeError): boolean {
  return Boolean(error && typeof error === "object" && error.code === RETRYABLE_CODE);
}

/**
 * Runs `operation` (a fresh Supabase call each time — never replay a
 * captured promise) up to MAX_ATTEMPTS times, retrying only on PGRST303.
 * `onRetry` is for logging the attempt number; it must not receive or log
 * request/visitor data.
 */
export async function withPgrst303Retry<T>(
  operation: () => PromiseLike<PostgrestLikeResult<T>>,
  onRetry?: (attempt: number, maxAttempts: number) => void,
): Promise<PostgrestLikeResult<T>> {
  let attempt = 1;
  while (true) {
    const result = await operation();
    if (!isPgrst303(result.error) || attempt >= MAX_ATTEMPTS) {
      return result;
    }
    onRetry?.(attempt + 1, MAX_ATTEMPTS);
    await sleep(BACKOFFS_MS[attempt - 1]);
    attempt += 1;
  }
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

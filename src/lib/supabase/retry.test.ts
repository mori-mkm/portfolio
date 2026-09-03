import assert from "node:assert/strict";
import { test } from "node:test";

import { withPgrst303Retry } from "./retry.ts";

function pgrst303() {
  return { data: null, error: { code: "PGRST303" } };
}

test("retries PGRST303 then returns eventual success", async () => {
  let calls = 0;
  const result = await withPgrst303Retry(async () => {
    calls += 1;
    if (calls < 2) return pgrst303();
    return { data: "ok", error: null };
  });
  assert.equal(calls, 2);
  assert.equal(result.data, "ok");
  assert.equal(result.error, null);
});

test("gives up after 3 total attempts and returns the last PGRST303", async () => {
  let calls = 0;
  const result = await withPgrst303Retry(async () => {
    calls += 1;
    return pgrst303();
  });
  assert.equal(calls, 3);
  assert.equal(result.error?.code, "PGRST303");
});

test("does not retry a non-PGRST303 error (e.g. 42501)", async () => {
  let calls = 0;
  const result = await withPgrst303Retry(async () => {
    calls += 1;
    return { data: null, error: { code: "42501" } };
  });
  assert.equal(calls, 1);
  assert.equal(result.error?.code, "42501");
});

test("does not retry an error with no code (generic/network failure)", async () => {
  let calls = 0;
  await withPgrst303Retry(async () => {
    calls += 1;
    return { data: null, error: new Error("connection reset") as unknown as { code?: string } };
  });
  assert.equal(calls, 1);
});

test("calls onRetry with the correct attempt/max on each retry", async () => {
  let calls = 0;
  const retries: Array<[number, number]> = [];
  await withPgrst303Retry(
    async () => {
      calls += 1;
      return calls < 3 ? pgrst303() : { data: "ok", error: null };
    },
    (attempt, max) => retries.push([attempt, max]),
  );
  assert.deepEqual(retries, [
    [2, 3],
    [3, 3],
  ]);
});

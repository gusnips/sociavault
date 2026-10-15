export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function credits(count: number): string {
  return count === 1 ? "1 credit" : `${count} credits`;
}

// SociaVault answers errors with { error }. A 402 adds { required, available } and a 401 adds
// { docs }, so those two get the numbers and the link in the message.
function errorText(body: unknown): string | undefined {
  if (typeof body === "string") return body || undefined;
  if (!isRecord(body) || typeof body.error !== "string") return undefined;
  const { error, required, available, docs } = body;
  if (typeof required === "number" && typeof available === "number") {
    return `${error}: this call needs ${credits(required)} and you have ${available}. Check your credits at https://sociavault.com/dashboard.`;
  }
  if (typeof docs === "string") return `${error}. See ${docs}`;
  return error;
}

export class SociaVaultError extends Error {
  readonly status: number;
  readonly body: unknown;

  constructor(status: number, body: unknown, message?: string) {
    super(
      message ??
        errorText(body) ??
        `SociaVault request failed (HTTP ${status}). Check the request and your API key.`,
    );
    this.name = "SociaVaultError";
    this.status = status;
    this.body = body;
  }
}

import createClient from "openapi-fetch";
import type { Client } from "openapi-fetch";
import { SociaVaultError, isRecord } from "./errors";
import type { paths } from "./schema";

export type SociaVaultFetch = (request: Request) => Promise<Response>;

export interface SociaVaultConfig {
  /** Your API key from the SociaVault dashboard. It starts with `sk_live_`. */
  apiKey: string;
  baseUrl?: string;
  fetch?: SociaVaultFetch;
}

/** Pass `AbortSignal.timeout(30_000)` to stop waiting after 30 seconds. */
export interface CallOptions {
  signal?: AbortSignal;
}

/** The query string of one endpoint. */
export type Query<P extends keyof paths> =
  paths[P]["get"]["parameters"]["query"];

/**
 * What an endpoint answers. Most send `{ success, data, credits_used }`. A few put their fields
 * at the top level instead. SociaVault's own docs do not agree on the shape, so every field
 * besides these two is `unknown`: check it before you use it.
 */
export interface SociaVaultResponse {
  success?: boolean;
  credits_used?: number;
  [key: string]: unknown;
}

function isResponse(value: unknown): value is SociaVaultResponse {
  return (
    isRecord(value) &&
    (value.success === undefined || typeof value.success === "boolean") &&
    (value.credits_used === undefined || typeof value.credits_used === "number")
  );
}

export function createApi(config: SociaVaultConfig): Client<paths> {
  const api = createClient<paths>({
    baseUrl: (config.baseUrl ?? "https://api.sociavault.com").replace(
      /\/+$/,
      "",
    ),
    fetch: config.fetch,
    headers: { Accept: "application/json" },
  });
  api.use({
    onRequest({ request }) {
      request.headers.set("X-API-Key", config.apiKey);
    },
  });
  return api;
}

export async function unwrap(
  result: Promise<{ data?: unknown; error?: unknown; response: Response }>,
): Promise<SociaVaultResponse> {
  const { data, error, response } = await result;
  if (!response.ok) throw new SociaVaultError(response.status, error);
  if (!isResponse(data)) {
    throw new SociaVaultError(
      response.status,
      data,
      "SociaVault answered with something that is not a JSON object.",
    );
  }
  return data;
}

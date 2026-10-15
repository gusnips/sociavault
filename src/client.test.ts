import { describe, expect, test } from "bun:test";
import { SociaVaultClient } from "./client";
import { SociaVaultError } from "./errors";
import type { SociaVaultFetch } from "./http";

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function mockFetch(handler: () => Response) {
  const requests: Request[] = [];
  const fetch: SociaVaultFetch = async (request) => {
    requests.push(request.clone());
    return handler();
  };
  return { fetch, requests };
}

function clientFor(handler: () => Response) {
  const mock = mockFetch(handler);
  const client = new SociaVaultClient({
    apiKey: "sk_live_abc",
    fetch: mock.fetch,
  });
  return { client, requests: mock.requests };
}

describe("SociaVaultClient", () => {
  test("sends the key in X-API-Key and the query to the endpoint's path", async () => {
    const { client, requests } = clientFor(() =>
      json({ success: true, data: { id: 1 }, credits_used: 1 }),
    );

    const result = await client.tiktok.profile({ handle: "nasa" });

    expect(result).toEqual({ success: true, data: { id: 1 }, credits_used: 1 });
    const url = new URL(requests[0].url);
    expect(requests[0].method).toBe("GET");
    expect(requests[0].headers.get("X-API-Key")).toBe("sk_live_abc");
    expect(url.origin + url.pathname).toBe(
      "https://api.sociavault.com/v1/scrape/tiktok/profile",
    );
    expect(Object.fromEntries(url.searchParams)).toEqual({ handle: "nasa" });
  });

  test("names methods from the path, and /v1/credits sits in account", async () => {
    const { client, requests } = clientFor(() => json({ credits: 950 }));

    await client.tiktokShop.products({ url: "https://www.tiktok.com/shop/x" });
    const balance = await client.account.credits();

    expect(new URL(requests[0].url).pathname).toBe(
      "/v1/scrape/tiktok-shop/products",
    );
    expect(new URL(requests[1].url).pathname).toBe("/v1/credits");
    expect(balance.credits).toBe(950);
  });

  test("a call must pass the parameters the spec requires", async () => {
    const { client } = clientFor(() => json({ success: true }));

    // @ts-expect-error `handle` is required, so an empty query fails to compile.
    await client.tiktok.profile({});
  });

  test("a 402 says how many credits the call needs and how many you have", async () => {
    const body = { error: "Insufficient credits", required: 26, available: 5 };
    const { client } = clientFor(() => json(body, 402));

    const error = await client.tiktok
      .demographics({ handle: "nasa" })
      .catch((caught) => caught);

    expect(error).toBeInstanceOf(SociaVaultError);
    expect(error.status).toBe(402);
    expect(error.message).toBe(
      "Insufficient credits: this call needs 26 credits and you have 5. Check your credits at https://sociavault.com/dashboard.",
    );
  });

  test("a 401 points to the docs link the API sends", async () => {
    const body = {
      error: "Invalid API key",
      docs: "https://docs.sociavault.com/authentication",
    };
    const { client } = clientFor(() => json(body, 401));

    const error = await client.account.credits().catch((caught) => caught);

    expect(error.message).toBe(
      "Invalid API key. See https://docs.sociavault.com/authentication",
    );
  });

  test("a 400 keeps the API's own message", async () => {
    const { client } = clientFor(() =>
      json({ error: "Missing required parameter: handle" }, 400),
    );

    const error = await client.tiktok
      .profile({ handle: "" })
      .catch((caught) => caught);

    expect(error.message).toBe("Missing required parameter: handle");
  });

  test("rejects a 200 that is not a JSON object", async () => {
    const { client } = clientFor(() => json(["nope"]));

    await expect(client.account.credits()).rejects.toBeInstanceOf(
      SociaVaultError,
    );
  });
});

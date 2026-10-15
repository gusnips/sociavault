# sociavault

TypeScript client for the [SociaVault](https://sociavault.com) API: public data from TikTok, Instagram, YouTube, Facebook, Twitter, Reddit, LinkedIn, Threads, Pinterest, Twitch, Google and their ad libraries. Unofficial, not made by SociaVault.

```bash
npm install sociavault
# or
bun add sociavault
```

You can also install `@gusnips/sociavault`. Both names give you the same code.

## First call

```ts
import { SociaVaultClient } from "sociavault";

const sociavault = new SociaVaultClient("sk_live_YOUR_KEY");

const { data } = await sociavault.tiktok.profile({ handle: "nasa" });
```

Get an API key on the [SociaVault dashboard](https://sociavault.com/dashboard). It starts with `sk_live_`. Keep it on your server and out of the browser.

The client sends the key for you, in the `X-API-Key` header.

## What you get back

Most endpoints answer with `{ success, data, credits_used }`:

```ts
const { data, credits_used } = await sociavault.youtube.channel({
  handle: "NASA",
});
```

A few endpoints put their fields at the top level instead, and SociaVault's own docs do not always agree on the shape. So only `success` and `credits_used` are typed. Everything else is `unknown`: check it before you read it, with a library like zod, or read only the fields you need.

## Finding the method you need

Each endpoint is one method. The group is the platform in the path, and the method name is the rest of the path in camelCase:

| SociaVault endpoint                         | In the SDK                              |
| ------------------------------------------- | --------------------------------------- |
| `GET /v1/scrape/tiktok/profile`             | `sociavault.tiktok.profile()`           |
| `GET /v1/scrape/tiktok/search/users`        | `sociavault.tiktok.searchUsers()`       |
| `GET /v1/scrape/tiktok-shop/products`       | `sociavault.tiktokShop.products()`      |
| `GET /v1/scrape/facebook-ad-library/search` | `sociavault.facebookAdLibrary.search()` |
| `GET /v1/credits`                           | `sociavault.account.credits()`          |

Groups: `tiktok` (23 methods), `instagram` (14), `youtube` (13), `twitter` (13), `facebook` (8), `reddit` (6), `linkedin` (5), `threads` (5), `facebookAdLibrary` (5), `tiktokShop` (4), `twitch` (4), `pinterest` (4), `facebookMarketplace` (3), `googleAdLibrary` (3), `tiktokAdLibrary` (2), `linkedinAdLibrary` (2), `google` (1) and `account` (1).

Hover a method in your editor to read what it does and what it costs. The parameters are typed from SociaVault's OpenAPI file, so your editor lists them and marks the required ones.

## Credits

SociaVault charges in credits. SociaVault says a simple request, like a profile, costs 1 credit, and a complex one can cost 20 or more. The doc on a method shows its cost when SociaVault states it. For example, `tiktok.demographics` costs 26 credits.

Check what is left with `account.credits()`:

```ts
const balance = await sociavault.account.credits();
```

## More pages

Endpoints with more results take a paging parameter. Most call it `cursor`. Others use `page`, `continuationToken`, `offset` or `max_cursor`. Send back the value the previous response gave you:

```ts
await sociavault.tiktok.videos({ handle: "nasa", max_cursor: "1734562353000" });
```

Where that value sits in a response changes from one endpoint to the next, so print one response before you write the loop.

## Errors

A failed call throws `SociaVaultError`. It has the HTTP `status`, the raw `body`, and a `message`:

```ts
import { SociaVaultError } from "sociavault";

try {
  await sociavault.tiktok.demographics({ handle: "nasa" });
} catch (error) {
  if (error instanceof SociaVaultError && error.status === 402) {
    // Not enough credits. The message says how many the call needs.
  }
  throw error;
}
```

SociaVault uses these statuses:

| Status | Meaning                                                                     |
| ------ | --------------------------------------------------------------------------- |
| 400    | A parameter is missing or not valid. The message names it.                  |
| 401    | The API key is missing or not valid. The message links to the docs.         |
| 402    | Not enough credits. The message gives the credits needed and what you have. |
| 403    | The post is age-restricted. SociaVault says it charges no credits.          |
| 404    | Nothing was found, such as a user or a hashtag with no videos.              |
| 500    | Something went wrong at SociaVault.                                         |

Network failures, like a lost connection, throw the error `fetch` gives you.

## Timeouts and retries

A call waits as long as `fetch` waits. To stop after 30 seconds, pass a signal as the second argument:

```ts
await sociavault.tiktok.profile(
  { handle: "nasa" },
  { signal: AbortSignal.timeout(30_000) },
);
```

The client never retries. A second call can cost credits again, so you decide when to make it.

## Options

```ts
new SociaVaultClient({
  apiKey: "sk_live_YOUR_KEY",
  baseUrl: "https://api.sociavault.com", // the default
  fetch: myFetch, // takes a Request, returns a Response
});
```

`sociavault.api` is the typed [openapi-fetch](https://openapi-ts.dev/openapi-fetch/) client underneath. Use it when you need the raw `Response`, such as its headers. It sends the key too.

## Keeping it current

The methods are written by a script from `openapi.json`. To update after SociaVault changes its API, replace that file and run:

```bash
bun run generate
```

Do not edit `src/schema.d.ts`, `src/client.ts` or `src/modules/`. The script rewrites them.

## License

The code in this package is MIT. The SociaVault API has its own terms: SociaVault's OpenAPI file lists its license as "Commercial", and the terms are at [sociavault.com/terms](https://sociavault.com/terms). Read them before you build on the API. Not affiliated with SociaVault.

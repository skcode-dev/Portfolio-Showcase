# skCode Portfolio — EmDash

This is the Cloudflare EmDash CMS version of the portfolio. It is kept beside the existing Next.js/Vercel site so the current `portfolio-showcase-qarp.vercel.app` deployment stays live while the CMS version is prepared.

## Local development

Requirements: Node.js 22.23.4 or newer and pnpm 11.

```sh
pnpm install
pnpm dev
```

Open <http://localhost:4321> for the site and <http://localhost:4321/_emdash/admin> for the CMS. The initial setup wizard loads the included seed content into local development storage. Use the development login shortcut shown by EmDash if this browser cannot register a passkey. Local CMS data is stored under `.wrangler/` and is not committed.

The seed is generated from the current portfolio source data with:

```sh
pnpm seed:generate
pnpm exec emdash seed seed/seed.json --validate
```

The CMS includes editable page copy, profile and experience, skills, projects, car ownership, international trips, Japan prefecture travel scores, running results, site labels, and navigation menu. Images are included in the seed media library.

## Cloudflare deployment

Create a Cloudflare account, then authenticate and deploy:

```sh
pnpm wrangler login
pnpm deploy
```

Cloudflare Workers, D1, and R2 resources are configured in `wrangler.jsonc`. The actual Cloudflare deployment and account setup have not been performed yet. Deploying this project does not change the existing Vercel deployment. A future cutover should happen only after the Cloudflare URL has been reviewed.

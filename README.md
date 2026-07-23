# Austin Zakat (GAMRC) — Website

A redesigned marketing site for the Greater Austin Muslim Relief Committee (GAMRC), built with
[Astro](https://astro.build) and deployed to GitHub Pages at **az.ourmasajid.com**.

## Stack

- [Astro](https://astro.build) (static output)
- [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/vite`
- No client-side framework — the zakat calculator is a small vanilla-JS island

## Local development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build      # outputs to ./dist
npm run preview
```

## Deployment (GitHub Pages)

This repo deploys automatically via `.github/workflows/deploy.yml` on every push to `main`,
using the official [`withastro/action`](https://github.com/withastro/action).

One-time repo setup required:

1. In **Settings → Pages**, set **Source** to **GitHub Actions**.
2. In **Settings → Pages → Custom domain**, enter `az.ourmasajid.com` (the `public/CNAME` file
   already contains this, so GitHub will pick it up automatically after the first deploy).
3. At your DNS provider for `ourmasajid.com`, add a `CNAME` record:
   - Host: `az`
   - Value: `<github-username>.github.io`
4. Once DNS resolves, enable **Enforce HTTPS** in the Pages settings.

## Content notes — please review before launch

Some content could not be verified from the live site directly (network access to
`austinzakat.org` was unavailable while building this redesign), so it was reconstructed from
public search results about GAMRC and its partner masajid. Please double-check before launch:

- **`src/pages/contact.astro`** — the email address `info@austinzakat.org` is a placeholder.
  Replace it with the real inbox you want inquiries sent to.
- **`src/pages/pay-zakat.astro`** — Zelle, Venmo, check, and stock transfer instructions
  intentionally omit account details/handles; they direct visitors to contact you instead.
  Add real details once confirmed, or wire up a donation processor.
- **`src/pages/apply-for-help.astro`** and **`src/pages/contact.astro`** link out to partner
  masjid websites (ICGA, Nueces Mosque, ICBC, ICRR) rather than an in-house application form,
  since the original application workflow wasn't accessible to reconstruct exactly.
- The Facebook donate link (`facebook.com/donate/906668713698002`) was found via public search
  and should be confirmed as current.

## Project structure

```
src/
  layouts/BaseLayout.astro   # shared <head>, header, footer
  components/                # Nav, Footer, cards, buttons, zakat calculator, etc.
  pages/                      # one file per route
    programs/nueces-mosque.astro
public/
  CNAME                       # az.ourmasajid.com
```

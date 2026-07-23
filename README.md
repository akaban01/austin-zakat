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

## Content notes

Content was cross-checked directly against the live `austinzakat.org` site (its React bundle
embeds the current copy, payment details, and application rules) and updated accordingly:

- **`src/pages/pay-zakat.astro`** — Zelle (`accountant@austinmosque.org`), Venmo (`@icgamanor`),
  the check mailing address, PayPal Giving Fund, Feeling Blessed, Madina Apps, and company
  matching (Benevity / AustinCares) are all real details pulled from the live site, plus direct
  donation links for each partner masjid.
- **`src/pages/apply-for-help.astro`** — uses the real application link
  (`https://austinmosque.org/client-application-for-assistance/`), required documents, eligible
  cities, and other eligibility rules from the live site.
- The previously-guessed Facebook donate link was removed — it doesn't appear anywhere on the
  live site and couldn't be verified.
- `info@austinzakat.org` was confirmed as the real general-questions inbox.
- GAMRC's full roster is nine partner masajid (Nueces Mosque, ICGA, ICRR, ICBC, ICLT, GIC, QCIC,
  Al-Noor MCC, ICHC); only the five with a verified public homepage are linked directly in
  `src/data/masajid.ts`.
- GAMRC has no EIN of its own — per its own FAQ, it's a unified committee of the local masajid,
  not a separate 501(c)(3).

## Project structure

```
src/
  layouts/BaseLayout.astro   # shared <head>, header, footer
  components/                # Nav, Footer, cards, buttons, zakat calculator, etc.
  data/masajid.ts             # shared partner masjid directory + donation links
  pages/                      # one file per route
    programs/nueces-mosque.astro
public/
  CNAME                       # az.ourmasajid.com
```

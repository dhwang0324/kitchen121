# Kitchen 121

Astro static site rebuild for Kitchen 121 (currently live on Namecheap). Content (copy, both menus, hours, addresses, photos) is taken from the client's current site and printed menus; see `src/data/`. The design shares its system with the Chicken 121 site.

- `npm install` then `npm run dev` to work locally (http://localhost:4321/kitchen121/); `npm run build` outputs `dist/`.
- Pushing to `main` publishes a **preview** to GitHub Pages (`.github/workflows/pages.yml`). Nothing touches the live Namecheap site.
- One-time setup: repo Settings > Pages > Source = **GitHub Actions**.
- Work on `claude/*` branches; merge to `main` to update the preview.

## Launch (not set up yet)
1. Back up the current site's `public_html` from cPanel.
2. Set `SITE` to the real domain and `BASE` to `/` in `astro.config.mjs`.
3. Swap the Pages workflow for the FTP deploy (same as chicken121: secrets `FTP_HOST`, `FTP_USERNAME`, `FTP_PASSWORD`).

## Menu
There is one menu page (`/menu/`) for both kitchens. A switch picks the location; `?loc=duluth` or `?loc=hamilton-mill` links straight to one. Menu content lives in `src/data/menu.ts`.

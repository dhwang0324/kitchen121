import { defineConfig } from 'astro/config';

// PREVIEW (GitHub Pages): https://dhwang0324.github.io/kitchen121/
// LAUNCH: set SITE to the real domain and BASE to '/' (see README), or edit the defaults below.
const site = process.env.SITE ?? 'https://dhwang0324.github.io';
const base = process.env.BASE ?? '/kitchen121/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  build: { format: 'directory' },
});

import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://namalemhaji.cz',
  base: '/bracha',
  integrations: [sitemap()],
  output: 'static',
});

import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://pepevejlupek.cz',
  integrations: [sitemap()],
  output: 'static',
  build: {
    inlineStylesheets: 'always',
  },
});

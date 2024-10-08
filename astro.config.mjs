// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: 'material-theme-ocean',
      defaultColor: false,
    }
  },
  integrations: [react(), tailwind()],
  output: "server"
});

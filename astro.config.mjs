// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

import vercel from '@astrojs/vercel/serverless';
import { remarkReadingTime } from './remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: 'material-theme-ocean',
      defaultColor: false,
    },
    remarkPlugins: [remarkReadingTime]
  },

  integrations: [react(), tailwind()],
  output: "server",
  adapter: vercel()
});

// @ts-check
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';

import tailwindcss from '@tailwindcss/vite';

import alpinejs from '@astrojs/alpinejs';

import lenis from 'astro-lenis';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  integrations: [alpinejs(), lenis(), vue()],

  adapter: vercel({
    webAnalytics: {
      enabled: true,
    }
  }),

  vite: {
    plugins: [tailwindcss()]
  }
});
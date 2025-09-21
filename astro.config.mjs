// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

import vercel from '@astrojs/vercel';

import tailwindcss from '@tailwindcss/vite';

import alpinejs from '@astrojs/alpinejs';

import lenis from 'astro-lenis';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), alpinejs(), lenis()],

  adapter: vercel({
    webAnalytics: {
      enabled: true,
    }
  }),

  vite: {
    plugins: [tailwindcss()]
  }
});
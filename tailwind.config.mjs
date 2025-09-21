import preline from 'preline/plugin';
import forms from '@tailwindcss/forms'

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    preline,
    forms
  ],
};

import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://az.ourmasajid.com',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});

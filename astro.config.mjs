// Astro configuration for the Jade Agentic website.
// Static output, deployed to Vercel at jadeagentic.com.
// Tailwind CSS v4 is loaded through its Vite plugin (there is no tailwind.config file;
// brand tokens live in src/styles/global.css under @theme).

// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://jadeagentic.com',
  // The site's CSS is small, so it is placed straight into each page instead of a
  // separate file the browser has to fetch before showing anything.
  build: {
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

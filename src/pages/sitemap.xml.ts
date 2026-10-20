/*
  sitemap.xml.ts

  What it is: builds /sitemap.xml, the list of pages that search engines read to
  find the site. It is generated at build time, with no extra package.
  Where it's used: referenced from public/robots.txt.
  To add a page: add its path to `pages` below, ending in a slash. The Work page is added
  automatically once it is published (workPublished in src/data/site.ts).
*/

import type { APIRoute } from 'astro';
import { workPublished } from '../data/site';

// Every public page on the site.
// Paths end in a slash to match each page's canonical address (see BaseLayout.astro),
// so search engines see one address per page.
const pages = [
  '/',
  '/about/',
  '/contact/',
  ...(workPublished ? ['/work/'] : []),
];

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL('https://jadeagentic.com');

  const urls = pages
    .map((path) => `  <url><loc>${new URL(path, origin).href}</loc></url>`)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};

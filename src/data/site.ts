/*
  site.ts

  What it is: the one place that holds site-wide facts used by several components,
  so a change is made once: navigation links, the booking link, and contact details.
  Where it's used: src/components/Nav.astro and src/components/Footer.astro.
  Which mockup it matches: the nav in reference/source/01-field-and-flight-v2.html
  and the footer in reference/source/02-ff2-site-home.html (links per site-plan.md).
*/

// The company name, shown in the logo lockup and the footer.
export const siteName = 'Jade Agentic';

// The live domain, shown in the footer's bottom row.
export const siteDomain = 'jadeagentic.com';

// Where every "Book a call" button goes: the Calendly embed on the Contact page.
export const bookCallHref = '/contact#book';

// The contact email. While this is null, the site shows the visible placeholder
// below and does NOT render a mailto link. Set it to the real address to turn
// every email spot on the site into a working link.
export const contactEmail: string | null = 'team@jadeagentic.com';
export const emailPlaceholder = '[YOUR EMAIL]';

// The Calendly link for the 20-minute intro call. Use the EVENT link, not your
// profile link, for example 'https://calendly.com/yourname/20min'. While this is
// null, the Contact page shows a visible placeholder instead of the booking
// calendar. Once it is set, the calendar appears (and loads only when a visitor
// scrolls to it, so it does not slow the page down).
export const calendlyUrl: string | null =
  'https://calendly.com/kristina-jadeagentic/30min';

// The founding clients offer: the number of spots (written as a word, for the
// sentence on the site) and whether any are still open. When all four are
// taken, set foundingSpotsOpen to false and the offer disappears from every page.
export const foundingSpotsWord = 'four';
export const foundingSpotsOpen = true;

// The Work page is built but hidden. Set this to true when the first real
// project is published, and a "Work" link appears in the nav and footer.
export const workPublished: boolean = false;

export interface SiteLink {
  label: string;
  href: string;
}

// The main links, in the order they appear in the nav and footer. "Services"
// is a section of the home page, not a page of its own (see site-plan.md).
export const mainLinks: SiteLink[] = [
  { label: 'Services', href: '/#services' },
  ...(workPublished ? [{ label: 'Work', href: '/work' }] : []),
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

// Social profiles. The footer's "Elsewhere" column only shows accounts that have
// a real href, and the whole column is hidden while none do. To add LinkedIn,
// set its href below to the company page address.
export const socialLinks: { label: string; href: string | null }[] = [
  { label: 'LinkedIn', href: null },
];

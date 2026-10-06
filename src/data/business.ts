import { googleReviews } from './google-reviews';

/**
 * Shared business entity for schema.org markup. Every page references the same
 * `@id`, so search engines and AI assistants can tie all service pages to one
 * LocalBusiness (entity consistency).
 */
export const SITE_URL = 'https://www.pepevejlupek.cz';
export const BUSINESS_ID = `${SITE_URL}/#business`;

export function businessEntity(lang: 'cs' | 'en') {
  return {
    "@type": "LocalBusiness",
    "@id": BUSINESS_ID,
    "name": lang === 'cs' ? "Pepe Vejlupek – hodinový manžel Praha" : "Pepe Vejlupek – Handyman Prague",
    "url": lang === 'cs' ? `${SITE_URL}/` : `${SITE_URL}/en/`,
    "image": `${SITE_URL}/og-image.jpg`,
    "telephone": "+420774399400",
    "email": "info@pepevejlupek.cz",
    "founder": { "@type": "Person", "name": "Josef Vejlupek" },
    "address": { "@type": "PostalAddress", "addressLocality": lang === 'cs' ? "Praha" : "Prague", "addressCountry": "CZ" },
    "priceRange": lang === 'cs' ? "od 1450 Kč" : "from 1450 CZK",
    "openingHours": ["Mo-Fr 08:00-18:00"],
    "knowsLanguage": ["cs", "en"],
    "sameAs": [googleReviews.url],
  };
}

/** FAQPage schema from {q, a} pairs; strips HTML from answers. */
export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a.replace(/<[^>]+>/g, '') },
    })),
  };
}

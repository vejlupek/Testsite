/**
 * Google Business Profile rating – single source of truth for every rating
 * shown on the site. Update `count` / `rating` when new reviews come in.
 *
 * Deliberately NOT emitted as schema.org AggregateRating: Google's guidelines
 * forbid marking up reviews collected on third-party sites (incl. Google itself).
 */
export const googleReviews = {
  rating: 5.0,
  count: 34,
  url: 'https://share.google/aYFtrn1x4m2jFi25O',
};

export function formatRating(lang: 'cs' | 'en'): string {
  return lang === 'cs'
    ? googleReviews.rating.toFixed(1).replace('.', ',')
    : googleReviews.rating.toFixed(1);
}

/** Czech plural for "recenze": 1 recenze, 2–4 recenze, 5+ recenzí */
export function reviewsLabel(lang: 'cs' | 'en'): string {
  const n = googleReviews.count;
  if (lang === 'en') return `${n} Google review${n === 1 ? '' : 's'}`;
  const word = n === 1 ? 'recenze' : n >= 2 && n <= 4 ? 'recenze' : 'recenzí';
  return `${n} ${word} na Google`;
}

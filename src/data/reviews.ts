/**
 * Real customer reviews copied from the Google Business Profile.
 * `original` = language the review was written in; the other language is a
 * translation and is labelled as such on the page. Keep texts verbatim.
 */
type L = { cs: string; en: string };

export type Review = {
  id: string;
  author: string;
  original: 'cs' | 'en';
  text: L;
  service: L;
};

export const reviews: Review[] = [
  {
    id: 'ella',
    author: 'Ella M.',
    original: 'cs',
    service: { cs: 'Opravy a údržba', en: 'Repairs & maintenance' },
    text: {
      cs: 'Pan Vejlupek byl velmi vstřícný a ochotný přijet i v situaci, kdy mi termín úplně nevycházel. Veškeré zadané práce provedl precizně, důkladně a s velkou pečlivostí. Oceňuji jeho proaktivní přístup, sám navrhoval praktická řešení a bylo vidět, že má bohaté zkušenosti. Je nesmírně šikovný, spolehlivý a profesionální. S výsledkem jsem maximálně spokojená a již jsme domluveni na dalším termínu. Mohu ho s klidným svědomím doporučit každému, kdo hledá kvalitně odvedenou práci a férové jednání.',
      en: 'Mr Vejlupek was very accommodating and willing to come even when the timing didn\'t quite work for me. He carried out all the jobs precisely, thoroughly and with great care. I appreciate his proactive approach – he suggested practical solutions himself and it was clear he has a wealth of experience. He is extremely skilled, reliable and professional. I\'m completely satisfied with the result and we\'ve already booked another visit. I can wholeheartedly recommend him to anyone looking for quality work and fair dealing.',
    },
  },
  {
    id: 'nicole',
    author: 'Nicole K.',
    original: 'cs',
    service: { cs: 'Oprava skříňky', en: 'Cabinet repair' },
    text: {
      cs: 'Pana Pepeho můžeme doporučit všema deseti!! Potřebovali jsme opravit skříňku, kde bylo nakonec třeba vyměnit vadný pant. Pán jej objednal, namontoval, ladil každý milimetr, aby vše sedělo, vše po sobě uklidil a ještě byl hrozně milej 😊 Určitě se na něj znovu obrátíme, když bude potřeba.',
      en: 'We can recommend Pepe with both hands!! We needed a cabinet repaired, which in the end required replacing a faulty hinge. He ordered it, fitted it, fine-tuned every millimetre so everything lined up, cleaned up after himself and was really lovely too 😊 We\'ll definitely call him again when needed.',
    },
  },
  {
    id: 'karel',
    author: 'Karel V.',
    original: 'cs',
    service: { cs: 'Kohoutek, zásuvka, malování', en: 'Tap, socket, painting' },
    text: {
      cs: 'Naprostá spokojenost! Pan Pepe je skutečný profesionál. Přišel přesně na čas, opravil nám tekoucí kohoutek, vyměnil zásuvku a zbavil nás malovánek na zdi po dětech. Pracoval rychle a čistě. Je vidět, že ho práce baví a rozumí jí. Pokud hledáte někoho, na koho je spolehnutí a odvede špičkovou práci za férovou cenu, už nehledejte. Doporučuji všemi deseti!',
      en: 'Completely satisfied! Pepe is a true professional. He arrived exactly on time, fixed our leaking tap, replaced a socket and got rid of the kids\' drawings on the wall. He worked quickly and cleanly. You can tell he enjoys his work and knows what he\'s doing. If you\'re looking for someone reliable who does top-quality work at a fair price, look no further. Highly recommended!',
    },
  },
  {
    id: 'jeff',
    author: 'Jeff M.',
    original: 'en',
    service: { cs: 'Hodinový manžel', en: 'Handyman services' },
    text: {
      cs: 'Velké doporučení – Pepe byl velmi profesionální, během práce přicházel s užitečnými návrhy a celkově si dával záležet na tom, aby byla práce dobře odvedená a abych byl s výsledkem spokojený. Mluví plynně anglicky, což pro mě bylo také velké plus. Celkově skvělá zkušenost 👍',
      en: 'A big recommend – Pepe was very professional, made helpful suggestions along the way and generally took pride in making sure the job was well executed and that I was happy with the results. He speaks English fluently which was a big plus for me as well. Overall, a great experience 👍',
    },
  },
  {
    id: 'paula',
    author: 'Paula H.',
    original: 'cs',
    service: { cs: 'Montáž konzole', en: 'Bracket mounting' },
    text: {
      cs: 'S panem Vejlupkem jsem byla opravdu moc spokojená. Přijel přesně na domluvený čas a bez problémů si poradil s montáží konzole na naše vysoké stropy. Bylo vidět, že je velmi zručný, pečlivý a svou práci opravdu umí. Všechno proběhlo bez komplikací a s výsledkem jsme moc spokojeni. Určitě ho můžeme s klidným svědomím doporučit!',
      en: 'I was really very happy with Mr Vejlupek. He arrived exactly on time and handled mounting a bracket on our high ceilings without any trouble. You could see he is very skilled, careful and really knows his job. Everything went smoothly and we\'re very happy with the result. We can wholeheartedly recommend him!',
    },
  },
  {
    id: 'zb',
    author: 'Z. B.',
    original: 'cs',
    service: { cs: 'Malování bytu', en: 'Apartment painting' },
    text: {
      cs: 'Využil jsem poprvé takovou službu z důvodu časové tísně. Komunikace s panem Vejlupkem super, dokázal se časově přizpůsobit, dohoda byla rychlá a jednoduchá. Vymalování menšího bytu proběhlo rychle a za cenu, co jsme si dohodli. Skvělá profesionální práce, oceňuju i čistotu po hotové práci. Určitě doporučuji.',
      en: 'I used a service like this for the first time because I was short on time. Communication with Mr Vejlupek was great, he was flexible with timing and the arrangement was quick and simple. Painting a smaller apartment went fast and for the price we agreed. Great professional work, and I also appreciate how clean everything was afterwards. Definitely recommended.',
    },
  },
  {
    id: 'patrik',
    author: 'Patrik O.',
    original: 'cs',
    service: { cs: 'Malování kuchyně', en: 'Kitchen painting' },
    text: {
      cs: 'Objednal jsem si p. Vejlupka na vymalování kuchyně, panuje absolutní spokojenost, s přípravou, výmalbou, úklidem. Přijel na přesně domluvený čas, veškerou práci vykonal rychle a především kvalitně. Mohu všem směle doporučit! 🤝👌',
      en: 'I hired Mr Vejlupek to paint my kitchen and I\'m absolutely satisfied – with the preparation, the painting and the clean-up. He arrived exactly at the agreed time and did all the work quickly and, above all, to a high standard. I can confidently recommend him to everyone! 🤝👌',
    },
  },
];

/** Homepage selection per language (6 cards = two full rows). */
export const homepageReviewIds: Record<'cs' | 'en', string[]> = {
  cs: ['ella', 'nicole', 'karel', 'paula', 'zb', 'jeff'],
  en: ['jeff', 'ella', 'nicole', 'karel', 'paula', 'zb'],
};

export function pickReviews(ids: string[]): Review[] {
  return ids.map(id => {
    const r = reviews.find(r => r.id === id);
    if (!r) throw new Error(`Unknown review id: ${id}`);
    return r;
  });
}

import type { ImageMetadata } from 'astro';
import orechOstruvek from '../assets/images/nabytek/kuchyne-orech-ostruvek.jpg';
import orechDetail from '../assets/images/nabytek/kuchyne-orech-detail.jpg';
import orechLinka from '../assets/images/nabytek/kuchyne-orech-linka.jpg';
import obyvakTv from '../assets/images/nabytek/obyvak-tv-stena.jpg';
import predsinOrech from '../assets/images/nabytek/predsin-orech.jpg';
import uchytky from '../assets/images/nabytek/uchytky-detail.jpg';
import brizaKuchyne from '../assets/images/nabytek/kuchyne-briza.jpg';
import brizaOtevrena from '../assets/images/nabytek/kuchyne-briza-otevrena.jpg';
import brizaPredsin from '../assets/images/nabytek/predsin-briza.jpg';
import brizaChodba from '../assets/images/nabytek/chodba-briza-koupelna.jpg';
import drez from '../assets/images/nabytek/drez-detail.jpg';

/** Photographer credit shown under the gallery. */
export const PHOTO_CREDIT = 'Jaroslav Kvíz';

type L = { cs: string; en: string };
type Photo = { src: ImageMetadata; alt: L; span?: '' | 'wide' | 'half' | 'tall' };
type Project = { title: L; desc: L; photos: Photo[] };

export const furnitureProjects: Project[] = [
  {
    title: {
      cs: 'Byt v bílé a ořechu – kuchyně s ostrůvkem, předsíň, obývák',
      en: 'White & walnut apartment – kitchen with island, hallway, living room',
    },
    desc: {
      cs: 'Kuchyňská linka až ke stropu s ořechovými horními dvířky a ostrůvkem, vestavěná předsíň s ořechovou věšákovou nikou a TV stěna se závěsnými skříňkami. Bezúchytková dvířka s frézovaným madlem.',
      en: 'Floor-to-ceiling kitchen with walnut upper doors and an island, a built-in hallway wardrobe with a walnut coat niche, and a TV wall with floating cabinets. Handle-less doors with a routed finger pull.',
    },
    photos: [
      { src: orechOstruvek, span: 'wide', alt: { cs: 'Kuchyně na míru s ořechovými dvířky a bílým ostrůvkem', en: 'Custom kitchen with walnut doors and a white island' } },
      { src: predsinOrech, span: 'tall', alt: { cs: 'Vestavěná skříň v předsíni s ořechovou nikou na kabáty', en: 'Built-in hallway wardrobe with a walnut coat niche' } },
      { src: orechLinka, span: 'half', alt: { cs: 'Detail kuchyňské linky s ořechovou dýhou a LED osvětlením', en: 'Kitchen detail – walnut veneer and LED under-cabinet lighting' } },
      { src: orechDetail, span: 'half', alt: { cs: 'Kuchyňský ostrůvek a linka až ke stropu', en: 'Kitchen island and floor-to-ceiling units' } },
      { src: obyvakTv, span: 'half', alt: { cs: 'TV stěna se závěsnými skříňkami a pracovní deskou z ořechu', en: 'TV wall with floating cabinets and a walnut desk' } },
      { src: uchytky, span: 'half', alt: { cs: 'Detail bezúchytkových dvířek s frézovaným madlem', en: 'Detail of handle-less doors with routed finger pull' } },
    ],
  },
  {
    title: {
      cs: 'Byt z březové překližky – kuchyně, předsíň, vestavěné skříně',
      en: 'Birch plywood apartment – kitchen, hallway, built-in wardrobes',
    },
    desc: {
      cs: 'Celý byt sjednocený březovou překližkou: kuchyňská linka s integrovanou myčkou a lednicí, otevřené police, vestavěná šatní stěna v předsíni a skříňový blok oddělující chodbu od obytné části.',
      en: 'A whole apartment unified in birch plywood: a kitchen with integrated dishwasher and fridge, open shelving, a built-in hallway wardrobe, and a cabinet block separating the hallway from the living area.',
    },
    photos: [
      { src: brizaKuchyne, span: 'wide', alt: { cs: 'Kuchyně na míru z březové překližky s barovým stolem', en: 'Custom birch plywood kitchen with a bar table' } },
      { src: brizaPredsin, span: 'tall', alt: { cs: 'Vestavěná šatní stěna z březové překližky v předsíni', en: 'Built-in birch plywood wardrobe wall in the hallway' } },
      { src: brizaOtevrena, alt: { cs: 'Kuchyně z překližky s integrovanou myčkou a lednicí', en: 'Plywood kitchen with integrated dishwasher and fridge' } },
      { src: brizaChodba, alt: { cs: 'Skříňový blok z překližky s otevřenými policemi', en: 'Plywood cabinet block with open shelving' } },
      { src: drez, alt: { cs: 'Detail dřezu a pracovní desky v kuchyni na míru', en: 'Sink and worktop detail in the custom kitchen' } },
    ],
  },
];

// Facts copied from the client's current site (kitchen121.com) and printed menus. Do not invent details here.
const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
/** Build an internal link that works both on the GitHub Pages preview (/kitchen121/) and on the real domain (/). */
export const u = (path = '') => base + path.replace(/^\//, '');

export const TAGLINE = 'Clean food for your body and soul';
export const HOURS = [
  { days: 'Monday', time: 'Closed' },
  { days: 'Tuesday to Sunday', time: '11:30am to 9pm' },
];
export const EMAIL = '121jiyoung@gmail.com';
export const INSTAGRAM = 'https://www.instagram.com/121onetwentyone/';
export const INSTAGRAM_HANDLE = '@121onetwentyone';
export const SISTER = { name: 'Chicken 121', url: 'https://chicken121.com' };

export type LocId = 'duluth' | 'hamilton-mill';
export interface Loc { id: LocId; name: string; short: string; street: string; city: string; note: string; phone: string; tel: string; order: string; menu: string }
export const LOCATIONS: Loc[] = [
  {
    id: 'duluth', name: 'Kitchen 121 Duluth', short: 'Duluth',
    street: '1611 Satellite Blvd. STE 17', city: 'Duluth, GA 30097',
    note: 'Exit 109. We are located between Starbucks and Five Guys.',
    phone: '770-545-8573', tel: '+17705458573',
    order: 'https://www.clover.com/online-ordering/kitchen-121-duluth',
    menu: u('menu/duluth/'),
  },
  {
    id: 'hamilton-mill', name: 'Kitchen 121 Hamilton Mill', short: 'Hamilton Mill',
    street: '2680 Hamilton Mill Rd', city: 'Buford, GA 30519',
    note: 'Next to Whataburger. Previously Wings N Philly Bistro.',
    phone: '770-271-5672', tel: '+17702715672',
    order: 'https://www.clover.com/online-ordering/kitchen-121-buford-buford',
    menu: u('menu/hamilton-mill/'),
  },
];
export const loc = (id: LocId) => LOCATIONS.find((l) => l.id === id)!;
export const address = (l: Loc) => `${l.street}, ${l.city}`;
export const directions = (l: Loc) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Kitchen 121 ${address(l)}`)}`;

// Dish photos cropped from the client's own menus and home page collage.
const files = import.meta.glob<{ default: ImageMetadata }>('../assets/food/*.webp', { eager: true });
export const food = (name: string): ImageMetadata => {
  const hit = files[`../assets/food/${name}.webp`];
  if (!hit) throw new Error(`Missing food photo: ${name}`);
  return hit.default;
};

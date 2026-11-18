// Wide banner images. Home: the restaurant's own table-spread photo, widened and relit with Higgsfield, food unchanged.
// Others: AI-generated with Higgsfield (GPT Image 2.6). They show dishes from the Kitchen 121 menu but are not photos
// of the restaurant's own food or dining room: replace them with real photography when it is available.
import home1 from '../assets/banners/home-1280.webp';
import home2 from '../assets/banners/home-2400.webp';
import menu1 from '../assets/banners/menu-1280.webp';
import menu2 from '../assets/banners/menu-2400.webp';
import catering1 from '../assets/banners/catering-1280.webp';
import catering2 from '../assets/banners/catering-2400.webp';
import locations1 from '../assets/banners/locations-1280.webp';
import locations2 from '../assets/banners/locations-2400.webp';

export type BannerId = 'home' | 'menu' | 'catering' | 'locations';
const set = (a: ImageMetadata, b: ImageMetadata, alt: string) => ({ src: b.src, srcset: `${a.src} ${a.width}w, ${b.src} ${b.width}w`, width: b.width, height: b.height, alt });
export const BANNERS: Record<BannerId, ReturnType<typeof set>> = {
  home: set(home1, home2, 'A crunch roll with orange roe, crunch chicken salad, red pepper and soy garlic chicken, a bulgogi salad bowl, pickled sides, dipping sauces and iced drinks on a long wooden table at Kitchen 121'),
  menu: set(menu1, menu2, 'A spread of fried chicken in several flavors, sushi rolls, a bulgogi rice bowl and stir fried udon'),
  catering: set(catering1, catering2, 'A catering tray of fried chicken in six flavors beside trays of sushi rolls and takeout boxes'),
  locations: set(locations1, locations2, 'Illustrative restaurant interior with a poke bowl and fried chicken on a wooden table'),
};

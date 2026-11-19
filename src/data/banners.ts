// Wide banner images, all the restaurant's own: Home is their photo (DSC02275) widened and relit with Higgsfield,
// food unchanged. Menu: their table-spread photo. Catering: a frame from their food video. Locations: their
// dining-room photo (DSC02348) recomposed wide with Higgsfield so the whole wall sign and the food fit the
// short banner (sides extended, then upscaled; extra-wide file so phones' narrow crop stays sharp).
// All four are graded to the same brightness, contrast, saturation and warmth.
import home1 from '../assets/banners/home-1280.webp';
import home2 from '../assets/banners/home-2400.webp';
import menu1 from '../assets/banners/menu-1280.webp';
import menu2 from '../assets/banners/menu-2400.webp';
import catering1 from '../assets/banners/catering-1280.webp';
import catering2 from '../assets/banners/catering-2400.webp';
import locations1 from '../assets/banners/locations-1280.webp';
import locations2 from '../assets/banners/locations-3800.webp';

export type BannerId = 'home' | 'menu' | 'catering' | 'locations';
const set = (a: ImageMetadata, b: ImageMetadata, alt: string) => ({ src: b.src, srcset: `${a.src} ${a.width}w, ${b.src} ${b.width}w`, width: b.width, height: b.height, alt });
export const BANNERS: Record<BannerId, ReturnType<typeof set>> = {
  home: set(home1, home2, 'Jalapeño parmesan chicken, soy garlic chicken, red pepper chicken, a sushi roll with orange roe, a salad bowl and dipping sauces on a long wooden table at Kitchen 121'),
  menu: set(menu1, menu2, 'A crunch roll, crunch chicken salad, red pepper and soy garlic chicken, a bulgogi bowl, pickled sides and iced drinks on a wooden table at Kitchen 121'),
  catering: set(catering1, catering2, 'A table spread of a sushi roll, fried chicken, a bulgogi bowl, side dishes and iced drinks at Kitchen 121'),
  locations: set(locations1, locations2, 'The "Fresh Begins Here!" sign on the wood wall at Kitchen 121, above a table with fried chicken and two mason jars of lemon iced tea'),
};

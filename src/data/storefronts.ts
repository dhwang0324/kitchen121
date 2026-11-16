// Storefront images of each kitchen. Hamilton Mill: the owner's own photo, cropped to the Kitchen 121 unit.
// Duluth: an AI re-render (Higgsfield) of the owner's phone photo at a straight-on angle in plain daylight;
// small poster text was softened so nothing invented is readable.
import duluth from '../assets/locations/duluth.webp';
import hamiltonMill from '../assets/locations/hamilton-mill.webp';
import type { LocId } from './site';

export const STOREFRONTS: Record<LocId, { img: ImageMetadata; alt: string; position: string }> = {
  duluth: { img: duluth, alt: 'The Kitchen 121 storefront in Duluth: red brick, the Kitchen 121 sign, a black dome awning over the door and a neon OPEN sign', position: '50% 45%' },
  'hamilton-mill': { img: hamiltonMill, alt: 'The Kitchen 121 storefront in Hamilton Mill: red brick and stone corner unit with the Kitchen 121 sign and the round Chef-crafted kitchen sign', position: '50% 50%' },
};

// Storefront images of each kitchen: AI re-renders (Higgsfield) of the owner's own photos of the buildings,
// at a cleaner angle and in nicer light. Small poster text was softened so nothing invented is readable.
import duluth from '../assets/locations/duluth.webp';
import hamiltonMill from '../assets/locations/hamilton-mill.webp';
import type { LocId } from './site';

export const STOREFRONTS: Record<LocId, { img: ImageMetadata; alt: string; position: string }> = {
  duluth: { img: duluth, alt: 'The Kitchen 121 storefront in Duluth at dusk: red brick, the Kitchen 121 sign, a black dome awning over the door and a neon OPEN sign', position: '50% 45%' },
  'hamilton-mill': { img: hamiltonMill, alt: 'The Kitchen 121 storefront in Hamilton Mill: red brick and stone corner unit with the Kitchen 121 sign and the round Chef-crafted kitchen sign', position: '55% 45%' },
};

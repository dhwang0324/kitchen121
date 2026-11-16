// Menus transcribed from the printed menu images on kitchen121.com (Duluth: 02_2725_121PaperMenu, Hamilton Mill: hm_menu, Jan 2026).
// Names, descriptions, prices and the * / spicy / V / G marks are copied as printed. Check against the client before launch.
import type { LocId } from './site';

export interface Item { n: string; p: number; d?: string; raw?: boolean; spicy?: boolean; v?: boolean; g?: boolean; serves?: string }
export interface Photo { img: string; cap: string }
export interface Section { id: string; title: string; note?: string; extra?: string; items: Item[]; photos?: Photo[] }

const R = true; // shorthand for flags below

const specialRolls: Section = {
  id: 'special-roll', title: '121 Special Roll',
  items: [
    { n: '121 Yummy Yummy Roll', p: 16, raw: R, d: 'Spicy tuna, crab mix, avocado, cucumber, cream cheese, deep fry, fish roe, honey mayo, spicy mayo, and eel sauce' },
    { n: '121 Special Eel Roll', p: 16, d: 'Shrimp tempura, crab mix, avocado, cucumber, topped with fresh water eel, tempura flakes, honey mayo, and eel sauce' },
    { n: '121 Double Shrimp Tempura Roll', p: 16, d: 'Shrimp tempura, crab mix, avocado, cucumber, popcorn shrimp, tempura flakes, honey mayo, spicy mayo, and eel sauce' },
    { n: '121 Extreme Beauty Roll', p: 16, raw: R, d: 'Shrimp tempura, crab mix, cucumber, avocado cream cheese roll topped with spicy tuna, sweet chili sauce, and eel sauce with rice paper' },
  ],
  photos: [
    { img: 'special-yummy', cap: '121 Yummy Yummy Roll' },
    { img: 'special-extreme-beauty', cap: '121 Extreme Beauty Roll' },
    { img: 'special-double-shrimp', cap: '121 Double Shrimp Tempura Roll' },
  ],
};

const rollPhotos: Photo[] = [
  { img: 'roll-rainbow', cap: 'Rainbow Roll' },
  { img: 'roll-caterpillar', cap: 'Caterpillar Roll' },
  { img: 'roll-salmon-rice-paper', cap: 'Salmon Rice Paper Roll' },
];

const rollsDuluth: Section = {
  id: 'roll', title: '121 Roll', photos: rollPhotos,
  items: [
    { n: 'Rainbow Roll', p: 12, raw: R, d: 'Crab mix, cucumber, avocado, topped with salmon, tuna, cooked shrimp' },
    { n: 'Salmon Avocado Roll', p: 10, raw: R, g: R, d: 'Fresh salmon, avocado' },
    { n: 'Tuna Avocado Roll', p: 10, raw: R, g: R, d: 'Fresh tuna, avocado' },
    { n: 'Salmon Roll', p: 11, raw: R, d: 'Crab meat, cucumber, avocado, topped with fresh salmon' },
    { n: 'Tuna Roll', p: 11, raw: R, d: 'Crab meat, cucumber, avocado, topped with fresh tuna' },
    { n: 'Spicy Tuna Roll', p: 10, raw: R, spicy: R, d: 'Chopped tuna, cucumber, 121 spicy sauce, hot sauce' },
    { n: 'Spicy Salmon Roll', p: 10, raw: R, spicy: R, d: 'Chopped salmon, cucumber, 121 spicy sauce, hot sauce' },
    { n: 'Golden California Roll', p: 10, raw: R, d: 'Crab mix, avocado, cucumber and fish roe' },
    { n: 'Philadelphia Roll', p: 11, raw: R, g: R, d: 'Smoked salmon, avocado and cream cheese' },
    { n: 'California Roll', p: 9, d: 'Crab mix, avocado and cucumber' },
    { n: 'Crunch California Roll', p: 10, d: 'Deep fried California roll' },
    { n: 'Shrimp Tempura Roll', p: 10, d: 'Shrimp tempura, avocado, cucumber with eel sauce' },
    { n: 'Vegetable Roll', p: 11, v: R, g: R, d: 'Pickled radish, avocado, cucumber' },
    { n: 'Caterpillar Roll', p: 11, d: 'Crab mix, cucumber topped with avocado, honey mayo and eel sauce' },
    { n: 'Baked Salmon Roll', p: 11, spicy: R, d: 'Crab mix, cucumber, avocado roll topped with baked salmon, honey mayo, eel sauce, hot sauce' },
    { n: 'Vegetable Rice Paper Roll', p: 11, v: R, g: R, d: 'Pickled red onion, pickled radish, avocado, lettuce, cucumber, wrapped in rice paper with sweet vinegar' },
    { n: 'Salmon Rice Paper Roll', p: 11, raw: R, d: 'Fresh salmon, crab mix, avocado, cooked shrimp, cucumber, wrapped in rice paper with ponzu sauce and fish roe' },
    { n: 'Tuna Rice Paper Roll', p: 11, raw: R, d: 'Fresh tuna, crab mix, avocado, cooked shrimp, cucumber, wrapped in rice paper with ponzu sauce and fish roe' },
  ],
};

const rollsHamiltonMill: Section = {
  id: 'roll', title: '121 Roll', photos: rollPhotos,
  items: [
    { n: '121 Crunch Spicy Tuna Roll', p: 13, raw: R, spicy: R, d: 'Spicy tuna, avocado, cucumber, pickled jalapeno, deep fry, honey mayo, spicy mayo, eel sauce and hot sauce' },
    { n: '121 Chicken Volcano Roll', p: 13, spicy: R, d: 'Fried chicken, cucumber, crab meat, cream cheese, masago, honey mayo, spicy mayo and eel sauce' },
    { n: 'Rainbow Roll', p: 12, raw: R, d: 'Crab mix, cucumber, avocado, topped with salmon, tuna, cooked shrimp' },
    { n: 'Salmon Avocado Roll', p: 10, raw: R, g: R, d: 'Fresh salmon, avocado' },
    { n: 'Tuna Avocado Roll', p: 10, raw: R, g: R, d: 'Fresh tuna, avocado' },
    { n: 'Salmon Roll', p: 11, raw: R, d: 'Crab meat, cucumber, avocado, topped with fresh salmon' },
    { n: 'Tuna Roll', p: 11, raw: R, d: 'Crab meat, cucumber, avocado, topped with fresh tuna' },
    { n: 'Spicy Tuna Roll', p: 10, raw: R, spicy: R, d: 'Chopped tuna, cucumber, 121 spicy sauce, hot sauce' },
    { n: 'Spicy Salmon Roll', p: 10, raw: R, spicy: R, d: 'Chopped salmon, cucumber, 121 spicy sauce, hot sauce' },
    { n: 'Golden California Roll', p: 10, raw: R, d: 'Crab mix, avocado, cucumber and fish roe' },
    { n: 'Philadelphia Roll', p: 11, raw: R, g: R, d: 'Smoked salmon, avocado and cream cheese' },
    { n: 'California Roll', p: 9, d: 'Crab meat, avocado and cucumber' },
    { n: 'Baked Salmon Roll', p: 11, spicy: R, d: 'Crab meat, cucumber, avocado topped with baked salmon, honey mayo, eel sauce, hot sauce' },
    { n: 'Caterpillar Roll', p: 11, d: 'Crab meat, cucumber topped with avocado, honey mayo and eel sauce' },
    { n: 'Crunch California Roll', p: 10, d: 'Deep fried California roll' },
    { n: 'Shrimp Tempura Roll', p: 10, d: 'Shrimp tempura, avocado, cucumber with eel sauce' },
    { n: 'Vegetable Roll', p: 11, v: R, g: R, d: 'Pickled radish, avocado, cucumber' },
    { n: 'Vegetable Rice Paper Roll', p: 11, v: R, g: R, d: 'Pickled radish, avocado, lettuce, cucumber, wrapped in rice paper with sweet vinegar' },
    { n: 'Salmon Rice Paper Roll', p: 11, raw: R, d: 'Salmon, crab meat, avocado, cooked shrimp, cucumber, wrapped in rice paper with ponzu sauce and fish roe' },
    { n: 'Tuna Rice Paper Roll', p: 11, raw: R, d: 'Tuna, crab meat, avocado, cooked shrimp, cucumber, wrapped in rice paper with ponzu sauce and fish roe' },
  ],
};

const chickenPhotos: Photo[] = [
  { img: 'chicken-soy-garlic', cap: 'Oriental Soy Garlic Chicken' },
  { img: 'chicken-snow-cheese', cap: 'Snow Cheese Chicken' },
  { img: 'chicken-red-pepper', cap: 'Red Pepper Chicken' },
];

export const partyPlatters: Section = {
  id: 'party-platter', title: '121 Party Platter',
  items: [
    { n: 'Oriental Soy Garlic Chicken Platter', p: 35, serves: 'Serves 2 to 3' },
    { n: 'Sweet Onion Chicken Platter', p: 35, serves: 'Serves 2 to 3' },
    { n: 'Red Pepper Chicken Platter', p: 35, serves: 'Serves 2 to 3' },
    { n: 'Lemon Pepper Chicken Platter', p: 35, serves: 'Serves 2 to 3' },
    { n: 'Chicken All Star', p: 43, serves: 'Serves 2 to 3' },
    { n: '121 Assorted Roll Platter', p: 63, raw: R, serves: 'Serves 4 to 5', d: 'Spicy tuna, shrimp tempura, California, rainbow, Philadelphia, caterpillar' },
    { n: "121 Chef's Choice Platter", p: 63, raw: R, serves: 'Serves 4 to 5', d: 'Yummy Yummy, double shrimp tempura, baked salmon, salmon avocado, spicy tuna' },
    { n: '121 Sushi All-Star', p: 65, serves: 'Serves 4 to 5', d: 'Baked salmon, caterpillar, rainbow, golden California, tuna roll, salmon roll' },
  ],
};

const duluth: Section[] = [
  {
    id: 'signature-chicken', title: '121 Signature Chicken',
    note: 'House craft 1.5 lb chicken breast + hand made sauce.', extra: 'Side: steamed rice $2, side salad $2',
    photos: chickenPhotos,
    items: [
      { n: 'Crunch Fried Chicken', p: 16 },
      { n: 'Oriental Soy Garlic Chicken', p: 17 },
      { n: 'Sweet Onion Chicken', p: 17 },
      { n: 'Red Pepper Chicken', p: 17, spicy: R },
      { n: 'Snow Cheese Chicken', p: 17 },
      { n: 'Jalapeño Parmesan Chicken', p: 17 },
      { n: 'Lemon Pepper Chicken', p: 17 },
      { n: 'Half & Half Chicken', p: 19 },
    ],
  },
  specialRolls,
  rollsDuluth,
  {
    id: 'appetizers', title: 'Appetizers',
    photos: [{ img: 'app-dumpling', cap: 'Fried Pork Dumpling' }, { img: 'app-carpaccio', cap: 'Salmon Carpaccio' }],
    items: [
      { n: 'Crispy Brussels Sprouts', p: 9, v: R },
      { n: 'Salmon Carpaccio', p: 11, raw: R, g: R },
      { n: 'Tuna Carpaccio', p: 11, raw: R, g: R },
      { n: 'Salmon Mini Roll', p: 6, raw: R, g: R },
      { n: 'Tuna Mini Roll', p: 6, raw: R, g: R },
      { n: 'Avocado Mini Roll', p: 6, v: R, g: R },
      { n: 'Seaweed Salad', p: 6, v: R },
      { n: 'Cucumber Salad', p: 5, v: R },
      { n: 'Fried Pork Dumplings', p: 8 },
      { n: 'Fried Vegetable Dumplings', p: 8, v: R },
      { n: 'Octopus Dumpling (Tako Yaki)', p: 9 },
      { n: 'Nigiri Plate (2 Salmon, 2 Tuna)', p: 11, raw: R, g: R },
    ],
  },
  {
    id: 'hot-bowl', title: 'Hot Bowl',
    note: 'Base: seasoned rice, sunny side up, tempura flake, green onion, sesame seed.', extra: 'Extra protein $5',
    photos: [{ img: 'hot-bulgogi', cap: 'Grilled Bulgogi Hot Bowl' }, { img: 'hot-salmon', cap: 'Grilled Salmon Hot Bowl' }],
    items: [
      { n: 'Grilled Bulgogi Hot Bowl', p: 16 },
      { n: 'Grilled Salmon Hot Bowl', p: 16 },
      { n: 'Grilled Shrimp Hot Bowl', p: 16 },
      { n: 'Grilled Chicken Hot Bowl', p: 16 },
      { n: 'Fried Tofu Hot Bowl', p: 16 },
    ],
  },
  {
    id: 'noodle-bowl', title: 'Noodle Bowl',
    note: 'Thick udon noodle, grilled zucchini, grilled sweet onion, sunny side up egg, sesame seeds.', extra: 'Extra protein $5',
    photos: [{ img: 'noodle-bulgogi', cap: 'Bulgogi Stir Fry' }, { img: 'noodle-shrimp', cap: 'Shrimp Stir Fry' }, { img: 'noodle-soup', cap: 'Udon Noodle Soup' }],
    items: [
      { n: 'Stir Fried Udon with Grilled Bulgogi', p: 17 },
      { n: 'Stir Fried Udon with Grilled Salmon', p: 17 },
      { n: 'Stir Fried Udon with Grilled Shrimp', p: 17 },
      { n: 'Stir Fried Udon with Grilled Chicken', p: 17 },
      { n: 'Stir Fried Udon with Fried Tofu', p: 17 },
      { n: 'Udon Noodle Soup', p: 15 },
      { n: 'Soup Noodle Combination', p: 23, raw: R },
      { n: 'Stir Fried Noodle Combination', p: 25, raw: R },
    ],
  },
  {
    id: 'salad-bowl', title: 'Salad Bowl',
    note: 'Hand-cut lettuce, grape tomato, red onion, radish, house made lemon vinaigrette, grilled zucchini, avocado, almond, soy sauce reduction.', extra: 'Extra protein $5',
    photos: [{ img: 'salad-bulgogi', cap: 'Grilled Bulgogi Salad' }],
    items: [
      { n: 'Grilled Bulgogi Salad', p: 16 },
      { n: 'Grilled Salmon Salad', p: 16 },
      { n: 'Grilled Shrimp Salad', p: 16 },
      { n: 'Grilled Chicken Salad', p: 16 },
      { n: 'Fried Tofu Salad', p: 16, v: R },
    ],
  },
  {
    id: 'sushi-bowl', title: 'Sushi Bowl',
    note: 'Seasoned rice + lettuce, pickled onion, pickled radish, avocado, fresh cucumber, seaweed salad, sesame seed, poke sauce.', extra: 'Extra protein $5',
    photos: [{ img: 'sushi-bowl', cap: 'Combination Sushi Bowl' }],
    items: [
      { n: 'Salmon Sushi Bowl', p: 13, raw: R },
      { n: 'Tuna Sushi Bowl', p: 13, raw: R },
      { n: 'Combination Sushi Bowl', p: 13, raw: R },
      { n: 'Grilled Shrimp Sushi Bowl', p: 13 },
      { n: 'Fried Tofu Sushi Bowl', p: 13, v: R },
      { n: 'Honey Mayo Crab Meat Sushi Bowl', p: 13 },
    ],
  },
  partyPlatters,
];

const hamiltonMill: Section[] = [
  {
    id: 'signature-chicken', title: '121 Signature Chicken',
    note: 'House craft 1.5 lb chicken breast + hand made sauce.',
    photos: [{ img: 'hm-all-star', cap: 'Chicken All Star (6 flavors)' }, chickenPhotos[0], chickenPhotos[1]],
    items: [
      { n: 'Chicken All Star (6 Flavors)', p: 43, serves: 'Serves 2 to 3' },
      { n: 'Crunch Fried Chicken', p: 17 },
      { n: 'Half & Half Chicken', p: 19 },
      { n: 'Sweet Onion Chicken', p: 17 },
      { n: 'Jalapeño Parmesan Chicken', p: 17 },
      { n: 'Snow Cheese Chicken', p: 17 },
      { n: 'Lemon Pepper Chicken', p: 17 },
      { n: 'Oriental Soy Garlic Chicken', p: 17 },
      { n: 'Red Pepper Chicken', p: 17, spicy: R },
    ],
  },
  specialRolls,
  rollsHamiltonMill,
  {
    id: 'small-plate', title: 'Small Plate',
    photos: [{ img: 'app-carpaccio', cap: 'Salmon Carpaccio' }, { img: 'app-dumpling', cap: 'Fried Pork Dumpling' }],
    items: [
      { n: 'Crispy Brussels Sprouts', p: 9, v: R },
      { n: 'Salmon Carpaccio', p: 11, raw: R, g: R },
      { n: 'Tuna Carpaccio', p: 11, raw: R, g: R },
      { n: 'Scallop Carpaccio', p: 11, raw: R, g: R },
      { n: 'Salmon Mini Roll', p: 6, raw: R, g: R },
      { n: 'Tuna Mini Roll', p: 6, raw: R, g: R },
      { n: 'Avocado Mini Roll', p: 6, v: R, g: R },
      { n: 'Seaweed Salad', p: 6, v: R },
      { n: 'Cucumber Salad', p: 5, v: R },
      { n: 'Fried Pork Dumplings', p: 8 },
      { n: 'Fried Vegetable Dumplings', p: 8, v: R },
      { n: 'Octopus Dumpling (Tako Yaki)', p: 9 },
      { n: 'Nigiri Plate (2 Salmon, 2 Tuna)', p: 11, raw: R, g: R },
      { n: 'Crunch Spicy Tuna Bite', p: 10, raw: R, spicy: R },
      { n: 'Crunch Spicy Salmon Bite', p: 10, raw: R, spicy: R },
      { n: 'Tako Wasabi', p: 11, raw: R },
    ],
  },
  {
    id: 'cool-salad', title: 'House Craft Cool Salad',
    photos: [{ img: 'hm-poke', cap: 'Salmon Poke Bowl' }, { img: 'hm-smoked-salmon', cap: 'Smoked Salmon Salad' }, { img: 'hm-combo-poke', cap: 'Combination Poke Bowl' }],
    items: [
      { n: 'Burrata Cheese Grape Salad', p: 12, d: 'Fresh burrata with grapes, parmesan, and house-made basil vinaigrette' },
      { n: 'Parmesan Caesar Salad', p: 9, d: 'Lettuce, croutons, parmesan cheese, sunflower seeds, almonds and house-made Caesar dressing' },
      { n: 'Smoked Salmon Salad', p: 13, raw: R, d: 'Lettuce, caper, boiled egg, pickled red onion, smoked salmon, lemon vinaigrette' },
      { n: 'Salmon Poke Bowl', p: 13, raw: R, d: 'Salmon, lettuce, pickled onion, avocado, cucumber, seaweed salad, sesame seed, poke sauce' },
      { n: 'Combination Poke Bowl', p: 13, raw: R, d: 'Salmon & tuna, lettuce, pickled onion, avocado, cucumber, seaweed salad, sesame seed, poke sauce' },
      { n: 'Honey Mayo Crab Meat Poke Bowl', p: 13, d: 'Crab meat, lettuce, pickled onion, avocado, cucumber, seaweed salad, sesame seed, poke sauce' },
    ],
  },
  {
    id: 'cool-side', title: 'Cool Side',
    items: [
      { n: 'Coleslaw', p: 3 },
      { n: 'Pickled Vegetables', p: 3 },
      { n: 'Pasta Corn Salad', p: 5 },
      { n: 'Caprese Bites', p: 6 },
      { n: 'Greek Yogurt Potato Salad', p: 5 },
    ],
  },
  partyPlatters,
];

export const MENUS: Record<LocId, Section[]> = { duluth, 'hamilton-mill': hamiltonMill };
export const RAW_NOTICE = 'Items marked with an asterisk are served undercooked or may contain raw ingredient. Warning: consuming raw or undercooked meats, seafood, fish or eggs may increase your risk of food-borne illness. All crab used is imitation crab.';

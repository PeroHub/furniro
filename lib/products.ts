export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  badge?: {
    type: 'discount' | 'new';
    text: string;
  };
  category: 'chair' | 'sofa' | 'lamp' | 'decor' | 'table' | 'bed' | string;
  rating?: number;
  reviewsCount?: number;
  description?: string;
  sku?: string;
  tags?: string;
}

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'syltherine',
    name: 'Syltherine',
    subtitle: 'Stylish cafe chair',
    price: 2500000,
    originalPrice: 3500000,
    image: '/images/product_cafe_chair_1793965648211.jpg',
    images: [
      '/images/product_cafe_chair_1793965648211.jpg',
      '/images/hero_scandinavian_room_1793965621222.jpg',
      '/images/category_dining_table_1793965623267.jpg',
      '/images/category_living_room_1793965623014.jpg',
    ],
    badge: { type: 'discount', text: '-30%' },
    category: 'chair',
    rating: 4.8,
    reviewsCount: 5,
    sku: 'SS001',
    tags: 'Chair, Cafe, Dining, Wood',
    description:
      'A sleek and stylish cafe chair crafted with premium ergonomics and sustainable wood, perfect for modern dining and cafe atmospheres.',
  },
  {
    id: 'leviosa',
    name: 'Leviosa',
    subtitle: 'Stylish cafe chair',
    price: 2500000,
    image: '/images/product_cafe_chair_1793965648211.jpg',
    images: [
      '/images/product_cafe_chair_1793965648211.jpg',
      '/images/hero_scandinavian_room_1793965621222.jpg',
      '/images/category_dining_table_1793965623267.jpg',
      '/images/category_living_room_1793965623014.jpg',
    ],
    category: 'chair',
    rating: 4.6,
    reviewsCount: 4,
    sku: 'SS002',
    tags: 'Chair, Minimalist, Dining',
    description:
      'Lightweight and durable Scandinavian dining chair designed for effortless elegance and prolonged seating comfort.',
  },
  {
    id: 'lolito',
    name: 'Lolito',
    subtitle: 'Luxury big sofa',
    price: 7000000,
    originalPrice: 14000000,
    image: '/images/product_luxury_sofa_1793965649590.jpg',
    images: [
      '/images/product_luxury_sofa_1793965649590.jpg',
      '/images/sofa_showcase_wide.jpg',
      '/images/product_leather_sofa_1793965649732.jpg',
      '/images/asgaard_sofa_thumb.jpg',
    ],
    badge: { type: 'discount', text: '-50%' },
    category: 'sofa',
    rating: 4.9,
    reviewsCount: 12,
    sku: 'SS003',
    tags: 'Sofa, Living Room, Luxury, Linen',
    description:
      'Luxurious spacious sofa featuring deep-seated high-density foam cushioning, premium linen upholstery, and timeless comfort.',
  },
  {
    id: 'respira',
    name: 'Respira',
    subtitle: 'Outdoor bar table and stool',
    price: 500000,
    image: '/images/category_dining_table_1793965623267.jpg',
    images: [
      '/images/category_dining_table_1793965623267.jpg',
      '/images/outdoor_sofa_set_thumb.jpg',
      '/images/casaliving_wood_thumb.jpg',
      '/images/hero_scandinavian_room_1793965621222.jpg',
    ],
    badge: { type: 'new', text: 'New' },
    category: 'table',
    rating: 4.7,
    reviewsCount: 8,
    sku: 'SS004',
    tags: 'Table, Bar, Outdoor, Wood',
    description:
      'Outdoor bar table and matching stool ensemble crafted with weather-resistant treated timber and powder-coated steel frame.',
  },
  {
    id: 'grifo',
    name: 'Grifo',
    subtitle: 'Night lamp',
    price: 1500000,
    image: '/images/product_night_lamp_1793965650106.jpg',
    images: [
      '/images/product_night_lamp_1793965650106.jpg',
      '/images/hero_scandinavian_room_1793965621222.jpg',
      '/images/category_bedroom_decor_1793965622990.jpg',
      '/images/category_living_room_1793965623014.jpg',
    ],
    category: 'lamp',
    rating: 4.5,
    reviewsCount: 6,
    sku: 'SS005',
    tags: 'Lamp, Lighting, Bedroom, Brass',
    description:
      'Warm ambient night lamp with dimmable brass switch and hand-blown frosted glass shade for soothing evening illumination.',
  },
  {
    id: 'muggo',
    name: 'Muggo',
    subtitle: 'Small mug',
    price: 150000,
    image: '/images/category_living_room_1793965623014.jpg',
    images: [
      '/images/category_living_room_1793965623014.jpg',
      '/images/category_bedroom_decor_1793965622990.jpg',
      '/images/casaliving_wood_thumb.jpg',
      '/images/category_dining_table_1793965623267.jpg',
    ],
    badge: { type: 'new', text: 'New' },
    category: 'decor',
    rating: 4.9,
    reviewsCount: 15,
    sku: 'SS006',
    tags: 'Decor, Kitchen, Ceramics, Mug',
    description:
      'Artisan ceramic mug finished with a reactive matte glaze, ideal for espresso, cappuccino, or cozy afternoon tea.',
  },
  {
    id: 'pingky',
    name: 'Pingky',
    subtitle: 'Cute bed set',
    price: 7000000,
    originalPrice: 14000000,
    image: '/images/category_bedroom_decor_1793965622990.jpg',
    images: [
      '/images/category_bedroom_decor_1793965622990.jpg',
      '/images/category_living_room_1793965623014.jpg',
      '/images/hero_scandinavian_room_1793965621222.jpg',
      '/images/product_leather_sofa_1793965649732.jpg',
    ],
    badge: { type: 'discount', text: '-50%' },
    category: 'bed',
    rating: 4.8,
    reviewsCount: 9,
    sku: 'SS007',
    tags: 'Bed, Bedroom, Decor, Cotton',
    description:
      'Cozy and playful luxury bed set tailored with organic breathable cotton and hypoallergenic plush filling for rejuvenating rest.',
  },
  {
    id: 'potty',
    name: 'Potty',
    subtitle: 'Minimalist flower pot',
    price: 500000,
    image: '/images/product_leather_sofa_1793965649732.jpg',
    images: [
      '/images/product_leather_sofa_1793965649732.jpg',
      '/images/product_luxury_sofa_1793965649590.jpg',
      '/images/asgaard_sofa_thumb.jpg',
      '/images/sofa_showcase_wide.jpg',
    ],
    badge: { type: 'new', text: 'New' },
    category: 'sofa',
    rating: 4.6,
    reviewsCount: 7,
    sku: 'SS008',
    tags: 'Sofa, Lounge, Compact, Modern',
    description:
      'Minimalist designer armchair and lounge piece with curved ergonomic contours and premium textured fabric upholstery.',
  },
];

export const MORE_PRODUCTS: Product[] = [
  {
    id: 'asgaard-sofa',
    name: 'Asgaard sofa',
    subtitle: 'Outdoor Scandinavian sofa',
    price: 25000000,
    image: '/images/asgaard_sofa_thumb.jpg',
    images: [
      '/images/asgaard_sofa_thumb.jpg',
      '/images/sofa_showcase_wide.jpg',
      '/images/product_luxury_sofa_1793965649590.jpg',
      '/images/product_leather_sofa_1793965649732.jpg',
    ],
    badge: { type: 'new', text: 'New' },
    category: 'sofa',
    rating: 5.0,
    reviewsCount: 5,
    sku: 'SS009',
    tags: 'Sofa, Scandinavian, Living, Leather',
    description:
      'Setting the bar as one of the most comfortable sofas in its class, the Asgaard is a stout-hearted hero with well-balanced audio ergonomics and clean Scandinavian silhouette.',
  },
  {
    id: 'maya-dining',
    name: 'Maya Dining set',
    subtitle: 'Solid oak dining table',
    price: 12500000,
    originalPrice: 15000000,
    image: '/images/category_dining_table_1793965623267.jpg',
    images: [
      '/images/category_dining_table_1793965623267.jpg',
      '/images/product_cafe_chair_1793965648211.jpg',
      '/images/casaliving_wood_thumb.jpg',
      '/images/hero_scandinavian_room_1793965621222.jpg',
    ],
    badge: { type: 'discount', text: '-15%' },
    category: 'table',
    rating: 4.9,
    reviewsCount: 11,
    sku: 'SS010',
    tags: 'Table, Dining, Oak, Solid Wood',
    description:
      'Solid oak dining table and chair ensemble built to bring warmth, natural character, and longevity to your family dinner gatherings.',
  },
  {
    id: 'nordic-lounge',
    name: 'Nordic Lounge chair',
    subtitle: 'Woven rattan accent chair',
    price: 3200000,
    image: '/images/hero_scandinavian_room_1793965621222.jpg',
    images: [
      '/images/hero_scandinavian_room_1793965621222.jpg',
      '/images/product_cafe_chair_1793965648211.jpg',
      '/images/category_living_room_1793965623014.jpg',
      '/images/product_night_lamp_1793965650106.jpg',
    ],
    category: 'chair',
    rating: 4.7,
    reviewsCount: 8,
    sku: 'SS011',
    tags: 'Chair, Rattan, Accent, Lounge',
    description:
      'Handcrafted woven rattan accent chair combining mid-century Scandinavian simplicity with organic natural textures and airy comfort.',
  },
  {
    id: 'lumina-arc',
    name: 'Lumina Arc lamp',
    subtitle: 'Architectural floor light',
    price: 2800000,
    originalPrice: 3500000,
    image: '/images/product_night_lamp_1793965650106.jpg',
    images: [
      '/images/product_night_lamp_1793965650106.jpg',
      '/images/hero_scandinavian_room_1793965621222.jpg',
      '/images/category_living_room_1793965623014.jpg',
      '/images/product_luxury_sofa_1793965649590.jpg',
    ],
    badge: { type: 'discount', text: '-20%' },
    category: 'lamp',
    rating: 4.8,
    reviewsCount: 7,
    sku: 'SS012',
    tags: 'Lamp, Floor Light, Modern, Brass',
    description:
      'Architectural sweeping floor arc lamp with weighted marble base and brushed brass finish that gracefully illuminates modern living rooms.',
  },
];

export const ALL_PRODUCTS: Product[] = [...INITIAL_PRODUCTS, ...MORE_PRODUCTS];

export function getProductById(id?: string): Product {
  if (!id) return INITIAL_PRODUCTS[0];
  const cleanId = id.trim().toLowerCase();

  // 1. Exact match
  const exact = ALL_PRODUCTS.find((p) => p.id.toLowerCase() === cleanId);
  if (exact) return exact;

  // 2. Base ID match (strip trailing -# like syltherine-1 -> syltherine)
  const baseId = cleanId.replace(/-\d+$/, '');
  const baseMatch = ALL_PRODUCTS.find((p) => p.id.toLowerCase() === baseId);
  if (baseMatch) return baseMatch;

  // 3. Name slug match
  const slugMatch = ALL_PRODUCTS.find(
    (p) => p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === cleanId
  );
  if (slugMatch) return slugMatch;

  // Fallback to asgaard-sofa or first product
  return ALL_PRODUCTS.find((p) => p.id === 'asgaard-sofa') || INITIAL_PRODUCTS[0];
}

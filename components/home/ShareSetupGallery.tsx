'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Instagram, Heart } from 'lucide-react';
import { useStore } from '@/context/StoreContext';

interface GalleryTile {
  id: string;
  image: string;
  handle: string;
  alt: string;
  span?: string;
  aspect?: string;
}

const TILES: GalleryTile[] = [
  // Col 1
  {
    id: 'tile-1',
    image: '/images/hero_scandinavian_room_1793965621222.jpg',
    handle: '@craft_home',
    alt: 'Tall Scandinavian display shelf with greenery',
    aspect: 'h-[300px] sm:h-[382px]',
  },
  {
    id: 'tile-2',
    image: '/images/product_leather_sofa_1793965649732.jpg',
    handle: '@vintage_vibes',
    alt: 'Vintage armchair accent piece',
    aspect: 'h-[260px] sm:h-[323px]',
  },

  // Col 2
  {
    id: 'tile-3',
    image: '/images/category_living_room_1793965623014.jpg',
    handle: '@modern_work',
    alt: 'Minimalist creative workspace with laptop and coffee',
    aspect: 'h-[240px] sm:h-[312px]',
  },
  {
    id: 'tile-4',
    image: '/images/category_dining_table_1793965623267.jpg',
    handle: '@scandi_stools',
    alt: 'Handcrafted timber stools with ceramic floral vase',
    aspect: 'h-[200px] sm:h-[242px]',
  },

  // Col 3 (Center Anchor)
  {
    id: 'tile-5',
    image: '/images/category_dining_table_1793965623267.jpg',
    handle: '@family_dining',
    alt: 'Warm family dining room with chandelier',
    aspect: 'h-[320px] sm:h-[392px]',
  },

  // Col 4
  {
    id: 'tile-6',
    image: '/images/category_bedroom_decor_1793965622990.jpg',
    handle: '@serene_sleep',
    alt: 'Master bedroom with tufted bed and bench',
    aspect: 'h-[280px] sm:h-[348px]',
  },
  {
    id: 'tile-7',
    image: '/images/product_night_lamp_1793965650106.jpg',
    handle: '@art_corner',
    alt: 'Framed artwork and sculptured vase',
    aspect: 'h-[190px] sm:h-[242px]',
  },
  {
    id: 'tile-8',
    image: '/images/product_cafe_chair_1793965648211.jpg',
    handle: '@geometric_kitchen',
    alt: 'Kitchen backsplash with hanging utensils',
    aspect: 'h-[160px] sm:h-[196px]',
  },

  // Col 5
  {
    id: 'tile-9',
    image: '/images/product_luxury_sofa_1793965649590.jpg',
    handle: '@brick_terrace',
    alt: 'Rustic sunlit dining terrace with brick facade',
    aspect: 'h-[340px] sm:h-[433px]',
  },
];

export default function ShareSetupGallery() {
  const { showToast } = useStore();

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-8 sm:mb-12">
        <span className="block text-xs sm:text-sm font-semibold text-[#666666] tracking-wide mb-1 font-['Poppins',sans-serif]">
          Share your setup with
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#333333] font-['Montserrat',sans-serif]">
          #FuniroFurniture
        </h2>
      </div>

      {/* Responsive Masonry / CSS Grid Gallery matching Figma tiles */}
      <div className="w-full max-w-[1780px] mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 items-center">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <div
              onClick={() => showToast(`Photo shared by ${TILES[0].handle}`)}
              className="relative w-full h-[260px] sm:h-[380px] rounded-sm overflow-hidden bg-[#F4F5F7] group cursor-pointer"
            >
              <Image
                src={TILES[0].image}
                alt={TILES[0].alt}
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 text-white text-xs font-medium">
                <span>{TILES[0].handle}</span>
              </div>
            </div>

            <div
              onClick={() => showToast(`Photo shared by ${TILES[1].handle}`)}
              className="relative w-full h-[220px] sm:h-[310px] rounded-sm overflow-hidden bg-[#F4F5F7] group cursor-pointer"
            >
              <Image
                src={TILES[1].image}
                alt={TILES[1].alt}
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 text-white text-xs font-medium">
                <span>{TILES[1].handle}</span>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <div
              onClick={() => showToast(`Photo shared by ${TILES[2].handle}`)}
              className="relative w-full h-[210px] sm:h-[300px] rounded-sm overflow-hidden bg-[#F4F5F7] group cursor-pointer"
            >
              <Image
                src={TILES[2].image}
                alt={TILES[2].alt}
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 text-white text-xs font-medium">
                <span>{TILES[2].handle}</span>
              </div>
            </div>

            <div
              onClick={() => showToast(`Photo shared by ${TILES[3].handle}`)}
              className="relative w-full h-[190px] sm:h-[240px] rounded-sm overflow-hidden bg-[#F4F5F7] group cursor-pointer"
            >
              <Image
                src={TILES[3].image}
                alt={TILES[3].alt}
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 text-white text-xs font-medium">
                <span>{TILES[3].handle}</span>
              </div>
            </div>
          </div>

          {/* Column 3 (Center) */}
          <div className="hidden lg:flex flex-col gap-3 sm:gap-4 justify-center">
            <div
              onClick={() => showToast(`Photo shared by ${TILES[4].handle}`)}
              className="relative w-full h-[320px] sm:h-[400px] rounded-sm overflow-hidden bg-[#F4F5F7] group cursor-pointer"
            >
              <Image
                src={TILES[4].image}
                alt={TILES[4].alt}
                fill
                sizes="20vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 text-white text-xs font-medium">
                <span>{TILES[4].handle}</span>
              </div>
            </div>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <div
              onClick={() => showToast(`Photo shared by ${TILES[5].handle}`)}
              className="relative w-full h-[240px] sm:h-[340px] rounded-sm overflow-hidden bg-[#F4F5F7] group cursor-pointer"
            >
              <Image
                src={TILES[5].image}
                alt={TILES[5].alt}
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 text-white text-xs font-medium">
                <span>{TILES[5].handle}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div
                onClick={() => showToast(`Photo shared by ${TILES[6].handle}`)}
                className="relative w-full h-[150px] sm:h-[200px] rounded-sm overflow-hidden bg-[#F4F5F7] group cursor-pointer"
              >
                <Image
                  src={TILES[6].image}
                  alt={TILES[6].alt}
                  fill
                  sizes="10vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div
                onClick={() => showToast(`Photo shared by ${TILES[7].handle}`)}
                className="relative w-full h-[150px] sm:h-[200px] rounded-sm overflow-hidden bg-[#F4F5F7] group cursor-pointer"
              >
                <Image
                  src={TILES[7].image}
                  alt={TILES[7].alt}
                  fill
                  sizes="10vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Column 5 */}
          <div className="hidden md:flex flex-col gap-3 sm:gap-4">
            <div
              onClick={() => showToast(`Photo shared by ${TILES[8].handle}`)}
              className="relative w-full h-[320px] sm:h-[430px] rounded-sm overflow-hidden bg-[#F4F5F7] group cursor-pointer"
            >
              <Image
                src={TILES[8].image}
                alt={TILES[8].alt}
                fill
                sizes="(max-width: 1024px) 33vw, 20vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 text-white text-xs font-medium">
                <span>{TILES[8].handle}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature banner trust strip (Warranty, Free Shipping, Support) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mt-16 sm:mt-24 pt-12 border-t border-neutral-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#FFF3E3] flex items-center justify-center text-[#B88E2F] shrink-0 font-bold text-xl">
              🏆
            </div>
            <div>
              <h4 className="text-base font-bold text-[#333333]">High Quality</h4>
              <p className="text-xs text-[#898989]">Crafted from top materials</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#FFF3E3] flex items-center justify-center text-[#B88E2F] shrink-0 font-bold text-xl">
              🛡️
            </div>
            <div>
              <h4 className="text-base font-bold text-[#333333]">Warranty Protection</h4>
              <p className="text-xs text-[#898989]">Over 2 years warranty</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#FFF3E3] flex items-center justify-center text-[#B88E2F] shrink-0 font-bold text-xl">
              🚚
            </div>
            <div>
              <h4 className="text-base font-bold text-[#333333]">Free Shipping</h4>
              <p className="text-xs text-[#898989]">Order over 150 $</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#FFF3E3] flex items-center justify-center text-[#B88E2F] shrink-0 font-bold text-xl">
              🎧
            </div>
            <div>
              <h4 className="text-base font-bold text-[#333333]">24 / 7 Support</h4>
              <p className="text-xs text-[#898989]">Dedicated support team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/context/StoreContext';

interface ProductTabsProps {
  product?: Product;
}

export default function ProductTabs({ product }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState<'desc' | 'info' | 'reviews'>('desc');

  const descText1 = product?.description || 'Embodying the raw, wayward spirit of rock \'n\' roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.';
  const descText2 = `Crafted with premium materials and precision engineering, the ${product?.name || 'Furniro piece'} sets the standard for comfortable, modern living spaces. Every detail is thoroughly tested to guarantee durability, ease of maintenance, and ergonomic pleasure.`;

  const showcaseImage1 = product?.images?.[1] || product?.image || '/images/product_luxury_sofa_1793965649590.jpg';
  const showcaseImage2 = product?.images?.[2] || '/images/sofa_showcase_wide.jpg';

  return (
    <section className="border-t border-[#D9D9D9] py-12 lg:py-16 font-['Poppins',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Centered Navigation Tabs */}
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-3 sm:gap-8 lg:gap-14 mb-6 sm:mb-8 text-sm sm:text-xl lg:text-2xl font-normal">
          <button
            onClick={() => setActiveTab('desc')}
            className={`transition-colors cursor-pointer ${
              activeTab === 'desc'
                ? 'text-black font-medium'
                : 'text-[#9F9F9F] hover:text-black'
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab('info')}
            className={`transition-colors cursor-pointer ${
              activeTab === 'info'
                ? 'text-black font-medium'
                : 'text-[#9F9F9F] hover:text-black'
            }`}
          >
            Additional Information
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`transition-colors cursor-pointer ${
              activeTab === 'reviews'
                ? 'text-black font-medium'
                : 'text-[#9F9F9F] hover:text-black'
            }`}
          >
            Reviews [{product?.reviewsCount || 5}]
          </button>
        </div>

        {/* Tab Content Paragraphs */}
        <div className="max-w-4xl mx-auto text-xs sm:text-sm text-[#9F9F9F] leading-relaxed flex flex-col gap-6 text-justify mb-10">
          <p>{descText1}</p>
          <p>{descText2}</p>
        </div>

        {/* 2-Column Image Showcase Grid: Side-by-side lifestyle cards in light beige containers (bg-[#F9F1E7]) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="bg-[#F9F1E7] rounded-lg overflow-hidden aspect-[16/10] relative flex items-center justify-center p-6 shadow-2xs">
            <Image
              src={showcaseImage1}
              alt={`${product?.name || 'Product'} detailed view`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-2"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Card 2 */}
          <div className="bg-[#F9F1E7] rounded-lg overflow-hidden aspect-[16/10] relative flex items-center justify-center p-6 shadow-2xs">
            <Image
              src={showcaseImage2}
              alt={`${product?.name || 'Product'} room showcase`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover p-1"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Star } from 'lucide-react';
import { useStore } from '@/context/StoreContext';

export interface ComparisonProductInfo {
  id: string;
  name: string;
  price: string;
  rawPrice: number;
  rating: number;
  reviewsCount: number;
  image: string;
}

interface ComparisonTopCardsProps {
  product1: ComparisonProductInfo;
  product2: ComparisonProductInfo;
  onSelectProduct2?: (product: ComparisonProductInfo) => void;
}

export const CATALOG_COMPARISON_OPTIONS: ComparisonProductInfo[] = [
  {
    id: 'outdoor-sofa-set',
    name: 'Outdoor Sofa Set',
    price: 'Rs. 224,000.00',
    rawPrice: 224000,
    rating: 4.2,
    reviewsCount: 145,
    image: '/images/outdoor_sofa_set_thumb.jpg',
  },
  {
    id: 'casaliving-wood',
    name: 'Casaliving Wood',
    price: 'Rs. 270,000.00',
    rawPrice: 270000,
    rating: 4.6,
    reviewsCount: 182,
    image: '/images/casaliving_wood_thumb.jpg',
  },
  {
    id: 'lolito',
    name: 'Lolito Luxury Sofa',
    price: 'Rs. 290,000.00',
    rawPrice: 290000,
    rating: 4.9,
    reviewsCount: 310,
    image: '/images/product_luxury_sofa_1793965649590.jpg',
  },
  {
    id: 'syltherine',
    name: 'Syltherine Lounge',
    price: 'Rs. 185,000.00',
    rawPrice: 185000,
    rating: 4.5,
    reviewsCount: 98,
    image: '/images/product_cafe_chair_1793965648211.jpg',
  },
];

function RenderStarRating({ rating, reviewsCount }: { rating: number; reviewsCount: number }) {
  return (
    <div className="flex items-center gap-2 mt-1.5 flex-wrap">
      <span className="text-sm font-medium text-black">{rating}</span>
      <div className="flex items-center text-[#FFC700]">
        {[1, 2, 3, 4, 5].map((starIndex) => {
          const isFilled = starIndex <= Math.floor(rating);
          const isHalf = !isFilled && starIndex === Math.ceil(rating);
          return (
            <span key={starIndex} className="relative inline-block w-4 h-4">
              {isFilled ? (
                <Star className="w-4 h-4 fill-[#FFC700] text-[#FFC700]" />
              ) : isHalf ? (
                <span className="relative w-4 h-4 inline-block">
                  <Star className="w-4 h-4 text-[#D9D9D9]" />
                  <span className="absolute inset-0 overflow-hidden w-[50%]">
                    <Star className="w-4 h-4 fill-[#FFC700] text-[#FFC700]" />
                  </span>
                </span>
              ) : (
                <Star className="w-4 h-4 text-[#D9D9D9]" />
              )}
            </span>
          );
        })}
      </div>
      <div className="w-[1px] h-3.5 bg-[#9F9F9F] mx-1" />
      <span className="text-xs text-[#9F9F9F] font-normal">{reviewsCount} Review</span>
    </div>
  );
}

export default function ComparisonTopCards({
  product1,
  product2,
  onSelectProduct2,
}: ComparisonTopCardsProps) {
  const { showToast } = useStore();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSelect = (item: ComparisonProductInfo) => {
    if (onSelectProduct2) {
      onSelectProduct2(item);
    }
    setIsDropdownOpen(false);
    showToast(`Switched comparison product to "${item.name}"`);
  };

  return (
    <div className="w-full font-['Poppins',sans-serif]">
      {/* 4 Column Top Grid with Hairline Dividers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-[#E8E8E8]">
        {/* Column 1: Callout & View More */}
        <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#E8E8E8]">
          <div>
            <h2 className="text-2xl lg:text-[28px] font-medium text-black leading-tight font-['Montserrat',sans-serif] max-w-[240px]">
              Go to Product page for more Products
            </h2>
            <Link
              href="/shop"
              className="inline-block mt-4 text-base font-medium text-[#727272] border-b border-[#727272] pb-0.5 hover:text-[#B88E2F] hover:border-[#B88E2F] transition-colors"
            >
              View More
            </Link>
          </div>
        </div>

        {/* Column 2: Product 1 (Asgaard Sofa) */}
        <div className="p-6 sm:p-8 lg:p-10 border-b md:border-b-0 lg:border-r border-[#E8E8E8] flex flex-col">
          {/* Beige Image Container */}
          <div className="relative w-full h-[180px] bg-[#F9F1E7] rounded-[10px] overflow-hidden p-3 flex items-center justify-center">
            <Image
              src={product1.image}
              alt={product1.name}
              fill
              sizes="(max-width: 1024px) 100vw, 25vw"
              className="object-contain p-2 hover:scale-105 transition-transform duration-300"
              referrerPolicy="no-referrer"
            />
          </div>

          <h3 className="text-xl font-medium text-black mt-3.5 font-['Montserrat',sans-serif]">
            {product1.name}
          </h3>
          <p className="text-base lg:text-lg font-medium text-black mt-1 font-['Montserrat',sans-serif]">
            {product1.price}
          </p>

          <RenderStarRating rating={product1.rating} reviewsCount={product1.reviewsCount} />
        </div>

        {/* Column 3: Product 2 (Outdoor Sofa Set) */}
        <div className="p-6 sm:p-8 lg:p-10 border-b md:border-b-0 lg:border-r border-[#E8E8E8] flex flex-col">
          {/* Beige Image Container */}
          <div className="relative w-full h-[180px] bg-[#F9F1E7] rounded-[10px] overflow-hidden p-3 flex items-center justify-center">
            <Image
              src={product2.image}
              alt={product2.name}
              fill
              sizes="(max-width: 1024px) 100vw, 25vw"
              className="object-contain p-2 hover:scale-105 transition-transform duration-300"
              referrerPolicy="no-referrer"
            />
          </div>

          <h3 className="text-xl font-medium text-black mt-3.5 font-['Montserrat',sans-serif]">
            {product2.name}
          </h3>
          <p className="text-base lg:text-lg font-medium text-black mt-1 font-['Montserrat',sans-serif]">
            {product2.price}
          </p>

          <RenderStarRating rating={product2.rating} reviewsCount={product2.reviewsCount} />
        </div>

        {/* Column 4: Add A Product Dropdown */}
        <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-start relative">
          <h2 className="text-2xl font-semibold text-black mb-3 font-['Montserrat',sans-serif]">
            Add A Product
          </h2>

          <div className="relative w-full max-w-[242px]">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full bg-[#B88E2F] hover:bg-[#9e7a27] text-white px-4 py-2.5 rounded-md flex items-center justify-between font-medium text-sm transition-colors cursor-pointer shadow-xs"
              aria-expanded={isDropdownOpen}
              aria-haspopup="listbox"
            >
              <span>Choose a Product</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute left-0 top-full mt-2 w-full bg-white border border-[#E8E8E8] rounded-md shadow-lg z-30 py-1.5 overflow-hidden">
                <div className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#9F9F9F] border-b border-neutral-100">
                  Select Alternative Product
                </div>
                {CATALOG_COMPARISON_OPTIONS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelect(item)}
                    className={`w-full text-left px-3 py-2 text-sm flex items-center gap-2 hover:bg-[#F9F1E7] transition-colors cursor-pointer ${
                      product2.id === item.id ? 'bg-[#FFF3E3] font-medium text-[#B88E2F]' : 'text-black'
                    }`}
                  >
                    <div className="relative w-7 h-7 rounded bg-[#F9F1E7] overflow-hidden shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-1 truncate">
                      <p className="truncate text-xs font-medium">{item.name}</p>
                      <p className="text-[11px] text-[#9F9F9F]">{item.price}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function CartHeader() {
  return (
    <section className="relative w-full h-[280px] sm:h-[316px] flex items-center justify-center overflow-hidden bg-[#F9F1E7]">
      {/* Background Banner with Soft Bokeh and Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/shop_hero_banner.jpg"
          alt="Warm cafe interior header banner"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter blur-[2px] scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Semi-transparent cream/white backdrop overlay matching Furniro Figma */}
        <div className="absolute inset-0 bg-white/45 backdrop-blur-[1px]" />
      </div>

      {/* Centered Content: Gold Logo Emblem + Title + Breadcrumb */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        {/* Stylized Furniro Gold Triangle Emblem */}
        <div className="w-10 h-9 relative flex items-center justify-center mb-1">
          <svg
            viewBox="0 0 36 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              d="M18 1.5L34 29.5H2L18 1.5Z"
              fill="#B88E2F"
              fillOpacity="0.15"
            />
            <path
              d="M18 3.5L32.5 28.5H3.5L18 3.5Z"
              stroke="#B88E2F"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 11.5L25 24H11L18 11.5Z"
              fill="#B88E2F"
            />
          </svg>
        </div>

        {/* Heading: Cart */}
        <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-black font-['Poppins',sans-serif] mb-2.5">
          Cart
        </h1>

        {/* Breadcrumb Navigation: Home > Cart */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm sm:text-base font-['Poppins',sans-serif]">
          <Link
            href="/"
            className="font-medium text-black hover:text-[#B88E2F] transition-colors"
          >
            Home
          </Link>
          <ChevronRight className="w-4 h-4 text-black stroke-[2.5]" />
          <span className="font-light text-black">
            Cart
          </span>
        </nav>
      </div>
    </section>
  );
}

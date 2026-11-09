'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function ShopHeader() {
  return (
    <section className="relative w-full h-[280px] sm:h-[316px] flex items-center justify-center overflow-hidden bg-[#F9F1E7]">
      {/* Background Banner with Soft Bokeh and Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/shop_hero_banner.jpg"
          alt="Warm timber cafe counter and plants"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter blur-[2px] scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Semi-transparent cream/white backdrop overlay matching Figma */}
        <div className="absolute inset-0 bg-white/45 backdrop-blur-[1px]" />
      </div>

      {/* Centered Content: Title + Breadcrumbs */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 font-['Poppins',sans-serif]">
        <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-black mb-2">
          Shop
        </h1>

        {/* Breadcrumb Navigation: Home > Shop */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm sm:text-base">
          <Link
            href="/"
            className="font-medium text-black hover:text-[#B88E2F] transition-colors"
          >
            Home
          </Link>
          <ChevronRight className="w-4 h-4 text-black stroke-[2.5]" />
          <span className="font-light text-black">
            Shop
          </span>
        </nav>
      </div>
    </section>
  );
}

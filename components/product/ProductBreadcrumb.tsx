'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface ProductBreadcrumbProps {
  productName?: string;
  category?: string;
}

export default function ProductBreadcrumb({
  productName = 'Asgaard sofa',
}: ProductBreadcrumbProps) {
  return (
    <div className="w-full bg-[#F9F1E7] py-8 font-['Poppins',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center gap-3 sm:gap-4 text-sm text-[#9F9F9F]">
        <Link
          href="/"
          className="hover:text-black transition-colors font-normal text-black/70"
        >
          Home
        </Link>
        <ChevronRight className="w-4 h-4 text-black stroke-[2.5]" />
        <Link
          href="/shop"
          className="hover:text-black transition-colors font-normal text-black/70"
        >
          Shop
        </Link>
        <ChevronRight className="w-4 h-4 text-black stroke-[2.5]" />
        {/* Vertical divider line */}
        <span className="h-7 w-[2px] bg-[#9F9F9F] mx-1" aria-hidden="true" />
        {/* Current Product in black */}
        <span className="font-normal text-black font-['Poppins',sans-serif] tracking-tight">
          {productName}
        </span>
      </div>
    </div>
  );
}

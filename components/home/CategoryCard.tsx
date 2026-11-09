'use client';

import React from 'react';
import Image from 'next/image';

export interface CategoryCardProps {
  id: string;
  name: string;
  image: string;
  onClick?: () => void;
}

export default function CategoryCard({
  name,
  image,
  onClick,
}: CategoryCardProps) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer flex flex-col items-center"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      {/* Category Image Box with Smooth Hover Zoom */}
      <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] rounded-xl overflow-hidden bg-[#F9F1E7] shadow-xs group-hover:shadow-md transition-shadow">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      {/* Label: e.g. "Dining", "Living", "Bedroom" */}
      <h3 className="mt-6 text-xl sm:text-2xl font-semibold text-[#333333] group-hover:text-[#B88E2F] transition-colors font-['Poppins',sans-serif] tracking-tight">
        {name}
      </h3>
    </div>
  );
}

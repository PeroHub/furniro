'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState<'desc' | 'info' | 'reviews'>('desc');

  return (
    <section className="border-t border-[#D9D9D9] py-12 lg:py-16 font-['Poppins',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Centered Navigation Tabs */}
        <div className="flex items-center justify-center gap-8 sm:gap-14 mb-8 text-lg sm:text-2xl font-normal">
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
            Reviews [5]
          </button>
        </div>

        {/* Tab Content Paragraphs */}
        <div className="max-w-4xl mx-auto text-xs sm:text-sm text-[#9F9F9F] leading-relaxed flex flex-col gap-6 text-justify mb-10">
          <p>
            Embodying the raw, wayward spirit of rock &apos;n&apos; roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
          </p>
        </div>

        {/* 2-Column Image Showcase Grid: Side-by-side lifestyle cards in light beige containers (bg-[#F9F1E7]) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="bg-[#F9F1E7] rounded-lg overflow-hidden aspect-[16/10] relative flex items-center justify-center p-6 shadow-2xs">
            <Image
              src="/images/product_luxury_sofa_1793965649590.jpg"
              alt="Asgaard modular sofa full front angle"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-2"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Card 2 */}
          <div className="bg-[#F9F1E7] rounded-lg overflow-hidden aspect-[16/10] relative flex items-center justify-center p-6 shadow-2xs">
            <Image
              src="/images/sofa_showcase_wide.jpg"
              alt="Asgaard modular sofa chaise lounge setup"
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

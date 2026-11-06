'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { useStore } from '@/context/StoreContext';

export default function HeroBanner() {
  const { openCart, showToast } = useStore();

  const handleBuyNow = () => {
    // Scroll smoothly to shop section
    const shopSection = document.getElementById('shop');
    if (shopSection) {
      shopSection.scrollIntoView({ behavior: 'smooth' });
    }
    showToast('Browsing the new 2024 Collection');
  };

  return (
    <section className="relative w-full min-h-[580px] lg:min-h-[720px] flex items-center overflow-hidden bg-[#F9F1E7]">
      {/* Background Hero Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hero_scandinavian_room_1793965621222.jpg"
          alt="Modern Scandinavian living room with rattan chair"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Subtle overlay gradient to ensure high readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-black/10 pointer-events-none" />
      </div>

      {/* Hero Floating Content Card (Right aligned as in Figma) */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full flex justify-end py-12 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full sm:max-w-lg lg:max-w-[620px] bg-[#FFF3E3] rounded-sm sm:rounded-md p-6 sm:p-10 lg:p-14 shadow-xl border border-[#F2ECE4]/60 backdrop-blur-xs"
        >
          {/* Subheading / Kicker */}
          <span className="block text-xs sm:text-sm font-semibold tracking-[3px] text-[#333333] uppercase mb-2 sm:mb-3">
            New Arrival
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-bold text-[#B88E2F] leading-[1.18] tracking-tight mb-4 font-['Montserrat',sans-serif] text-balance">
            Discover Our
            <br />
            New Collection
          </h1>

          {/* Paragraph */}
          <p className="text-sm sm:text-base text-[#666666] leading-relaxed mb-8 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
            luctus nec ullamcorper mattis. Handcrafted timber, woven textiles, and 
            organic forms designed for serene living.
          </p>

          {/* CTA Button */}
          <button
            onClick={handleBuyNow}
            className="inline-block px-10 sm:px-16 py-4 sm:py-5 bg-[#B88E2F] text-white text-xs sm:text-sm font-bold uppercase tracking-[2px] rounded-xs hover:bg-[#9E7A26] active:scale-[0.99] transition-all shadow-md hover:shadow-lg cursor-pointer"
          >
            BUY NOW
          </button>
        </motion.div>
      </div>
    </section>
  );
}

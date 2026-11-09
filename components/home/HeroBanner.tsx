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
    <section className="relative w-full min-h-[500px] sm:min-h-[580px] lg:min-h-[720px] flex items-center overflow-hidden bg-[#F9F1E7]">
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-white/10 to-transparent sm:from-transparent sm:via-white/10 sm:to-black/10 pointer-events-none" />
      </div>

      {/* Hero Floating Content Card (Right aligned as in Figma) */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full flex justify-end py-8 sm:py-12 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full sm:max-w-lg lg:max-w-[643px] bg-[#FFF3E3] rounded-sm sm:rounded-md p-5 sm:p-10 lg:pt-[62px] lg:pr-[43px] lg:pb-[37px] lg:pl-[39px] shadow-xl border border-[#F2ECE4]/60"
        >
          {/* Subheading / Kicker */}
          <span className="block text-xs sm:text-sm font-semibold tracking-[3px] text-[#333333] uppercase mb-2 sm:mb-3 font-['Poppins',sans-serif]">
            New Arrival
          </span>

          {/* Main Headline */}
          <h1 className="text-[28px] sm:text-4xl lg:text-[52px] font-bold text-[#B88E2F] leading-[1.2] lg:leading-[65px] tracking-tight mb-3 sm:mb-4 font-['Poppins',sans-serif]">
            Discover Our
            <br />
            New Collection
          </h1>

          {/* Paragraph */}
          <p className="text-xs sm:text-base text-[#666666] leading-relaxed mb-6 sm:mb-8 max-w-md font-['Poppins',sans-serif]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
            luctus nec ullamcorper mattis.
          </p>

          {/* CTA Button */}
          <button
            onClick={handleBuyNow}
            className="w-full sm:w-auto text-center inline-block px-10 sm:px-16 py-3.5 sm:py-5 bg-[#B88E2F] text-white text-xs sm:text-sm font-bold uppercase tracking-[2px] rounded-xs hover:bg-[#9E7A26] active:scale-[0.99] transition-all shadow-md hover:shadow-lg cursor-pointer font-['Poppins',sans-serif]"
          >
            BUY NOW
          </button>
        </motion.div>
      </div>
    </section>
  );
}

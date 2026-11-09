'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { useStore } from '@/context/StoreContext';

interface RoomSlide {
  id: string;
  number: string;
  category: string;
  title: string;
  image: string;
}

const ROOMS: RoomSlide[] = [
  {
    id: 'inner-peace',
    number: '01',
    category: 'Bed Room',
    title: 'Inner Peace',
    image: '/images/category_bedroom_decor_1793965622990.jpg',
  },
  {
    id: 'scandi-lounge',
    number: '02',
    category: 'Living Room',
    title: 'Nordic Harmony',
    image: '/images/hero_scandinavian_room_1793965621222.jpg',
  },
  {
    id: 'minimalist-dining',
    number: '03',
    category: 'Dining Space',
    title: 'Warm Serenity',
    image: '/images/category_dining_table_1793965623267.jpg',
  },
  {
    id: 'cozy-corner',
    number: '04',
    category: 'Reading Nook',
    title: 'Autumn Velvet',
    image: '/images/category_living_room_1793965623014.jpg',
  },
];

export default function InspirationSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { showToast } = useStore();

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % ROOMS.length);
  };

  const currentRoom = ROOMS[activeIndex];
  const nextRoom = ROOMS[(activeIndex + 1) % ROOMS.length];

  return (
    <section id="about" className="py-16 sm:py-24 bg-[#FCF8F3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5 pr-0 lg:pr-6 font-['Poppins',sans-serif]">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#3A3A3A] leading-[1.2] font-['Poppins',sans-serif] mb-3">
              50+ Beautiful rooms
              <br />
              inspiration
            </h2>
            <p className="text-sm sm:text-base text-[#666666] leading-relaxed mb-8 max-w-md">
              Our designer already made a lot of beautiful prototipe of rooms that inspire you.
            </p>
            <button
              onClick={() => {
                showToast('Opening 3D Room Visualizer Gallery');
              }}
              className="px-9 py-3.5 bg-[#B88E2F] text-white text-sm font-semibold tracking-wide uppercase hover:bg-[#9E7A26] transition-colors cursor-pointer rounded-xs shadow-xs"
            >
              Explore More
            </button>
          </div>

          {/* Right Carousel Slider */}
          <div className="lg:col-span-7 flex flex-col sm:flex-row gap-6 items-center relative w-full">
            {/* Primary active slide */}
            <div className="relative w-full sm:w-[380px] lg:w-[400px] h-[360px] sm:h-[480px] lg:h-[540px] rounded-xs overflow-hidden shadow-lg group">
              <Image
                src={currentRoom.image}
                alt={currentRoom.title}
                fill
                sizes="(max-width: 640px) 100vw, 400px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Floating Room Tag Box (as seen in Figma) */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:bottom-6 sm:left-6 z-10 flex items-end">
                <div className="bg-white/90 backdrop-blur-md p-4 sm:p-6 shadow-md border border-neutral-100 flex-1 sm:flex-initial">
                  <div className="flex items-center gap-2 text-xs text-[#666666] mb-1">
                    <span className="font-medium text-[#333333]">{currentRoom.number}</span>
                    <span className="w-6 h-px bg-[#666666]" />
                    <span>{currentRoom.category}</span>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-[#333333] font-['Poppins',sans-serif]">
                    {currentRoom.title}
                  </h3>
                </div>

                {/* Arrow trigger next to tag */}
                <button
                  onClick={handleNext}
                  className="bg-[#B88E2F] hover:bg-[#9E7A26] text-white p-3 sm:p-3.5 shadow-md transition-colors cursor-pointer shrink-0"
                  aria-label="Next inspiration room"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Secondary peeking slide */}
            <div 
              onClick={handleNext}
              className="hidden sm:block relative w-[240px] lg:w-[280px] h-[440px] rounded-xs overflow-hidden opacity-75 hover:opacity-100 transition-opacity cursor-pointer shadow-md"
            >
              <Image
                src={nextRoom.image}
                alt={nextRoom.title}
                fill
                sizes="280px"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition-colors" />

              {/* Circular Next Button Overlay */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white text-[#B88E2F] shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
                <ChevronRight className="w-6 h-6" />
              </div>
            </div>

            {/* Navigation Dots Indicator matching Figma circular target ring */}
            <div className="flex items-center gap-4 mt-6 sm:mt-8 self-center sm:self-start">
              {ROOMS.map((room, idx) => (
                <button
                  key={room.id}
                  onClick={() => setActiveIndex(idx)}
                  className="flex items-center justify-center p-1 cursor-pointer transition-all"
                  aria-label={`Go to room ${idx + 1}`}
                >
                  {idx === activeIndex ? (
                    <span className="w-6 h-6 rounded-full border-2 border-[#B88E2F] flex items-center justify-center">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#B88E2F]" />
                    </span>
                  ) : (
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D8D8D8] hover:bg-[#B88E2F]/60 transition-colors" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

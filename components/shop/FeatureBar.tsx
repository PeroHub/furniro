'use client';

import React from 'react';

export default function FeatureBar() {
  return (
    <section className="w-full bg-[#FAF3EA] py-16 sm:py-20 font-['Poppins',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 items-center">
          
          {/* Column 1: High Quality */}
          <div className="flex items-center gap-4">
            {/* Custom Trophy Icon from Figma */}
            <div className="shrink-0 text-black">
              <svg width="48" height="48" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
                <path d="M47.5 12.5H52.5C53.8261 12.5 55.0979 13.0268 56.0355 13.9645C56.9732 14.9021 57.5 16.1739 57.5 17.5C57.5 25.175 51.9 31.55 44.575 32.375C41.7 37.1 36.875 40.35 31.25 41.075V48.75H38.75C39.413 48.75 40.0489 49.0134 40.5178 49.4822C40.9866 49.9511 41.25 50.587 41.25 51.25C41.25 51.913 40.9866 52.5489 40.5178 53.0178C40.0489 53.4866 39.413 53.75 38.75 53.75H21.25C20.587 53.75 19.9511 53.4866 19.4822 53.0178C19.0134 52.5489 18.75 51.913 18.75 51.25C18.75 50.587 19.0134 49.9511 19.4822 49.4822C19.9511 49.0134 20.587 48.75 21.25 48.75H28.75V41.075C23.125 40.35 18.3 37.1 15.425 32.375C8.1 31.55 2.5 25.175 2.5 17.5C2.5 16.1739 3.02678 14.9021 3.96447 13.9645C4.90215 13.0268 6.17392 12.5 7.5 12.5H12.5" stroke="#242424" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.5 7.5H47.5V23.75C47.5 33.4125 39.6625 41.25 30 41.25C20.3375 41.25 12.5 33.4125 12.5 23.75V7.5Z" stroke="#242424" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#242424] font-['Montserrat',sans-serif] leading-tight">
                High Quality
              </h3>
              <p className="text-sm font-medium text-[#898989]">
                crafted from top materials
              </p>
            </div>
          </div>

          {/* Column 2: Warranty Protection */}
          <div className="flex items-center gap-4">
            {/* Custom Shield Checkmark Icon */}
            <div className="shrink-0 text-black">
              <svg width="48" height="48" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
                <path d="M30 55C30 55 50 45 50 30V12.5L30 5L10 12.5V30C10 45 30 55 30 55Z" stroke="#242424" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22.5 30L27.5 35L37.5 25" stroke="#242424" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#242424] font-['Montserrat',sans-serif] leading-tight">
                Warranty Protection
              </h3>
              <p className="text-sm font-medium text-[#898989]">
                Over 2 years
              </p>
            </div>
          </div>

          {/* Column 3: Free Shipping */}
          <div className="flex items-center gap-4">
            {/* Custom Free Shipping Box Icon */}
            <div className="shrink-0 text-black">
              <svg width="48" height="48" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
                <path d="M7.5 17.5L30 5L52.5 17.5V42.5L30 55L7.5 42.5V17.5Z" stroke="#242424" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.5 17.5L30 30L52.5 17.5" stroke="#242424" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M30 30V55" stroke="#242424" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M41.25 11.25L18.75 23.75" stroke="#242424" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#242424] font-['Montserrat',sans-serif] leading-tight">
                Free Shipping
              </h3>
              <p className="text-sm font-medium text-[#898989]">
                Order over 150 $
              </p>
            </div>
          </div>

          {/* Column 4: 24 / 7 Support */}
          <div className="flex items-center gap-4">
            {/* Custom 24/7 Support Headset Icon */}
            <div className="shrink-0 text-black">
              <svg width="48" height="48" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
                <path d="M52.5 35V27.5C52.5 15.075 42.425 5 30 5C17.575 5 7.5 15.075 7.5 27.5V35" stroke="#242424" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="5" y="32.5" width="10" height="17.5" rx="5" stroke="#242424" strokeWidth="2.5"/>
                <rect x="45" y="32.5" width="10" height="17.5" rx="5" stroke="#242424" strokeWidth="2.5"/>
                <path d="M50 50C50 52.7614 47.7614 55 45 55H32.5" stroke="#242424" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#242424] font-['Montserrat',sans-serif] leading-tight">
                24 / 7 Support
              </h3>
              <p className="text-sm font-medium text-[#898989]">
                Dedicated support
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

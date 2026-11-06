'use client';

import React from 'react';

export default function ContactInfo() {
  return (
    <div className="w-full font-['Poppins',sans-serif] space-y-10 sm:space-y-12 lg:pr-8">
      {/* 1. Address Block */}
      <div className="flex items-start gap-5 sm:gap-7">
        <div className="shrink-0 pt-1 text-black">
          {/* Location Pin Icon matching Figma */}
          <svg
            width="24"
            height="30"
            viewBox="0 0 22 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[22px] h-[28px]"
          >
            <path
              d="M11 0C4.925 0 0 4.925 0 11C0 19.25 11 28 11 28C11 28 22 19.25 22 11C22 4.925 17.075 0 11 0ZM11 15C8.79 15 7 13.21 7 11C7 8.79 8.79 7 11 7C13.21 7 15 8.79 15 11C15 13.21 13.21 15 11 15Z"
              fill="black"
            />
          </svg>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-black font-['Montserrat',sans-serif] leading-tight">
            Address
          </h3>
          <p className="text-base font-normal text-black mt-1 leading-relaxed max-w-[220px]">
            236 5th SE Avenue, New York NY10000, United States
          </p>
        </div>
      </div>

      {/* 2. Phone Block */}
      <div className="flex items-start gap-5 sm:gap-7">
        <div className="shrink-0 pt-1 text-black">
          {/* Telephone Receiver Icon matching Figma */}
          <svg
            width="24"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[24px] h-[24px]"
          >
            <path
              d="M21.99 16.95C21.99 17.29 21.91 17.64 21.75 17.98C21.59 18.32 21.36 18.63 21.04 18.91C20.5 19.38 19.9 19.7 19.22 19.88C18.55 20.06 17.83 20.15 17.06 20.15C15.93 20.15 14.73 19.87 13.46 19.31C12.19 18.75 10.94 17.99 9.71 17.03C8.48 16.06 7.37 14.97 6.38 13.76C5.39 12.55 4.6 11.31 4.02 10.05C3.44 8.79 3.14 7.6 3.14 6.47C3.14 5.72 3.23 5.01 3.4 4.35C3.58 3.69 3.89 3.09 4.34 2.57C4.9 1.9 5.56 1.56 6.32 1.56C6.61 1.56 6.9 1.63 7.17 1.77C7.44 1.91 7.68 2.13 7.87 2.44L10.13 6.03C10.32 6.33 10.43 6.6 10.47 6.84C10.51 7.08 10.47 7.32 10.35 7.55C10.23 7.78 10.03 8.04 9.75 8.32L9.04 9.06C8.93 9.17 8.87 9.3 8.87 9.46C8.87 9.55 8.9 9.66 8.95 9.77C9.01 9.88 9.07 9.97 9.12 10.05C9.69 11.14 10.42 12.18 11.32 13.16C12.22 14.14 13.18 14.95 14.22 15.58C14.3 15.63 14.38 15.68 14.48 15.74C14.59 15.8 14.7 15.83 14.81 15.83C14.98 15.83 15.12 15.76 15.24 15.62L15.93 14.86C16.23 14.53 16.51 14.3 16.76 14.17C17.01 14.04 17.26 13.99 17.51 14.04C17.76 14.09 18.04 14.21 18.36 14.41L21.96 16.99C22.28 17.18 22.5 17.42 22.63 17.7C22.75 17.97 22.81 18.25 22.81 18.54C22.81 18.83 22.73 19.13 22.58 19.43C22.43 19.73 22.23 20 21.99 20.24V16.95Z"
              fill="black"
            />
          </svg>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-black font-['Montserrat',sans-serif] leading-tight">
            Phone
          </h3>
          <p className="text-base font-normal text-black mt-1 leading-relaxed">
            Mobile: +(84) 546-5789
            <br />
            Hotline: +(84) 456-6789
          </p>
        </div>
      </div>

      {/* 3. Working Time Block */}
      <div className="flex items-start gap-5 sm:gap-7">
        <div className="shrink-0 pt-1 text-black">
          {/* Clock Icon matching Figma */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[24px] h-[24px]"
          >
            <path
              d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM16.2 16.2L11 13V7H12.5V12.2L17 14.9L16.2 16.2Z"
              fill="black"
            />
          </svg>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-black font-['Montserrat',sans-serif] leading-tight">
            Working Time
          </h3>
          <p className="text-base font-normal text-black mt-1 leading-relaxed">
            Monday-Friday: 9:00 - 22:00
            <br />
            Saturday-Sunday: 9:00 - 21:00
          </p>
        </div>
      </div>
    </div>
  );
}

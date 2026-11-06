'use client';

import React from 'react';

export interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

export default function Pagination({
  currentPage = 1,
  totalPages = 3,
  onPageChange,
}: PaginationProps) {
  const pages = [1, 2, 3];

  return (
    <nav
      aria-label="Pagination"
      className="py-10 pb-16 bg-white flex items-center justify-center gap-3 sm:gap-6 font-['Poppins',sans-serif]"
    >
      {/* Numbered Page Buttons */}
      {pages.map((page) => {
        const isActive = page === currentPage;

        return (
          <button
            key={page}
            onClick={() => onPageChange?.(page)}
            aria-current={isActive ? 'page' : undefined}
            className={`w-12 h-12 sm:w-14 sm:h-14 rounded-[10px] text-base sm:text-xl font-normal transition-colors duration-200 flex items-center justify-center cursor-pointer ${
              isActive
                ? 'bg-[#B88E2F] text-white font-medium shadow-xs'
                : 'bg-[#F9F1E7] text-black hover:bg-[#B88E2F] hover:text-white'
            }`}
          >
            {page}
          </button>
        );
      })}

      {/* "Next" Page Button */}
      <button
        onClick={() => {
          if (currentPage < totalPages) {
            onPageChange?.(currentPage + 1);
          } else {
            onPageChange?.(1);
          }
        }}
        className="h-12 sm:h-14 px-6 sm:px-7 rounded-[10px] text-base sm:text-xl font-normal bg-[#F9F1E7] text-black hover:bg-[#B88E2F] hover:text-white transition-colors duration-200 flex items-center justify-center cursor-pointer"
      >
        Next
      </button>
    </nav>
  );
}

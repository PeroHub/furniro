'use client';

import React, { useState } from 'react';
import { SlidersHorizontal, LayoutGrid, Rows3, Check } from 'lucide-react';

export interface FilterBarProps {
  totalResults?: number;
  currentPage?: number;
  itemsPerPage?: number;
  onItemsPerPageChange?: (count: number) => void;
  sortBy?: string;
  onSortChange?: (sort: string) => void;
  viewMode?: 'grid' | 'list';
  onViewModeChange?: (mode: 'grid' | 'list') => void;
  selectedCategory?: string;
  onCategoryFilter?: (cat: string) => void;
  onlyDiscounted?: boolean;
  onDiscountFilter?: (onlyDiscounted: boolean) => void;
}

export default function FilterBar({
  totalResults = 32,
  currentPage = 1,
  itemsPerPage = 16,
  onItemsPerPageChange,
  sortBy = 'default',
  onSortChange,
  viewMode = 'grid',
  onViewModeChange,
  selectedCategory = 'all',
  onCategoryFilter,
  onlyDiscounted = false,
  onDiscountFilter,
}: FilterBarProps) {
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  const startIdx = (currentPage - 1) * itemsPerPage + 1;
  const endIdx = Math.min(currentPage * itemsPerPage, totalResults);

  return (
    <div className="w-full bg-[#F9F1E7] border-y border-[#D9D9D9]/50 font-['Poppins',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 sm:py-6 flex flex-col md:flex-row items-stretch sm:items-center justify-between gap-4 sm:gap-5">
        
        {/* Left Section: Filter Button + View Toggles + Divider + Results Text */}
        <div className="flex flex-wrap items-center justify-between sm:justify-start gap-3 sm:gap-6 text-sm text-black w-full md:w-auto">
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Filter Toggle Button */}
            <button
              onClick={() => setIsFilterDrawerOpen(!isFilterDrawerOpen)}
              className="flex items-center gap-2 font-normal text-black hover:text-[#B88E2F] transition-colors cursor-pointer text-sm sm:text-base"
              aria-expanded={isFilterDrawerOpen}
              aria-label="Toggle filter options"
            >
              <SlidersHorizontal className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
              <span className="font-['Poppins',sans-serif]">Filter</span>
            </button>

            {/* Grid View Toggle Icon */}
            <button
              onClick={() => onViewModeChange?.('grid')}
              className={`p-1.5 rounded transition-colors cursor-pointer ${
                viewMode === 'grid'
                  ? 'text-black bg-white/70 shadow-2xs'
                  : 'text-neutral-500 hover:text-black'
              }`}
              title="Grid view"
              aria-label="Switch to grid view"
            >
              <LayoutGrid className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* List View Toggle Icon */}
            <button
              onClick={() => onViewModeChange?.('list')}
              className={`p-1.5 rounded transition-colors cursor-pointer ${
                viewMode === 'list'
                  ? 'text-black bg-white/70 shadow-2xs'
                  : 'text-neutral-500 hover:text-black'
              }`}
              title="List view"
              aria-label="Switch to list view"
            >
              <Rows3 className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Vertical Divider Line */}
          <span className="h-6 sm:h-8 w-[1px] sm:w-[2px] bg-[#9F9F9F]/80 hidden sm:inline-block" aria-hidden="true" />

          {/* Results Text Label */}
          <span className="text-xs sm:text-sm lg:text-base text-black font-normal font-['Poppins',sans-serif]">
            Showing {startIdx}–{endIdx} of {totalResults} results
          </span>
        </div>

        {/* Right Section: "Show" count input + "Short by" dropdown */}
        <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-6 text-xs sm:text-sm lg:text-base text-black w-full md:w-auto">
          {/* Show count input box */}
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="font-normal font-['Poppins',sans-serif] text-black">
              Show
            </span>
            <div className="relative">
              <input
                type="number"
                min="4"
                max="32"
                step="4"
                value={itemsPerPage}
                onChange={(e) => {
                  const val = parseInt(e.target.value, 10);
                  if (val > 0) onItemsPerPageChange?.(val);
                }}
                className="w-12 sm:w-14 h-10 sm:h-12 bg-white text-neutral-600 text-center font-normal rounded-xs border-none shadow-2xs focus:ring-1 focus:ring-[#B88E2F] focus:outline-hidden text-sm"
              />
            </div>
          </div>

          {/* Short by (Sort by) dropdown select input */}
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="font-normal font-['Poppins',sans-serif] text-black whitespace-nowrap">
              Short by
            </span>
            <select
              value={sortBy}
              onChange={(e) => onSortChange?.(e.target.value)}
              className="h-10 sm:h-12 bg-white text-neutral-600 px-3 sm:px-4 pr-7 sm:pr-8 rounded-xs border-none shadow-2xs text-xs sm:text-sm font-normal focus:ring-1 focus:ring-[#B88E2F] focus:outline-hidden cursor-pointer"
            >
              <option value="default">Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>
      </div>

      {/* Expandable Filter Drawer when Filter button is toggled */}
      {isFilterDrawerOpen && (
        <div className="bg-[#FFF9F3] border-t border-[#D9D9D9] px-4 sm:px-6 lg:px-12 py-5 transition-all">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-semibold text-neutral-700 uppercase tracking-wider mr-2">
                Category:
              </span>
              {[
                { id: 'all', label: 'All Items' },
                { id: 'chair', label: 'Chairs' },
                { id: 'sofa', label: 'Sofas' },
                { id: 'lamp', label: 'Lamps' },
                { id: 'table', label: 'Tables' },
                { id: 'bed', label: 'Beds' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => onCategoryFilter?.(cat.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-[#B88E2F] text-white shadow-xs'
                      : 'bg-white text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Sale filter toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => onDiscountFilter?.(!onlyDiscounted)}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full border transition-colors cursor-pointer ${
                  onlyDiscounted
                    ? 'bg-[#E97171] border-[#E97171] text-white shadow-xs'
                    : 'bg-white border-neutral-300 text-neutral-700 hover:border-black'
                }`}
              >
                {onlyDiscounted && <Check className="w-3.5 h-3.5" />}
                <span>Discounted Deals Only</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

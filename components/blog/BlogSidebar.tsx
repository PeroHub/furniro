'use client';

import React from 'react';
import Image from 'next/image';
import { Search } from 'lucide-react';
import { useStore } from '@/context/StoreContext';

export interface BlogCategory {
  name: string;
  count: number;
}

export interface RecentPost {
  id: string;
  title: string;
  date: string;
  image: string;
}

interface BlogSidebarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
  categories: BlogCategory[];
  recentPosts: RecentPost[];
}

export default function BlogSidebar({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategorySelect,
  categories,
  recentPosts,
}: BlogSidebarProps) {
  const { showToast } = useStore();

  return (
    <aside className="w-full font-['Poppins',sans-serif] lg:pl-4 xl:pl-8">
      {/* 1. Search Input Box */}
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full h-[58px] rounded-[10px] border border-[#9F9F9F] pl-5 pr-12 text-base text-black bg-white focus:outline-hidden focus:border-[#B88E2F] focus:ring-1 focus:ring-[#B88E2F] transition-all placeholder:text-[#9F9F9F]"
          aria-label="Search articles"
        />
        <button
          type="button"
          onClick={() => {
            if (searchQuery.trim()) {
              showToast(`Searching for "${searchQuery}"`);
            }
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-black hover:text-[#B88E2F] transition-colors cursor-pointer p-1"
          aria-label="Submit search"
        >
          <Search className="w-5 h-5 stroke-[2]" />
        </button>
      </div>

      {/* 2. Categories Widget */}
      <div className="mt-10 sm:mt-12">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-medium text-black font-['Poppins',sans-serif]">
            Categories
          </h3>
          {selectedCategory !== 'all' && (
            <button
              onClick={() => onCategorySelect('all')}
              className="text-xs font-semibold text-[#B88E2F] hover:underline cursor-pointer"
            >
              Clear Filter
            </button>
          )}
        </div>

        <ul className="space-y-6">
          {categories.map((cat) => {
            const isSelected = selectedCategory.toLowerCase() === cat.name.toLowerCase();

            return (
              <li key={cat.name}>
                <button
                  onClick={() => {
                    if (isSelected) {
                      onCategorySelect('all');
                    } else {
                      onCategorySelect(cat.name);
                      showToast(`Filtered by ${cat.name}`);
                    }
                  }}
                  className={`w-full flex items-center justify-between text-base transition-colors cursor-pointer group ${
                    isSelected
                      ? 'text-[#B88E2F] font-medium'
                      : 'text-[#9F9F9F] hover:text-black font-normal'
                  }`}
                >
                  <span className="group-hover:translate-x-0.5 transition-transform">
                    {cat.name}
                  </span>
                  <span className="tabular-nums text-sm">{cat.count}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* 3. Recent Posts Widget */}
      <div className="mt-14 sm:mt-16">
        <h3 className="text-2xl font-medium text-black font-['Poppins',sans-serif] mb-6">
          Recent Posts
        </h3>

        <div className="space-y-6">
          {recentPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => showToast(`Opening recent article: "${post.title}"`)}
              className="flex items-center gap-4 cursor-pointer group"
            >
              {/* Thumbnail Image Box */}
              <div className="relative w-20 h-20 rounded-[10px] overflow-hidden bg-[#F9F1E7] shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="80px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Title & Publish Date */}
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-normal text-black font-['Montserrat',sans-serif] leading-snug group-hover:text-[#B88E2F] transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-xs text-[#9F9F9F] font-normal mt-1">
                  {post.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

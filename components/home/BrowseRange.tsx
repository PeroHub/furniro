'use client';

import React from 'react';
import CategoryCard from './CategoryCard';
import { useStore } from '@/context/StoreContext';

interface CategoryItem {
  id: string;
  name: string;
  image: string;
  filterKey: string;
}

const CATEGORIES: CategoryItem[] = [
  {
    id: 'dining',
    name: 'Dining',
    image: '/images/category_dining_table_1793965623267.jpg',
    filterKey: 'table',
  },
  {
    id: 'living',
    name: 'Living',
    image: '/images/category_living_room_1793965623014.jpg',
    filterKey: 'sofa',
  },
  {
    id: 'bedroom',
    name: 'Bedroom',
    image: '/images/category_bedroom_decor_1793965622990.jpg',
    filterKey: 'bed',
  },
];

interface BrowseRangeProps {
  onSelectCategory?: (category: string) => void;
}

export default function BrowseRange({ onSelectCategory }: BrowseRangeProps) {
  const { showToast } = useStore();

  const handleCategoryClick = (category: CategoryItem) => {
    if (onSelectCategory) {
      onSelectCategory(category.filterKey);
    }
    const shopEl = document.getElementById('shop');
    if (shopEl) {
      shopEl.scrollIntoView({ behavior: 'smooth' });
    }
    showToast(`Viewing ${category.name} collection`);
  };

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-[32px] font-bold tracking-tight text-[#333333] font-['Montserrat',sans-serif] mb-2">
            Browse The Range
          </h2>
          <p className="text-sm sm:text-base text-[#666666]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* 3-Column Image Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {CATEGORIES.map((cat) => (
            <CategoryCard
              key={cat.id}
              id={cat.id}
              name={cat.name}
              image={cat.image}
              onClick={() => handleCategoryClick(cat)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

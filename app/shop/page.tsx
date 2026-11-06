'use client';

import React, { useState, useMemo } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import ShopHeader from '@/components/shop/ShopHeader';
import FilterBar from '@/components/shop/FilterBar';
import ProductCatalogGrid, { DEFAULT_16_PRODUCTS } from '@/components/shop/ProductCatalogGrid';
import Pagination from '@/components/shop/Pagination';
import FeatureBar from '@/components/shop/FeatureBar';
import { Product } from '@/context/StoreContext';

export default function ShopPage() {
  const [itemsPerPage, setItemsPerPage] = useState<number>(16);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>('default');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [onlyDiscounted, setOnlyDiscounted] = useState<boolean>(false);

  // Filter & sort products dynamically
  const displayedProducts = useMemo(() => {
    let list = [...DEFAULT_16_PRODUCTS];

    if (selectedCategory !== 'all') {
      list = list.filter((p) => p.category === selectedCategory);
    }

    if (onlyDiscounted) {
      list = list.filter((p) => p.badge?.type === 'discount');
    }

    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name-asc') {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }

    return list.slice(0, itemsPerPage);
  }, [selectedCategory, onlyDiscounted, sortBy, itemsPerPage]);

  return (
    <MainLayout currentPath="/shop">
      <main className="min-h-screen bg-white">
        {/* 1. Page Title Header Banner */}
        <ShopHeader />

        {/* 2. Filter & Sorting Control Bar */}
        <FilterBar
          totalResults={32}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={(count) => setItemsPerPage(count)}
          sortBy={sortBy}
          onSortChange={(sort) => setSortBy(sort)}
          viewMode={viewMode}
          onViewModeChange={(mode) => setViewMode(mode)}
          selectedCategory={selectedCategory}
          onCategoryFilter={(cat) => setSelectedCategory(cat)}
          onlyDiscounted={onlyDiscounted}
          onDiscountFilter={(discount) => setOnlyDiscounted(discount)}
        />

        {/* 3. Product Catalog Grid (4x4 16 Cards) */}
        <ProductCatalogGrid
          products={displayedProducts}
          viewMode={viewMode}
        />

        {/* 4. Pagination Controls (Pages 1, 2, 3, Next) */}
        <Pagination
          currentPage={currentPage}
          totalPages={3}
          onPageChange={(page) => {
            setCurrentPage(page);
            window.scrollTo({ top: 280, behavior: 'smooth' });
          }}
        />

        {/* 5. Customer Trust / Feature Bar */}
        <FeatureBar />
      </main>
    </MainLayout>
  );
}

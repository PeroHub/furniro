'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Share2, ArrowLeftRight, Heart } from 'lucide-react';
import { Product, formatRupiah } from '@/context/StoreContext';

export interface ProductCardProps {
  product: Product;
  isLiked?: boolean;
  onAddToCart: (product: Product, e: React.MouseEvent) => void;
  onShare: (product: Product, e: React.MouseEvent) => void;
  onCompare: (product: Product, e: React.MouseEvent) => void;
  onLike: (product: Product, e: React.MouseEvent) => void;
  onQuickView?: (product: Product) => void;
}

export default function ProductCard({
  product,
  isLiked = false,
  onAddToCart,
  onShare,
  onCompare,
  onLike,
}: ProductCardProps) {
  return (
    <article className="group relative bg-[#F4F5F7] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-lg">
      {/* 1. Top Image Container with Absolute Circular Badges */}
      <div className="relative w-full aspect-square bg-[#EAECF0] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />

        {/* Circular absolute-positioned badges on top-right of image */}
        {product.badge && (
          <div
            className={`absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center text-white text-xs font-medium z-10 shadow-xs ${
              product.badge.type === 'discount'
                ? 'bg-[#E97171]'
                : 'bg-[#2EC1AC]'
            }`}
          >
            {product.badge.text}
          </div>
        )}
      </div>

      {/* 2. Light Gray Details Container Below (bg-[#F4F5F7]) */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-[#F4F5F7]">
        <div>
          {/* Product Title */}
          <h3 className="text-xl font-bold text-[#333333] tracking-tight mb-1 font-['Montserrat',sans-serif]">
            <Link href="/product/asgaard-sofa" className="hover:text-[#B88E2F] transition-colors">
              {product.name}
            </Link>
          </h3>
          {/* Short Subtitle / Category */}
          <p className="text-xs sm:text-sm text-[#898989] font-medium mb-3">
            {product.subtitle}
          </p>
        </div>

        {/* Price Row: Current price + Strikethrough original price */}
        <div className="flex items-baseline gap-3">
          <span className="text-base sm:text-lg font-bold text-[#333333] tabular-nums font-['Montserrat',sans-serif]">
            {formatRupiah(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-xs sm:text-sm text-[#B0B0B0] line-through tabular-nums">
              {formatRupiah(product.originalPrice)}
            </span>
          )}
        </div>
      </div>

      {/* 3. Hover Mask Overlay (semi-transparent dark mask with action buttons) */}
      <div className="absolute inset-0 bg-[#3A3A3A]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 z-20 backdrop-blur-[1px]">
        {/* Centered White "Add to cart" Button */}
        <button
          onClick={(e) => onAddToCart(product, e)}
          className="w-48 py-3.5 bg-white text-[#B88E2F] font-bold text-sm rounded-xs shadow-md hover:bg-[#B88E2F] hover:text-white transition-colors duration-200 uppercase tracking-wide cursor-pointer"
        >
          Add to cart
        </button>

        {/* Inline Action Links: "Share", "Compare", and "Like" */}
        <div className="flex items-center gap-5 mt-6 text-white text-xs font-semibold">
          {/* Share */}
          <button
            onClick={(e) => onShare(product, e)}
            className="flex items-center gap-1.5 hover:text-[#B88E2F] transition-colors cursor-pointer"
            title="Share"
          >
            <Share2 className="w-4 h-4" />
            <span>Share</span>
          </button>

          {/* Compare */}
          <button
            onClick={(e) => onCompare(product, e)}
            className="flex items-center gap-1.5 hover:text-[#B88E2F] transition-colors cursor-pointer"
            title="Compare"
          >
            <ArrowLeftRight className="w-4 h-4" />
            <span>Compare</span>
          </button>

          {/* Like */}
          <button
            onClick={(e) => onLike(product, e)}
            className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
              isLiked ? 'text-[#E97171]' : 'hover:text-[#B88E2F]'
            }`}
            title="Like"
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
            <span>Like</span>
          </button>
        </div>
      </div>
    </article>
  );
}

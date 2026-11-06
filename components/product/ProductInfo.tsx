'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Star, 
  Minus, 
  Plus, 
  Heart, 
  Facebook, 
  Linkedin, 
  Twitter 
} from 'lucide-react';
import { useStore, Product } from '@/context/StoreContext';

interface ProductInfoProps {
  product?: {
    id: string;
    name: string;
    price: number;
    priceFormatted?: string;
    description?: string;
    sku?: string;
    category?: string;
    tags?: string;
    image?: string;
  };
}

export default function ProductInfo({
  product = {
    id: 'asgaard-sofa',
    name: 'Asgaard sofa',
    price: 250000,
    priceFormatted: 'Rs. 250,000.00',
    description:
      'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced.',
    sku: 'SS001',
    category: 'Sofas',
    tags: 'Sofa, Chair, Home, Shop',
    image: '/images/asgaard_sofa_thumb.jpg',
  },
}: ProductInfoProps) {
  const { addToCart, openCart, showToast } = useStore();
  const [selectedSize, setSelectedSize] = useState<'L' | 'XL' | 'XS'>('L');
  const [selectedColor, setSelectedColor] = useState<string>('#816DFA');
  const [quantity, setQuantity] = useState<number>(1);
  const [isWishlisted, setIsWishlisted] = useState<boolean>(false);

  const handleAddToCart = () => {
    addToCart(
      {
        id: product.id,
        name: product.name,
        subtitle: 'Outdoor Scandinavian sofa',
        price: product.price,
        image: product.image || '/images/asgaard_sofa_thumb.jpg',
        category: 'sofa',
      },
      quantity
    );
    openCart();
    showToast(`Added ${quantity} x "${product.name}" to cart`);
  };

  return (
    <div className="flex flex-col font-['Poppins',sans-serif]">
      {/* Product Title */}
      <h1 className="text-3xl sm:text-[42px] font-normal text-black font-['Montserrat',sans-serif] tracking-tight leading-tight mb-2">
        {product.name}
      </h1>

      {/* Price Tag in muted gray text */}
      <p className="text-2xl font-medium text-[#9F9F9F] mb-3.5 font-['Montserrat',sans-serif]">
        {product.priceFormatted || 'Rs. 250,000.00'}
      </p>

      {/* Rating & Review Summary */}
      <div className="flex items-center gap-4 mb-4 text-xs">
        <div className="flex items-center text-[#FFC700]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current stroke-none" />
          ))}
        </div>
        <span className="w-px h-5 bg-[#9F9F9F]" aria-hidden="true" />
        <span className="text-[#9F9F9F]">5 Customer Review</span>
      </div>

      {/* Description Paragraph */}
      <p className="text-xs sm:text-[13px] text-black leading-relaxed mb-6 max-w-lg">
        {product.description}
      </p>

      {/* Size Selector Options */}
      <div className="mb-4">
        <span className="block text-xs sm:text-sm text-[#9F9F9F] mb-2 font-normal">
          Size
        </span>
        <div className="flex items-center gap-3">
          {(['L', 'XL', 'XS'] as const).map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`w-8 h-8 rounded-[5px] text-xs font-medium flex items-center justify-center transition-colors cursor-pointer ${
                selectedSize === size
                  ? 'bg-[#B88E2F] text-white shadow-xs'
                  : 'bg-[#F9F1E7] text-black hover:bg-neutral-200'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Color Picker Swatches */}
      <div className="mb-7">
        <span className="block text-xs sm:text-sm text-[#9F9F9F] mb-2 font-normal">
          Color
        </span>
        <div className="flex items-center gap-3">
          {[
            { id: 'purple', hex: '#816DFA' },
            { id: 'black', hex: '#000000' },
            { id: 'gold', hex: '#B88E2F' },
          ].map((color) => (
            <button
              key={color.id}
              onClick={() => setSelectedColor(color.hex)}
              style={{ backgroundColor: color.hex }}
              className={`w-8 h-8 rounded-full transition-transform cursor-pointer ${
                selectedColor === color.hex
                  ? 'ring-2 ring-offset-2 ring-[#B88E2F] scale-110'
                  : 'hover:scale-105'
              }`}
              aria-label={`Select color ${color.id}`}
            />
          ))}
        </div>
      </div>

      {/* Action Controls Row: Quantity + Add To Cart + Compare */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-4 pb-10 border-b border-[#D9D9D9]">
        {/* Quantity Stepper Input */}
        <div className="flex items-center border border-[#9F9F9F] rounded-[10px] bg-white h-12 px-3">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="px-2 text-black hover:text-[#B88E2F] transition-colors cursor-pointer"
            aria-label="Decrease quantity"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <span className="w-9 text-center text-sm font-medium text-black tabular-nums">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="px-2 text-black hover:text-[#B88E2F] transition-colors cursor-pointer"
            aria-label="Increase quantity"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Outlined "Add To Cart" Button */}
        <button
          onClick={handleAddToCart}
          className="h-12 px-8 sm:px-12 border border-black rounded-[15px] text-sm sm:text-base font-normal text-black hover:bg-black hover:text-white transition-all cursor-pointer shadow-xs active:scale-98 whitespace-nowrap"
        >
          Add To Cart
        </button>

        {/* Outlined "+ Compare" Button */}
        <Link
          href="/comparison"
          className="h-12 px-8 border border-black rounded-[15px] text-sm sm:text-base font-normal text-black hover:bg-black hover:text-white transition-all cursor-pointer shadow-xs active:scale-98 whitespace-nowrap inline-flex items-center justify-center"
        >
          + Compare
        </Link>
      </div>

      {/* Metadata Section */}
      <div className="pt-8 flex flex-col gap-3 text-xs sm:text-sm text-[#9F9F9F]">
        <div className="grid grid-cols-4 sm:grid-cols-5">
          <span>SKU</span>
          <span className="col-span-3 sm:col-span-4 text-[#9F9F9F]">: {product.sku}</span>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-5">
          <span>Category</span>
          <span className="col-span-3 sm:col-span-4 text-[#9F9F9F]">: {product.category}</span>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-5">
          <span>Tags</span>
          <span className="col-span-3 sm:col-span-4 text-[#9F9F9F]">: {product.tags}</span>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-5 items-center">
          <span>Share</span>
          <div className="col-span-3 sm:col-span-4 flex items-center justify-between">
            <div className="flex items-center gap-4 text-black">
              <span className="text-[#9F9F9F] mr-[-8px]">:</span>
              <button
                onClick={() => showToast('Shared on Facebook')}
                className="hover:text-[#B88E2F] transition-colors cursor-pointer"
                title="Share on Facebook"
              >
                <Facebook className="w-4 h-4 fill-current" />
              </button>
              <button
                onClick={() => showToast('Shared on LinkedIn')}
                className="hover:text-[#B88E2F] transition-colors cursor-pointer"
                title="Share on LinkedIn"
              >
                <Linkedin className="w-4 h-4 fill-current" />
              </button>
              <button
                onClick={() => showToast('Shared on Twitter')}
                className="hover:text-[#B88E2F] transition-colors cursor-pointer"
                title="Share on Twitter"
              >
                <Twitter className="w-4 h-4 fill-current" />
              </button>
            </div>

            <button
              onClick={() => {
                setIsWishlisted(!isWishlisted);
                showToast(isWishlisted ? 'Removed from wishlist' : 'Saved to wishlist');
              }}
              className={`p-1.5 transition-colors cursor-pointer ${
                isWishlisted ? 'text-red-500' : 'text-neutral-400 hover:text-red-500'
              }`}
              title="Add to wishlist"
            >
              <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

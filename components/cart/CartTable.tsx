'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Trash2, RotateCcw, ShoppingBag } from 'lucide-react';
import { useStore } from '@/context/StoreContext';

export interface CartTableItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartTableProps {
  items: CartTableItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string, name: string) => void;
  onRestoreDefaults: () => void;
}

export function formatRs(amount: number): string {
  return `₦ ${amount.toLocaleString('en-US')}`;
}

export const formatNaira = formatRs;

export default function CartTable({
  items,
  onUpdateQuantity,
  onRemoveItem,
  onRestoreDefaults,
}: CartTableProps) {
  const { showToast } = useStore();

  if (items.length === 0) {
    return (
      <div className="w-full bg-white rounded-xl border border-neutral-100 p-8 sm:p-14 flex flex-col items-center justify-center text-center shadow-xs">
        <div className="w-20 h-20 rounded-full bg-[#F9F1E7] flex items-center justify-center text-[#B88E2F] mb-5">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-black font-['Montserrat',sans-serif] mb-2">
          Your Cart is currently empty
        </h3>
        <p className="text-sm text-[#9F9F9F] max-w-md mb-8">
          Looks like you haven&apos;t added any handcrafted pieces to your cart yet. Explore our furniture collection or restore the demo items.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/shop"
            className="px-8 py-3 bg-[#B88E2F] hover:bg-[#9e7a27] text-white font-medium text-sm transition-all shadow-xs cursor-pointer rounded-xs"
          >
            Explore Shop
          </Link>
          <button
            onClick={() => {
              onRestoreDefaults();
              showToast('Demo cart items restored');
            }}
            className="px-6 py-3 border border-black text-black hover:bg-black hover:text-white font-medium text-sm transition-all flex items-center gap-2 cursor-pointer rounded-xs"
          >
            <RotateCcw className="w-4 h-4" />
            Restore Demo Items
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full font-['Poppins',sans-serif]">
      {/* 1. Desktop Table Header Strip (>= md) */}
      <div className="hidden md:grid w-full bg-[#F9F1E7] py-4 px-4 sm:px-8 grid-cols-12 items-center text-sm sm:text-base font-semibold text-black font-['Poppins',sans-serif]">
        <div className="col-span-4 pl-0 sm:pl-28">Product</div>
        <div className="col-span-3 text-left">Price</div>
        <div className="col-span-2 text-center">Quantity</div>
        <div className="col-span-3 text-left pl-6">Subtotal</div>
      </div>

      {/* 2. Desktop Item Rows (>= md) */}
      <div className="hidden md:flex flex-col gap-8 mt-8 sm:mt-12">
        {items.map((item) => {
          const itemSubtotal = item.price * item.quantity;

          return (
            <div
              key={item.id}
              className="grid grid-cols-12 items-center px-4 sm:px-8 py-3 group hover:bg-[#FAF8F5]/40 transition-colors"
            >
              {/* Product: Thumbnail + Name */}
              <div className="col-span-4 flex items-center gap-4 sm:gap-8">
                {/* Thumbnail Image Box (light beige box #F9F1E7) */}
                <div className="relative w-16 h-16 sm:w-[105px] sm:h-[105px] bg-[#F9F1E7] rounded-[10px] overflow-hidden shrink-0 flex items-center justify-center p-2">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="105px"
                    className="object-contain p-1 group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Title in muted gray font */}
                <Link
                  href={`/product/${item.id.replace(/-\d+$/, '')}`}
                  className="text-base text-[#9F9F9F] hover:text-[#B88E2F] transition-colors truncate font-normal"
                >
                  {item.name}
                </Link>
              </div>

              {/* Price in muted gray font */}
              <div className="col-span-3 text-left text-base text-[#9F9F9F] font-normal truncate">
                {formatRs(item.price)}
              </div>

              {/* Quantity: Stepper Box */}
              <div className="col-span-2 flex items-center justify-center">
                <input
                  type="number"
                  min="1"
                  max="99"
                  value={item.quantity}
                  onChange={(e) => {
                    const val = parseInt(e.target.value, 10);
                    if (!isNaN(val) && val >= 1) {
                      onUpdateQuantity(item.id, val);
                    }
                  }}
                  className="w-8 h-8 border border-[#9F9F9F] rounded-sm text-center text-sm font-normal text-black focus:outline-hidden focus:border-[#B88E2F] focus:ring-1 focus:ring-[#B88E2F] transition-all bg-white"
                  aria-label={`Quantity for ${item.name}`}
                />
              </div>

              {/* Subtotal + Gold Trash Icon */}
              <div className="col-span-3 flex items-center justify-between gap-6 pl-6">
                <span className="text-base font-normal text-black tabular-nums">
                  {formatRs(itemSubtotal)}
                </span>

                {/* Gold Trash Icon Button */}
                <button
                  onClick={() => onRemoveItem(item.id, item.name)}
                  className="text-[#B88E2F] hover:text-[#9e7a27] transition-colors p-1 cursor-pointer shrink-0 group/trash"
                  title={`Remove ${item.name} from cart`}
                  aria-label={`Remove ${item.name} from cart`}
                >
                  <Trash2 className="w-5 h-5 sm:w-6 sm:h-6 group-hover/trash:scale-110 transition-transform stroke-[1.8]" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Mobile Card Layout (< md) */}
      <div className="md:hidden flex flex-col gap-4">
        {items.map((item) => {
          const itemSubtotal = item.price * item.quantity;

          return (
            <div
              key={item.id}
              className="bg-[#F9F1E7]/40 border border-[#D9D9D9]/60 rounded-xl p-4 flex gap-4 items-center relative"
            >
              {/* Thumbnail */}
              <div className="relative w-20 h-20 bg-[#F9F1E7] rounded-lg overflow-hidden shrink-0 flex items-center justify-center p-2">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="80px"
                  className="object-contain p-1"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Info Column */}
              <div className="flex-1 min-w-0 pr-8">
                <Link
                  href={`/product/${item.id.replace(/-\d+$/, '')}`}
                  className="text-base font-semibold text-[#3A3A3A] hover:text-[#B88E2F] transition-colors block truncate"
                >
                  {item.name}
                </Link>
                <p className="text-xs text-[#9F9F9F] mt-0.5">
                  Unit: {formatRs(item.price)}
                </p>

                <div className="flex items-center justify-between gap-2 mt-3">
                  {/* Quantity Stepper */}
                  <div className="flex items-center border border-[#9F9F9F] rounded-md bg-white h-8 px-2">
                    <button
                      onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="px-1 text-xs text-black hover:text-[#B88E2F]"
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span className="w-7 text-center text-xs font-medium text-black">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="px-1 text-xs text-black hover:text-[#B88E2F]"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  {/* Subtotal */}
                  <div className="text-right">
                    <span className="text-sm font-semibold text-[#B88E2F] tabular-nums">
                      {formatRs(itemSubtotal)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Trash Icon (Absolute top-right) */}
              <button
                onClick={() => onRemoveItem(item.id, item.name)}
                className="absolute top-3 right-3 text-[#B88E2F] hover:text-[#9e7a27] p-1.5 transition-colors cursor-pointer"
                title={`Remove ${item.name} from cart`}
                aria-label={`Remove ${item.name} from cart`}
              >
                <Trash2 className="w-4 h-4 stroke-[2]" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

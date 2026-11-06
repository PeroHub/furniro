'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { X, RefreshCw } from 'lucide-react';
import { useStore } from '@/context/StoreContext';

export interface CartDrawerItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export const DEFAULT_CART_ITEMS: CartDrawerItem[] = [
  {
    id: 'asgaard-sofa',
    name: 'Asgaard sofa',
    price: 250000,
    quantity: 1,
    image: '/images/asgaard_sofa_thumb.jpg',
  },
  {
    id: 'casaliving-wood',
    name: 'Casaliving Wood',
    price: 270000,
    quantity: 1,
    image: '/images/casaliving_wood_thumb.jpg',
  },
];

export function formatRsPrice(amount: number): string {
  return `Rs. ${amount.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

/**
 * Subtle Lock/Bag icon matching Furniro Figma specifications
 */
export function BagLockCloseIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M5 7.5V5.2C5 2.88 6.79 1 9 1C11.21 1 13 2.88 13 5.2V7.5"
        stroke="#9F9F9F"
        strokeWidth="1.25"
      />
      <rect
        x="2"
        y="6.75"
        width="14"
        height="11.25"
        rx="1.5"
        stroke="#9F9F9F"
        strokeWidth="1.25"
      />
      <path
        d="M7.2 10.5L10.8 14.1M10.8 10.5L7.2 14.1"
        stroke="#9F9F9F"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

interface ShoppingCartDrawerProps {
  isOpen?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
  items?: CartDrawerItem[];
}

export default function ShoppingCartDrawer({
  isOpen: controlledIsOpen,
  onClose: controlledOnClose,
  items: controlledItems,
}: ShoppingCartDrawerProps) {
  // Global store integration (fallback if props are not provided)
  const store = useStore();

  // Internal state for items
  const [internalItems, setInternalItems] = useState<CartDrawerItem[]>(
    controlledItems || DEFAULT_CART_ITEMS
  );

  // Derive cart items
  const cartItems = controlledItems ?? internalItems;

  // Determine active open state
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : store.isCartOpen;
  const handleClose = useCallback(() => {
    if (controlledOnClose) {
      controlledOnClose();
    } else {
      store.closeCart();
    }
  }, [controlledOnClose, store]);

  // Accessibility: Esc key listener to close drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleClose]);

  // Accessibility: prevent background scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Remove an item dynamically by ID
  const handleRemoveItem = (id: string, name: string) => {
    setInternalItems((prev) => prev.filter((item) => item.id !== id));
    store.showToast(`Removed "${name}" from cart`);
  };

  // Reset demo items for testing
  const handleResetItems = () => {
    setInternalItems(DEFAULT_CART_ITEMS);
    store.showToast('Demo cart items restored');
  };

  // Calculate dynamic subtotal
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden font-['Poppins',sans-serif]">
          {/* 1. Overlay Backdrop: Semi-transparent dark overlay covering background context */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity cursor-pointer"
            aria-label="Close cart backdrop"
          />

          {/* 2. Slide-Over Drawer Container (Top right, clean white bg, fixed width ~418px) */}
          <div className="fixed inset-y-0 right-0 flex max-w-full">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 320 }}
              className="w-screen max-w-[418px] bg-white shadow-2xl flex flex-col justify-between relative z-10 border-l border-neutral-100"
              role="dialog"
              aria-modal="true"
              aria-labelledby="shopping-cart-title"
            >
              {/* Top Section: Drawer Header + Items List */}
              <div className="flex-1 overflow-y-auto px-7 pt-7 pb-4">
                {/* Drawer Header */}
                <div className="flex items-center justify-between pb-6">
                  <h2
                    id="shopping-cart-title"
                    className="text-2xl font-bold tracking-tight text-black font-['Montserrat',sans-serif]"
                  >
                    Shopping Cart
                  </h2>
                  <button
                    onClick={handleClose}
                    className="p-1.5 text-[#9F9F9F] hover:text-black hover:bg-neutral-100 rounded-full transition-colors cursor-pointer group"
                    title="Close shopping cart"
                    aria-label="Close shopping cart"
                  >
                    <BagLockCloseIcon className="w-[19px] h-[19px] group-hover:scale-105 transition-transform" />
                  </button>
                </div>

                {/* Horizontal Divider beneath Header (partial width matching Figma spec) */}
                <div className="w-[75%] h-[1px] bg-[#D9D9D9] mb-8" />

                {/* Cart Items List */}
                {cartItems.length === 0 ? (
                  <div className="py-16 flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 rounded-full bg-[#F9F1E7] flex items-center justify-center text-[#B88E2F] mb-4">
                      <BagLockCloseIcon className="w-8 h-8" />
                    </div>
                    <p className="text-base font-medium text-black mb-1">
                      Your cart is empty
                    </p>
                    <p className="text-xs text-[#9F9F9F] max-w-[240px] mb-6">
                      Add handcrafted pieces from our collection or reset the demo items below.
                    </p>
                    <button
                      onClick={handleResetItems}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#B88E2F] border border-[#B88E2F] rounded-full hover:bg-[#B88E2F] hover:text-white transition-colors cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      Restore Demo Items
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-6">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-4 group justify-between"
                      >
                        {/* Left: Thumbnail Image Box (light beige background box #F9F1E7) */}
                        <div className="relative w-[105px] h-[105px] bg-[#F9F1E7] rounded-[10px] overflow-hidden shrink-0 flex items-center justify-center">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes="105px"
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        {/* Middle: Details (Title + Quantity x Price) */}
                        <div className="flex-1 min-w-0 pr-2">
                          <h3 className="text-base font-normal text-black truncate mb-1.5 font-['Montserrat',sans-serif]">
                            {item.name}
                          </h3>
                          <div className="flex items-baseline gap-3 text-xs text-black">
                            <span className="font-light">{item.quantity}</span>
                            <span className="font-light text-neutral-400">X</span>
                            <span className="text-[#B88E2F] font-medium tracking-wide">
                              {formatRsPrice(item.price)}
                            </span>
                          </div>
                        </div>

                        {/* Right: Circular Gray Close/Remove Icon ('x') */}
                        <button
                          onClick={() => handleRemoveItem(item.id, item.name)}
                          className="w-5 h-5 rounded-full bg-[#9F9F9F] text-white flex items-center justify-center hover:bg-[#B88E2F] transition-colors shrink-0 shadow-xs cursor-pointer group/remove"
                          title={`Remove ${item.name}`}
                          aria-label={`Remove ${item.name} from cart`}
                        >
                          <X className="w-3 h-3 stroke-[2.5] text-white group-hover/remove:scale-110 transition-transform" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* 3. Drawer Footer Section (Fixed to bottom) */}
              <div className="px-7 pt-4 pb-8 bg-white border-t border-transparent">
                {/* Subtotal Row */}
                <div className="flex items-center justify-between py-4">
                  <span className="text-base text-black font-normal font-['Poppins',sans-serif]">
                    Subtotal
                  </span>
                  <span className="text-base font-semibold text-[#B88E2F] tabular-nums font-['Montserrat',sans-serif]">
                    {formatRsPrice(subtotal)}
                  </span>
                </div>

                {/* Horizontal divider beneath Subtotal */}
                <div className="w-full h-[1px] bg-[#D9D9D9] mb-7" />

                {/* Action Buttons: 3 equal-width pill/rounded outlined buttons */}
                <div className="grid grid-cols-3 gap-3">
                  <Link
                    href="/cart"
                    onClick={handleClose}
                    className="w-full py-1.5 px-3 border border-black text-xs font-normal text-black rounded-full hover:border-[#B88E2F] hover:bg-[#B88E2F] hover:text-white transition-all text-center truncate cursor-pointer active:scale-95 block"
                  >
                    Cart
                  </Link>

                  <Link
                    href="/checkout"
                    onClick={handleClose}
                    className="w-full py-1.5 px-3 border border-black text-xs font-normal text-black rounded-full hover:border-[#B88E2F] hover:bg-[#B88E2F] hover:text-white transition-all text-center truncate cursor-pointer active:scale-95 block"
                  >
                    Checkout
                  </Link>

                  <Link
                    href="/comparison"
                    onClick={handleClose}
                    className="w-full py-1.5 px-3 border border-black text-xs font-normal text-black rounded-full hover:border-[#B88E2F] hover:bg-[#B88E2F] hover:text-white transition-all text-center truncate cursor-pointer active:scale-95 block"
                  >
                    Comparison
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

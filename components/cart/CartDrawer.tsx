'use client';

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { useStore, formatRupiah } from '@/context/StoreContext';

export default function CartDrawer() {
  const {
    isCartOpen,
    closeCart,
    cart,
    removeFromCart,
    updateQuantity,
    cartSubtotal,
    cartCount,
    showToast,
  } = useStore();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            aria-hidden="true"
          />

          {/* Slide-over panel */}
          <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between"
            >
              {/* Drawer Header */}
              <div className="px-6 py-6 border-b border-[#D9D9D9]/60 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#FFF3E3] text-[#B88E2F] rounded-lg">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold tracking-tight text-[#333333]">
                      Shopping Cart
                    </h2>
                    <p className="text-xs text-[#9F9F9F]">
                      {cartCount} {cartCount === 1 ? 'item' : 'items'} in your bag
                    </p>
                  </div>
                </div>
                <button
                  onClick={closeCart}
                  className="p-2 text-[#9F9F9F] hover:text-[#333333] hover:bg-neutral-100 rounded-full transition-colors"
                  aria-label="Close cart"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Body / Cart Items */}
              <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-neutral-100">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-16">
                    <div className="w-16 h-16 rounded-full bg-[#F9F1E7] flex items-center justify-center text-[#B88E2F] mb-4">
                      <ShoppingBag className="w-8 h-8 stroke-[1.5]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#333333] mb-1">
                      Your cart is empty
                    </h3>
                    <p className="text-sm text-[#9F9F9F] max-w-xs mb-6">
                      Explore our handpicked collection and discover furniture designed for modern life.
                    </p>
                    <button
                      onClick={closeCart}
                      className="px-6 py-2.5 bg-[#B88E2F] text-white text-xs font-semibold tracking-wider uppercase rounded-sm hover:bg-[#9E7A26] transition-colors"
                    >
                      Browse Products
                    </button>
                  </div>
                ) : (
                  cart.map(({ product, quantity }) => (
                    <div
                      key={product.id}
                      className="py-4 flex items-center gap-4 group"
                    >
                      {/* Product Thumbnail */}
                      <div className="relative w-20 h-20 bg-[#F9F1E7] rounded-lg overflow-hidden shrink-0 border border-neutral-100">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="80px"
                          className="object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-[#333333] truncate">
                          {product.name}
                        </h4>
                        <div className="flex items-center gap-2 mt-1 text-xs">
                          <span className="font-medium text-[#333333]">
                            {quantity}
                          </span>
                          <span className="text-[#9F9F9F]">X</span>
                          <span className="font-semibold text-[#B88E2F] tabular-nums">
                            {formatRupiah(product.price)}
                          </span>
                        </div>

                        {/* Quantity controls */}
                        <div className="flex items-center gap-2 mt-2">
                          <div className="flex items-center border border-neutral-200 rounded text-xs bg-white">
                            <button
                              onClick={() => updateQuantity(product.id, quantity - 1)}
                              className="px-2 py-0.5 text-neutral-600 hover:text-black hover:bg-neutral-100"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2 font-medium text-neutral-800 tabular-nums">
                              {quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(product.id, quantity + 1)}
                              className="px-2 py-0.5 text-neutral-600 hover:text-black hover:bg-neutral-100"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Remove item button */}
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="p-1.5 text-neutral-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                        title="Remove product"
                        aria-label={`Remove ${product.name} from cart`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* Drawer Footer */}
              {cart.length > 0 && (
                <div className="p-6 border-t border-[#D9D9D9]/80 bg-[#FAFAFA]">
                  {/* Subtotal row */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-[#333333] font-normal">
                      Subtotal
                    </span>
                    <span className="text-base font-bold text-[#B88E2F] tabular-nums">
                      {formatRupiah(cartSubtotal)}
                    </span>
                  </div>

                  <div className="h-px bg-neutral-200 w-full mb-5" />

                  {/* Actions buttons */}
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => {
                        showToast('Viewing full Cart page');
                        closeCart();
                      }}
                      className="py-2.5 px-3 border border-[#333333] text-xs font-medium text-[#333333] rounded-full hover:bg-[#333333] hover:text-white transition-all text-center truncate"
                    >
                      Cart
                    </button>
                    <button
                      onClick={() => {
                        showToast('Proceeding to Checkout...');
                        closeCart();
                      }}
                      className="py-2.5 px-3 bg-[#B88E2F] text-xs font-semibold text-white rounded-full hover:bg-[#9E7A26] transition-all text-center shadow-xs truncate"
                    >
                      Checkout
                    </button>
                    <button
                      onClick={() => {
                        showToast('Opening product comparison');
                        closeCart();
                      }}
                      className="py-2.5 px-3 border border-[#333333] text-xs font-medium text-[#333333] rounded-full hover:bg-[#333333] hover:text-white transition-all text-center truncate"
                    >
                      Comparison
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

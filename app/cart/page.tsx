'use client';

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import CartHeader from '@/components/cart/CartHeader';
import CartTable, { CartTableItem } from '@/components/cart/CartTable';
import CartTotals from '@/components/cart/CartTotals';
import FeatureBar from '@/components/shop/FeatureBar';
import { useStore } from '@/context/StoreContext';

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    resetCart,
    cartSubtotal,
    cartCount,
    showToast,
  } = useStore();

  const cartTableItems: CartTableItem[] = cart.map(({ product, quantity }) => ({
    id: product.id,
    name: product.name,
    price: product.price,
    quantity,
    image: product.image,
  }));

  const handleUpdateQuantity = (id: string, quantity: number) => {
    updateQuantity(id, quantity);
  };

  const handleRemoveItem = (id: string, name: string) => {
    removeFromCart(id);
    showToast(`Removed "${name}" from cart`);
  };

  const handleRestoreDefaults = () => {
    resetCart();
  };

  const subtotal = cartSubtotal;
  const total = subtotal; // Free delivery as noted in trust bar

  return (
    <MainLayout currentPath="/cart">
      <div className="min-h-screen bg-white">
        {/* 1. Page Header Banner */}
        <CartHeader />

        {/* 2. Main Cart Layout Section (Two-Column Asymmetric Layout) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column: Cart Table */}
            <div className="lg:col-span-8">
              <CartTable
                items={cartTableItems}
                onUpdateQuantity={handleUpdateQuantity}
                onRemoveItem={handleRemoveItem}
                onRestoreDefaults={handleRestoreDefaults}
              />
            </div>

            {/* Right Column: Cart Totals Summary Card */}
            <div className="lg:col-span-4 sticky top-28">
              <CartTotals
                subtotal={subtotal}
                total={total}
                itemsCount={cartCount}
              />
            </div>
          </div>
        </section>

        {/* 3. Customer Trust / Feature Bar */}
        <FeatureBar />
      </div>
    </MainLayout>
  );
}

'use client';

import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import CartHeader from '@/components/cart/CartHeader';
import CartTable, { CartTableItem } from '@/components/cart/CartTable';
import CartTotals from '@/components/cart/CartTotals';
import FeatureBar from '@/components/shop/FeatureBar';
import { useStore } from '@/context/StoreContext';

const INITIAL_CART_ITEMS: CartTableItem[] = [
  {
    id: 'asgaard-sofa',
    name: 'Asgaard sofa',
    price: 250000,
    quantity: 1,
    image: '/images/asgaard_sofa_thumb.jpg',
  },
];

export default function CartPage() {
  const { showToast } = useStore();
  const [cartItems, setCartItems] = useState<CartTableItem[]>(INITIAL_CART_ITEMS);

  // Update quantity handler
  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  // Remove item handler
  const handleRemoveItem = (id: string, name: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    showToast(`Removed "${name}" from cart`);
  };

  // Restore defaults handler
  const handleRestoreDefaults = () => {
    setCartItems(INITIAL_CART_ITEMS);
  };

  // Calculations
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
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
                items={cartItems}
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
                itemsCount={cartItems.reduce((acc, i) => acc + i.quantity, 0)}
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

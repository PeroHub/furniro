'use client';

import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import CheckoutHeader from '@/components/checkout/CheckoutHeader';
import BillingForm, { BillingFormData } from '@/components/checkout/BillingForm';
import OrderSummaryAndPayment from '@/components/checkout/OrderSummaryAndPayment';
import FeatureBar from '@/components/shop/FeatureBar';
import { useStore } from '@/context/StoreContext';

export default function CheckoutPage() {
  const { cart, cartSubtotal } = useStore();

  const [formData, setFormData] = useState<BillingFormData>({
    firstName: '',
    lastName: '',
    companyName: '',
    country: 'Sri Lanka',
    streetAddress: '',
    city: '',
    province: 'Western Province',
    zipCode: '',
    phone: '',
    email: '',
    additionalInfo: '',
  });

  const handleFieldChange = (field: keyof BillingFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Connect directly to live cart with demo fallback if empty
  const orderItems =
    cart.length > 0
      ? cart.map((item) => ({
          id: item.product.id,
          name: item.product.name,
          price: item.product.price,
          quantity: item.quantity,
        }))
      : [
          {
            id: 'asgaard-sofa',
            name: 'Asgaard sofa',
            price: 25000000,
            quantity: 1,
          },
        ];

  const subtotal = cart.length > 0 ? cartSubtotal : 25000000;
  const total = subtotal;

  return (
    <MainLayout currentPath="/checkout">
      <div className="min-h-screen bg-white">
        {/* 1. Page Header Banner */}
        <CheckoutHeader />

        {/* 2. Checkout Content Section (Two-Column Asymmetric Layout) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left Column: Billing Details Form */}
            <div className="lg:col-span-6 xl:col-span-7">
              <BillingForm
                formData={formData}
                onChange={handleFieldChange}
              />
            </div>

            {/* Right Column: Order Breakdown & Payment Methods */}
            <div className="lg:col-span-6 xl:col-span-5 sticky top-28">
              <OrderSummaryAndPayment
                items={orderItems}
                subtotal={subtotal}
                total={total}
                billingData={formData}
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

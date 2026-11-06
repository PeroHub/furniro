'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useStore } from '@/context/StoreContext';
import { BillingFormData } from './BillingForm';
import { CheckCircle2, ShieldCheck, ArrowRight, Package, X } from 'lucide-react';

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface OrderSummaryAndPaymentProps {
  items: OrderItem[];
  subtotal: number;
  total: number;
  billingData: BillingFormData;
}

export function formatRs(amount: number): string {
  return `Rs. ${amount.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export default function OrderSummaryAndPayment({
  items,
  subtotal,
  total,
  billingData,
}: OrderSummaryAndPaymentProps) {
  const { showToast } = useStore();
  const [selectedPayment, setSelectedPayment] = useState<string>('bank-transfer-1');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();

    // Check basic validation
    if (!billingData.firstName.trim() || !billingData.lastName.trim() || !billingData.streetAddress.trim()) {
      showToast('Please fill in your name and delivery address');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedOrder = `FUR-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderNumber(generatedOrder);
      setOrderConfirmed(true);
      showToast('Order placed successfully!');
    }, 1200);
  };

  return (
    <>
      <div className="w-full font-['Poppins',sans-serif] lg:pl-10 xl:pl-16">
        {/* 1. Order Summary Table */}
        <div className="space-y-5">
          {/* Header Row */}
          <div className="flex items-center justify-between pb-3">
            <h3 className="text-2xl font-medium text-black font-['Montserrat',sans-serif]">
              Product
            </h3>
            <h3 className="text-2xl font-medium text-black font-['Montserrat',sans-serif]">
              Subtotal
            </h3>
          </div>

          {/* Item Rows */}
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between text-base py-1">
              <div className="flex items-center">
                <span className="text-[#9F9F9F] font-normal">{item.name}</span>
                <span className="text-black font-semibold text-xs ml-2">× {item.quantity}</span>
              </div>
              <span className="text-black font-light tabular-nums">
                {formatRs(item.price * item.quantity)}
              </span>
            </div>
          ))}

          {/* Subtotal Row */}
          <div className="flex items-center justify-between text-base py-2">
            <span className="text-black font-normal">Subtotal</span>
            <span className="text-black font-light tabular-nums">
              {formatRs(subtotal)}
            </span>
          </div>

          {/* Total Row */}
          <div className="flex items-center justify-between text-base py-2">
            <span className="text-black font-normal">Total</span>
            <span className="text-2xl font-bold text-[#B88E2F] font-['Montserrat',sans-serif] tabular-nums">
              {formatRs(total)}
            </span>
          </div>
        </div>

        {/* 2. Horizontal Divider Line */}
        <div className="w-full h-[1px] bg-[#D9D9D9] my-7 sm:my-8" />

        {/* 3. Interactive Payment Methods (Radio Group) */}
        <div className="space-y-4">
          {/* Option 1: Direct Bank Transfer (Selected by default) */}
          <div>
            <label
              onClick={() => setSelectedPayment('bank-transfer-1')}
              className="flex items-center gap-3.5 cursor-pointer select-none group"
            >
              <div
                className={`w-3.5 h-3.5 rounded-full border border-black flex items-center justify-center transition-all ${
                  selectedPayment === 'bank-transfer-1' ? 'bg-black' : 'bg-transparent'
                }`}
              >
                {selectedPayment === 'bank-transfer-1' && (
                  <div className="w-1.5 h-1.5 rounded-full bg-black" />
                )}
              </div>
              <span
                className={`text-base font-medium transition-colors ${
                  selectedPayment === 'bank-transfer-1' ? 'text-black' : 'text-[#9F9F9F]'
                }`}
              >
                Direct Bank Transfer
              </span>
            </label>

            {/* Description note shown when Option 1 is selected */}
            {selectedPayment === 'bank-transfer-1' && (
              <p className="text-sm font-light text-[#9F9F9F] leading-relaxed mt-2.5 mb-4 pl-7 text-justify">
                Make your payment directly into our bank account. Please use your Order ID as the
                payment reference. Your order will not be shipped until the funds have cleared in
                our account.
              </p>
            )}
          </div>

          {/* Option 2: Direct Bank Transfer (Alternative Bank / Wire) */}
          <div>
            <label
              onClick={() => setSelectedPayment('bank-transfer-2')}
              className="flex items-center gap-3.5 cursor-pointer select-none group"
            >
              <div
                className={`w-3.5 h-3.5 rounded-full border border-black flex items-center justify-center transition-all ${
                  selectedPayment === 'bank-transfer-2' ? 'bg-black' : 'bg-transparent'
                }`}
              />
              <span
                className={`text-base font-medium transition-colors ${
                  selectedPayment === 'bank-transfer-2' ? 'text-black' : 'text-[#9F9F9F]'
                }`}
              >
                Direct Bank Transfer
              </span>
            </label>

            {selectedPayment === 'bank-transfer-2' && (
              <p className="text-sm font-light text-[#9F9F9F] leading-relaxed mt-2.5 mb-4 pl-7 text-justify">
                Wire transfer details will be generated with swift code and IBAN upon order confirmation.
              </p>
            )}
          </div>

          {/* Option 3: Cash On Delivery */}
          <div>
            <label
              onClick={() => setSelectedPayment('cod')}
              className="flex items-center gap-3.5 cursor-pointer select-none group"
            >
              <div
                className={`w-3.5 h-3.5 rounded-full border border-black flex items-center justify-center transition-all ${
                  selectedPayment === 'cod' ? 'bg-black' : 'bg-transparent'
                }`}
              />
              <span
                className={`text-base font-medium transition-colors ${
                  selectedPayment === 'cod' ? 'text-black' : 'text-[#9F9F9F]'
                }`}
              >
                Cash On Delivery
              </span>
            </label>

            {selectedPayment === 'cod' && (
              <p className="text-sm font-light text-[#9F9F9F] leading-relaxed mt-2.5 mb-4 pl-7 text-justify">
                Pay in cash directly to our delivery courier when your furniture arrives at your doorstep.
              </p>
            )}
          </div>
        </div>

        {/* 4. Privacy Policy Disclaimer */}
        <p className="text-sm sm:text-base font-light text-black leading-relaxed mt-6 mb-8 text-justify">
          Your personal data will be used to support your experience throughout this website, to
          manage access to your account, and for other purposes described in our{' '}
          <strong className="font-semibold text-black">privacy policy.</strong>
        </p>

        {/* 5. Centered Outlined "Place order" Button */}
        <div className="flex justify-center">
          <button
            type="button"
            onClick={handlePlaceOrder}
            disabled={isSubmitting}
            className="w-full sm:w-auto px-16 sm:px-24 py-3.5 sm:py-4 border border-black rounded-[15px] text-lg sm:text-xl font-normal text-black hover:bg-black hover:text-white transition-all cursor-pointer text-center active:scale-98 shadow-xs disabled:opacity-50"
          >
            {isSubmitting ? 'Processing Order...' : 'Place order'}
          </button>
        </div>
      </div>

      {/* Order Confirmation Modal */}
      {orderConfirmed && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs font-['Poppins',sans-serif]">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-neutral-100 animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setOrderConfirmed(false)}
              className="absolute top-5 right-5 text-neutral-400 hover:text-black transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center py-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-black font-['Montserrat',sans-serif] mb-1">
                Thank You!
              </h3>
              <p className="text-sm font-semibold text-[#B88E2F] mb-4">
                Order #{orderNumber} has been received
              </p>

              <div className="bg-[#F9F1E7] p-5 rounded-xl text-left text-sm mb-6 space-y-2">
                <div className="flex justify-between">
                  <span className="text-neutral-500">Customer:</span>
                  <span className="font-medium text-black">
                    {billingData.firstName} {billingData.lastName}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Shipping To:</span>
                  <span className="font-medium text-black truncate max-w-[220px]">
                    {billingData.streetAddress}, {billingData.city}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Payment:</span>
                  <span className="font-medium text-black capitalize">
                    {selectedPayment === 'cod' ? 'Cash On Delivery' : 'Direct Bank Transfer'}
                  </span>
                </div>
                <div className="border-t border-neutral-300 pt-2 flex justify-between font-bold text-base">
                  <span>Total Amount:</span>
                  <span className="text-[#B88E2F] font-['Montserrat',sans-serif]">{formatRs(total)}</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-neutral-500 mb-6">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>A confirmation email has been dispatched to {billingData.email}</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/shop"
                  onClick={() => setOrderConfirmed(false)}
                  className="px-6 py-3 bg-[#B88E2F] hover:bg-[#9e7a27] text-white rounded-xl text-sm font-medium transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Package className="w-4 h-4" />
                  Continue Shopping
                </Link>
                <Link
                  href="/"
                  onClick={() => setOrderConfirmed(false)}
                  className="px-6 py-3 border border-black hover:bg-black hover:text-white rounded-xl text-sm font-medium transition-colors inline-flex items-center justify-center"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

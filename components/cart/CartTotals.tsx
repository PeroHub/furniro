'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useStore } from '@/context/StoreContext';
import { formatRs } from './CartTable';
import { CheckCircle2, ShieldCheck, ArrowRight, X } from 'lucide-react';

interface CartTotalsProps {
  subtotal: number;
  total: number;
  itemsCount: number;
}

export default function CartTotals({ subtotal, total, itemsCount }: CartTotalsProps) {
  const { showToast } = useStore();
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleStartCheckout = () => {
    if (itemsCount === 0) {
      showToast('Your cart is empty. Add items to checkout.');
      return;
    }
    setIsCheckoutModalOpen(true);
    setIsCompleted(false);
  };

  const handleSimulatePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsCompleted(true);
      showToast('Order confirmed successfully!');
    }, 1200);
  };

  return (
    <>
      <div className="w-full bg-[#F9F1E7] rounded-xl sm:rounded-none px-5 sm:px-12 lg:px-16 py-8 sm:py-12 lg:py-16 flex flex-col justify-between font-['Poppins',sans-serif]">
        <div>
          {/* Centered Heading */}
          <h2 className="text-xl sm:text-[32px] font-semibold text-black font-['Poppins',sans-serif] text-center mb-6 sm:mb-10">
            Cart Totals
          </h2>

          {/* Subtotal Row */}
          <div className="flex items-center justify-between py-3 mb-4">
            <span className="text-base font-medium text-black">
              Subtotal
            </span>
            <span className="text-base font-normal text-[#9F9F9F] tabular-nums">
              {formatRs(subtotal)}
            </span>
          </div>

          {/* Total Row */}
          <div className="flex items-center justify-between py-3 mb-10 sm:mb-12">
            <span className="text-base font-medium text-black">
              Total
            </span>
            <span className="text-xl sm:text-2xl font-semibold text-[#B88E2F] tabular-nums font-['Poppins',sans-serif]">
              {formatRs(total)}
            </span>
          </div>
        </div>

        {/* Outlined "Check Out" Button matching Figma spec */}
        <div className="flex justify-center">
          <Link
            href="/checkout"
            className="w-full sm:w-auto px-10 sm:px-14 py-3 sm:py-3.5 border border-black rounded-[15px] text-lg sm:text-xl font-normal text-black hover:bg-black hover:text-white transition-all cursor-pointer text-center shadow-xs active:scale-98 inline-block"
          >
            Check Out
          </Link>
        </div>
      </div>

      {/* Interactive Checkout Modal */}
      {isCheckoutModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs font-['Poppins',sans-serif]">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-neutral-100 animate-in fade-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              onClick={() => setIsCheckoutModalOpen(false)}
              className="absolute top-5 right-5 text-neutral-400 hover:text-black transition-colors cursor-pointer"
              aria-label="Close checkout modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!isCompleted ? (
              <div>
                <div className="flex items-center gap-3 mb-4 text-[#B88E2F]">
                  <ShieldCheck className="w-7 h-7" />
                  <h3 className="text-2xl font-bold text-black font-['Montserrat',sans-serif]">
                    Express Checkout
                  </h3>
                </div>

                <p className="text-sm text-[#898989] mb-6">
                  Review your Furniro order total and select your payment method to complete purchase.
                </p>

                <div className="bg-[#F9F1E7] p-4 rounded-xl mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-neutral-600">Total Items:</span>
                    <span className="font-semibold text-black">{itemsCount}</span>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-neutral-600">Shipping:</span>
                    <span className="font-semibold text-emerald-600">FREE Delivery</span>
                  </div>
                  <div className="border-t border-neutral-300 pt-2 flex justify-between font-bold text-base">
                    <span>Grand Total:</span>
                    <span className="text-[#B88E2F] font-['Montserrat',sans-serif]">{formatRs(total)}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <label className="flex items-center gap-3 p-3 border border-neutral-200 rounded-lg cursor-pointer hover:border-[#B88E2F] transition-colors">
                    <input type="radio" name="payment" defaultChecked className="accent-[#B88E2F]" />
                    <span className="text-sm font-medium text-black">Direct Bank Transfer / UPI</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 border border-neutral-200 rounded-lg cursor-pointer hover:border-[#B88E2F] transition-colors">
                    <input type="radio" name="payment" className="accent-[#B88E2F]" />
                    <span className="text-sm font-medium text-black">Credit / Debit Card (Visa, Mastercard)</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 border border-neutral-200 rounded-lg cursor-pointer hover:border-[#B88E2F] transition-colors">
                    <input type="radio" name="payment" className="accent-[#B88E2F]" />
                    <span className="text-sm font-medium text-black">Cash On Delivery</span>
                  </label>
                </div>

                <button
                  onClick={handleSimulatePayment}
                  disabled={isProcessing}
                  className="w-full py-4 bg-[#B88E2F] hover:bg-[#9e7a27] text-white font-medium text-base rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-60"
                >
                  {isProcessing ? (
                    <span>Processing Payment...</span>
                  ) : (
                    <>
                      <span>Place Order ({formatRs(total)})</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            ) : (
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-black font-['Montserrat',sans-serif] mb-2">
                  Order Placed Successfully!
                </h3>
                <p className="text-sm text-[#898989] mb-6 max-w-xs mx-auto">
                  Thank you for shopping with Furniro. Order #FUR-94821 has been recorded and will be prepared for delivery.
                </p>
                <button
                  onClick={() => setIsCheckoutModalOpen(false)}
                  className="px-8 py-3 bg-black text-white rounded-xl text-sm font-medium hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

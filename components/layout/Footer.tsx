'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useStore } from '@/context/StoreContext';

export default function Footer() {
  const { showToast } = useStore();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address');
      return;
    }
    setSubscribed(true);
    showToast('Thank you for subscribing to Furniro updates!');
    setEmail('');
  };

  return (
    <footer className="bg-white border-t border-[#D9D9D9]/70 pt-12 pb-8 lg:pt-16 lg:pb-10 font-['Poppins',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          
          {/* Brand & Address Column */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <Link href="/" className="inline-block mb-6 group">
              <span className="text-2xl font-bold tracking-tight text-[#000000] font-['Poppins',sans-serif]">
                Funiro.
              </span>
            </Link>
            <address className="not-italic text-sm sm:text-base text-[#9F9F9F] leading-relaxed max-w-xs">
              400 University Drive Suite 200 Coral Gables,
              <br />
              FL 33134 USA
            </address>
          </div>

          {/* Links Column */}
          <div className="lg:col-span-2">
            <h4 className="text-base font-medium text-[#9F9F9F] mb-8 lg:mb-10 tracking-wide">
              Links
            </h4>
            <ul className="flex flex-col gap-6 text-sm sm:text-base font-medium text-[#000000]">
              <li>
                <Link href="/" className="hover:text-[#B88E2F] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-[#B88E2F] transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-[#B88E2F] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#B88E2F] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#B88E2F] transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Column */}
          <div className="lg:col-span-2">
            <h4 className="text-base font-medium text-[#9F9F9F] mb-8 lg:mb-10 tracking-wide">
              Help
            </h4>
            <ul className="flex flex-col gap-6 text-sm sm:text-base font-medium text-[#000000]">
              <li>
                <button
                  onClick={() => showToast('Payment Options: Credit Card, Bank Transfer, COD')}
                  className="hover:text-[#B88E2F] transition-colors text-left"
                >
                  Payment Options
                </button>
              </li>
              <li>
                <button
                  onClick={() => showToast('30-Day Hassle-Free Returns on all items')}
                  className="hover:text-[#B88E2F] transition-colors text-left"
                >
                  Returns
                </button>
              </li>
              <li>
                <button
                  onClick={() => showToast('Privacy Policy: We protect your personal data')}
                  className="hover:text-[#B88E2F] transition-colors text-left"
                >
                  Privacy Policies
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4">
            <h4 className="text-base font-medium text-[#9F9F9F] mb-8 lg:mb-10 tracking-wide">
              Newsletter
            </h4>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-stretch sm:items-end gap-3 sm:gap-4">
              <div className="flex-1">
                <label htmlFor="newsletter-email" className="sr-only">
                  Enter Your Email Address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email Address"
                  className="w-full text-sm text-[#000000] placeholder:text-[#9F9F9F] pb-1 border-b border-[#000000] focus:border-[#B88E2F] focus:outline-hidden bg-transparent transition-colors"
                  required
                />
              </div>
              <button
                type="submit"
                className="text-sm font-semibold tracking-wider text-[#000000] pb-1 border-b border-[#000000] hover:text-[#B88E2F] hover:border-[#B88E2F] uppercase whitespace-nowrap transition-colors cursor-pointer self-start sm:self-auto shrink-0"
              >
                SUBSCRIBE
              </button>
            </form>
            {subscribed && (
              <p className="mt-2 text-xs text-[#2EC1AC] font-medium">
                Thank you for subscribing!
              </p>
            )}
          </div>
        </div>

        {/* Bottom Line & Copyright */}
        <div className="pt-8 border-t border-[#D9D9D9]">
          <p className="text-sm text-[#000000]">
            2023 furino. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

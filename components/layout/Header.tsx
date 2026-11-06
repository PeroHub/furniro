'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  User, 
  Search, 
  Heart, 
  ShoppingCart, 
  Menu, 
  X,
  Sparkles
} from 'lucide-react';
import { useStore } from '@/context/StoreContext';

interface HeaderProps {
  currentPath?: string;
}

export default function Header({ currentPath = '/' }: HeaderProps) {
  const { openCart, cartCount, wishlistCount, showToast } = useStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: '/contact' },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      showToast(`Searching for "${searchQuery.trim()}"...`);
      setIsSearchOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-20 sm:h-24 flex items-center justify-between">
        
        {/* Brand Zone: Logo + Name */}
        <Link 
          href="/" 
          className="flex items-center gap-2.5 group shrink-0"
          aria-label="Furniro Home"
        >
          {/* Stylized Furniro Gold Triangle Emblem */}
          <div className="w-9 h-8 relative flex items-center justify-center">
            <svg
              viewBox="0 0 36 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full transform transition-transform group-hover:scale-105"
            >
              <path
                d="M18 1.5L34 29.5H2L18 1.5Z"
                fill="#B88E2F"
                fillOpacity="0.15"
              />
              <path
                d="M18 3.5L32.5 28.5H3.5L18 3.5Z"
                stroke="#B88E2F"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 11.5L25 24H11L18 11.5Z"
                fill="#B88E2F"
              />
            </svg>
          </div>
          <span className="text-2xl sm:text-[28px] font-bold tracking-tight text-[#000000] font-['Montserrat',sans-serif]">
            Furniro
          </span>
        </Link>

        {/* Navigation Zone */}
        <nav className="hidden md:flex items-center gap-10 lg:gap-14">
          {navLinks.map((link) => {
            const isActive = currentPath === link.href;
            const className = `text-[15px] font-medium transition-colors hover:text-[#B88E2F] relative py-1 ${
              isActive ? 'text-[#000000] font-semibold' : 'text-[#000000]'
            }`;

            return link.href.startsWith('/') ? (
              <Link key={link.label} href={link.href} className={className}>
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B88E2F] rounded-full" />
                )}
              </Link>
            ) : (
              <a key={link.label} href={link.href} className={className}>
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B88E2F] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Icons Zone */}
        <div className="flex items-center gap-4 sm:gap-7 shrink-0 text-[#000000]">
          {/* User Account / Profile */}
          <div className="relative">
            <button
              onClick={() => setIsAccountOpen(!isAccountOpen)}
              className="p-1 hover:text-[#B88E2F] transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B88E2F] rounded-full"
              aria-label="User account"
            >
              <User className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
            </button>

            {/* Account Quick Dropdown */}
            {isAccountOpen && (
              <div className="absolute right-0 mt-3 w-56 bg-white rounded-lg shadow-xl border border-neutral-100 py-2 z-50 text-sm">
                <div className="px-4 py-2 border-b border-neutral-100">
                  <p className="text-xs text-[#9F9F9F]">Welcome back</p>
                  <p className="font-semibold text-[#333333] truncate">Guest Shopper</p>
                </div>
                <button
                  onClick={() => {
                    showToast('Opening Member Profile');
                    setIsAccountOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-[#FFF3E3]/60 hover:text-[#B88E2F] transition-colors text-xs font-medium"
                >
                  My Orders & Tracking
                </button>
                <button
                  onClick={() => {
                    showToast('Opening Saved Addresses');
                    setIsAccountOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-[#FFF3E3]/60 hover:text-[#B88E2F] transition-colors text-xs font-medium"
                >
                  Shipping Addresses
                </button>
                <button
                  onClick={() => {
                    showToast('Opening Furniro Rewards');
                    setIsAccountOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-[#FFF3E3]/60 hover:text-[#B88E2F] transition-colors text-xs font-medium flex items-center justify-between"
                >
                  <span>VIP Rewards</span>
                  <span className="text-[10px] bg-[#B88E2F] text-white px-1.5 py-0.5 rounded-full font-bold">Gold</span>
                </button>
              </div>
            )}
          </div>

          {/* Search Trigger */}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-1 hover:text-[#B88E2F] transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B88E2F] rounded-full"
            aria-label="Search catalog"
          >
            <Search className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
          </button>

          {/* Wishlist Icon */}
          <button
            onClick={() => showToast(`You have ${wishlistCount} items saved in your Wishlist`)}
            className="p-1 hover:text-[#B88E2F] transition-colors relative focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B88E2F] rounded-full"
            aria-label={`Wishlist with ${wishlistCount} items`}
          >
            <Heart className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#B88E2F] text-white text-[10px] font-bold rounded-full flex items-center justify-center tabular-nums">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Cart Icon with Counter Badge */}
          <button
            onClick={openCart}
            className="p-1 hover:text-[#B88E2F] transition-colors relative focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B88E2F] rounded-full"
            aria-label={`Open shopping cart with ${cartCount} items`}
          >
            <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] bg-[#B88E2F] text-white text-[10px] font-bold rounded-full flex items-center justify-center px-1 tabular-nums animate-in fade-in zoom-in duration-150">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1 text-[#333333] hover:text-[#B88E2F] focus:outline-hidden"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Expandable Search Bar Drawer */}
      {isSearchOpen && (
        <div className="bg-[#FFF9F3] border-t border-[#D9D9D9]/50 px-4 sm:px-6 lg:px-12 py-3 transition-all animate-in slide-in-from-top-2">
          <form onSubmit={handleSearchSubmit} className="max-w-2xl mx-auto flex items-center gap-3">
            <Search className="w-5 h-5 text-[#B88E2F] shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dining chairs, luxury sofas, lamps, or decor..."
              className="w-full bg-transparent border-none py-1.5 text-sm text-[#333333] placeholder:text-[#9F9F9F] focus:outline-hidden"
              autoFocus
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="text-xs text-[#9F9F9F] hover:text-black"
              >
                Clear
              </button>
            )}
            <button
              type="submit"
              className="px-4 py-1.5 bg-[#B88E2F] text-white text-xs font-semibold rounded hover:bg-[#9E7A26] transition-colors"
            >
              Search
            </button>
            <button
              type="button"
              onClick={() => setIsSearchOpen(false)}
              className="text-[#9F9F9F] hover:text-[#333333] p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-100 bg-white px-6 py-5 shadow-lg">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-[#333333] hover:text-[#B88E2F] transition-colors py-1 border-b border-neutral-50"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex items-center justify-between text-xs text-[#9F9F9F]">
              <span>Cart items: {cartCount}</span>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openCart();
                }}
                className="text-[#B88E2F] font-semibold underline"
              >
                View Cart
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

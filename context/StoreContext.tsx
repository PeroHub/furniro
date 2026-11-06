'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: {
    type: 'discount' | 'new';
    text: string;
  };
  category: 'chair' | 'sofa' | 'lamp' | 'decor' | 'table' | 'bed';
  rating?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

interface StoreContextType {
  cart: CartItem[];
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  cartCount: number;
  cartSubtotal: number;
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  wishlistCount: number;
  toast: string | null;
  showToast: (msg: string) => void;
}

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'syltherine',
    name: 'Syltherine',
    subtitle: 'Stylish cafe chair',
    price: 2500000,
    originalPrice: 3500000,
    image: '/images/product_cafe_chair_1793965648211.jpg',
    badge: { type: 'discount', text: '-30%' },
    category: 'chair',
    rating: 4.8,
  },
  {
    id: 'leviosa',
    name: 'Leviosa',
    subtitle: 'Stylish cafe chair',
    price: 2500000,
    image: '/images/product_cafe_chair_1793965648211.jpg',
    category: 'chair',
    rating: 4.6,
  },
  {
    id: 'lolito',
    name: 'Lolito',
    subtitle: 'Luxury big sofa',
    price: 7000000,
    originalPrice: 14000000,
    image: '/images/product_luxury_sofa_1793965649590.jpg',
    badge: { type: 'discount', text: '-50%' },
    category: 'sofa',
    rating: 4.9,
  },
  {
    id: 'respira',
    name: 'Respira',
    subtitle: 'Outdoor bar table and stool',
    price: 500000,
    image: '/images/category_dining_table_1793965623267.jpg',
    badge: { type: 'new', text: 'New' },
    category: 'table',
    rating: 4.7,
  },
  {
    id: 'grifo',
    name: 'Grifo',
    subtitle: 'Night lamp',
    price: 1500000,
    image: '/images/product_night_lamp_1793965650106.jpg',
    category: 'lamp',
    rating: 4.5,
  },
  {
    id: 'muggo',
    name: 'Muggo',
    subtitle: 'Small mug',
    price: 150000,
    image: '/images/category_living_room_1793965623014.jpg',
    badge: { type: 'new', text: 'New' },
    category: 'decor',
    rating: 4.9,
  },
  {
    id: 'pingky',
    name: 'Pingky',
    subtitle: 'Cute bed set',
    price: 7000000,
    originalPrice: 14000000,
    image: '/images/category_bedroom_decor_1793965622990.jpg',
    badge: { type: 'discount', text: '-50%' },
    category: 'bed',
    rating: 4.8,
  },
  {
    id: 'potty',
    name: 'Potty',
    subtitle: 'Minimalist flower pot',
    price: 500000,
    image: '/images/product_leather_sofa_1793965649732.jpg',
    badge: { type: 'new', text: 'New' },
    category: 'sofa',
    rating: 4.6,
  },
];

export const MORE_PRODUCTS: Product[] = [
  {
    id: 'asgaard-sofa',
    name: 'Asgaard sofa',
    subtitle: 'Outdoor Scandinavian sofa',
    price: 25000000,
    image: '/images/product_luxury_sofa_1793965649590.jpg',
    badge: { type: 'new', text: 'New' },
    category: 'sofa',
    rating: 5.0,
  },
  {
    id: 'maya-dining',
    name: 'Maya Dining set',
    subtitle: 'Solid oak dining table',
    price: 12500000,
    originalPrice: 15000000,
    image: '/images/category_dining_table_1793965623267.jpg',
    badge: { type: 'discount', text: '-15%' },
    category: 'table',
    rating: 4.9,
  },
  {
    id: 'nordic-lounge',
    name: 'Nordic Lounge chair',
    subtitle: 'Woven rattan accent chair',
    price: 3200000,
    image: '/images/hero_scandinavian_room_1793965621222.jpg',
    category: 'chair',
    rating: 4.7,
  },
  {
    id: 'lumina-arc',
    name: 'Lumina Arc lamp',
    subtitle: 'Architectural floor light',
    price: 2800000,
    originalPrice: 3500000,
    image: '/images/product_night_lamp_1793965650106.jpg',
    badge: { type: 'discount', text: '-20%' },
    category: 'lamp',
    rating: 4.8,
  },
];

export function formatRupiah(amount: number): string {
  return `Rp ${amount.toLocaleString('id-ID')}`;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  // Pre-populate with 1 item for immediate realistic checkout preview
  const [cart, setCart] = useState<CartItem[]>([
    {
      product: INITIAL_PRODUCTS[0], // Syltherine
      quantity: 1,
    },
    {
      product: INITIAL_PRODUCTS[4], // Grifo
      quantity: 1,
    },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [wishlist, setWishlist] = useState<string[]>(['syltherine', 'lolito']);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
  };

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      setToast(null);
    }, 2800);
    return () => clearTimeout(timer);
  }, [toast]);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const addToCart = (product: Product, quantity: number = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`Added "${product.name}" to your cart`);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    showToast('Item removed from cart');
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast('Removed from wishlist');
        return prev.filter((id) => id !== productId);
      } else {
        showToast('Added to wishlist');
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartSubtotal = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );
  const wishlistCount = wishlist.length;

  return (
    <StoreContext.Provider
      value={{
        cart,
        isCartOpen,
        openCart,
        closeCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartCount,
        cartSubtotal,
        wishlist,
        toggleWishlist,
        isInWishlist,
        wishlistCount,
        toast,
        showToast,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
}

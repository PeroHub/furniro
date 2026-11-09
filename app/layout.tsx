import type { Metadata, Viewport } from 'next';
import './globals.css';
import { StoreProvider } from '@/context/StoreContext';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'Furniro - Modern Living & Furniture Store',
  description: 'Discover our curated collection of handcrafted, stylish modern furniture for your home. High-end Scandinavian living, dining, and bedroom pieces.',
  openGraph: {
    title: 'Furniro - Modern Living & Furniture Store',
    description: 'Discover our curated collection of handcrafted, stylish modern furniture for your home.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Furniro - Modern Living & Furniture Store',
    description: 'Discover our curated collection of handcrafted, stylish modern furniture for your home.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="min-h-screen bg-white text-[#333333] antialiased selection:bg-[#B88E2F]/20 selection:text-[#B88E2F]">
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}

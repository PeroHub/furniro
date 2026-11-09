'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { AlertCircle, RefreshCw, Home } from 'lucide-react';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to an error reporting service if configured
    console.error('App runtime error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 font-['Poppins',sans-serif]">
      <div className="max-w-md w-full bg-[#F4F5F7] p-8 sm:p-10 rounded-lg text-center border border-neutral-200 shadow-sm">
        <div className="w-14 h-14 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-[#3A3A3A] mb-2 font-['Montserrat',sans-serif]">
          Something Went Wrong
        </h2>
        <p className="text-sm text-[#898989] mb-6 leading-relaxed">
          An unexpected error occurred while processing your request. Please try again or return to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#B88E2F] text-white text-xs font-semibold rounded uppercase tracking-wider hover:bg-[#9E7A26] transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Try Again</span>
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 border border-[#3A3A3A] text-[#3A3A3A] text-xs font-semibold rounded uppercase tracking-wider hover:bg-[#3A3A3A] hover:text-white transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Go Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

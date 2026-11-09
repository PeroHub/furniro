import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center font-['Poppins',sans-serif]">
      <div className="flex flex-col items-center gap-4">
        {/* Animated Furniro Spinner */}
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 border-3 border-[#F4F5F7] rounded-full" />
          <div className="absolute inset-0 border-3 border-[#B88E2F] border-t-transparent rounded-full animate-spin" />
        </div>
        <p className="text-xs uppercase tracking-widest text-[#9F9F9F] font-medium">
          Loading Furniro...
        </p>
      </div>
    </div>
  );
}

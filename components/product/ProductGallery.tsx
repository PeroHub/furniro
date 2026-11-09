'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ProductGalleryProps {
  mainImage?: string;
  images?: string[];
  productName?: string;
}

export default function ProductGallery({
  mainImage = '/images/asgaard_sofa_thumb.jpg',
  images = [
    '/images/asgaard_sofa_thumb.jpg',
    '/images/sofa_showcase_wide.jpg',
    '/images/product_luxury_sofa_1793965649590.jpg',
    '/images/product_leather_sofa_1793965649732.jpg',
  ],
  productName = 'Asgaard sofa',
}: ProductGalleryProps) {
  const [userSelectedImage, setUserSelectedImage] = useState<string | null>(null);
  const [prevMainImage, setPrevMainImage] = useState<string>(mainImage);

  if (prevMainImage !== mainImage) {
    setPrevMainImage(mainImage);
    setUserSelectedImage(null);
  }

  const selectedImage = userSelectedImage || mainImage;

  // Ensure there are at least 4 thumbnails for visual balance
  const displayImages = images && images.length > 0 ? images : [mainImage];
  const thumbnailList = displayImages.length >= 4 
    ? displayImages.slice(0, 4) 
    : [...displayImages, ...Array(4 - displayImages.length).fill(mainImage)];

  return (
    <div className="flex flex-col-reverse sm:flex-row gap-6 w-full">
      {/* Thumbnail Stack on the Far Left: 4 stacked thumbnail preview cards */}
      <div className="flex sm:flex-col gap-4 overflow-x-auto sm:overflow-visible shrink-0">
        {thumbnailList.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setUserSelectedImage(img)}
            className={`w-16 h-16 sm:w-20 sm:h-20 bg-[#F9F1E7] rounded-lg overflow-hidden relative cursor-pointer transition-all duration-200 border ${
              selectedImage === img
                ? 'border-[#B88E2F] ring-1 ring-[#B88E2F]'
                : 'border-transparent hover:border-neutral-300'
            }`}
            aria-label={`Select product image thumbnail ${idx + 1}`}
          >
            <Image
              src={img}
              alt={`${productName} thumbnail ${idx + 1}`}
              fill
              sizes="80px"
              className="object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </button>
        ))}
      </div>

      {/* Large Main Featured Image View inside a light beige container */}
      <div className="flex-1 bg-[#F9F1E7] rounded-[10px] overflow-hidden relative min-h-[380px] sm:min-h-[480px] lg:min-h-[500px] flex items-center justify-center p-6 sm:p-10">
        <Image
          src={selectedImage}
          alt={productName}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 600px"
          className="object-contain object-center transition-all duration-300"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
}

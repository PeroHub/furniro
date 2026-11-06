'use client';

import React from 'react';
import { useStore } from '@/context/StoreContext';
import { ComparisonProductInfo } from './ComparisonTopCards';

interface SpecRow {
  label: string;
  val1: string;
  val2: string;
}

interface SpecSection {
  title: string;
  specs: SpecRow[];
}

const COMPARISON_DATA: SpecSection[] = [
  {
    title: 'General',
    specs: [
      {
        label: 'Sales Package',
        val1: '1 sectional sofa',
        val2: '1 Three Seater, 2 Single Seater',
      },
      {
        label: 'Model Number',
        val1: 'TFCBLIGRBL6SRHS',
        val2: 'DTUBLIGRBL568',
      },
      {
        label: 'Secondary Material',
        val1: 'Solid Wood',
        val2: 'Solid Wood',
      },
      {
        label: 'Configuration',
        val1: 'L-shaped',
        val2: 'L-shaped',
      },
      {
        label: 'Upholstery Material',
        val1: 'Fabric + Cotton',
        val2: 'Fabric + Cotton',
      },
      {
        label: 'Upholstery Color',
        val1: 'Bright Grey & Lion',
        val2: 'Bright Grey & Lion',
      },
    ],
  },
  {
    title: 'Product',
    specs: [
      {
        label: 'Filling Material',
        val1: 'Foam',
        val2: 'Matte',
      },
      {
        label: 'Finish Type',
        val1: 'Bright Grey & Lion',
        val2: 'Bright Grey & Lion',
      },
      {
        label: 'Adjustable Headrest',
        val1: 'No',
        val2: 'yes',
      },
      {
        label: 'Maximum Load Capacity',
        val1: '280 KG',
        val2: '300 KG',
      },
      {
        label: 'Origin of Manufacture',
        val1: 'India',
        val2: 'India',
      },
    ],
  },
  {
    title: 'Dimensions',
    specs: [
      {
        label: 'Width',
        val1: '265.32 cm',
        val2: '265.32 cm',
      },
      {
        label: 'Height',
        val1: '76 cm',
        val2: '76 cm',
      },
      {
        label: 'Depth',
        val1: '167.76 cm',
        val2: '167.76 cm',
      },
      {
        label: 'Weight',
        val1: '45 KG',
        val2: '65 KG',
      },
      {
        label: 'Seat Height',
        val1: '41.52 cm',
        val2: '41.52 cm',
      },
      {
        label: 'Leg Height',
        val1: '5.46 cm',
        val2: '5.46 cm',
      },
    ],
  },
  {
    title: 'Warranty',
    specs: [
      {
        label: 'Warranty Summary',
        val1: '1 Year Manufacturing Warranty',
        val2: '1.2 Year Manufacturing Warranty',
      },
      {
        label: 'Warranty Service Type',
        val1: 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
        val2: 'For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com',
      },
      {
        label: 'Covered in Warranty',
        val1: 'Warranty Against Manufacturing Defect',
        val2: 'Warranty of the product is limited to manufacturing defects only.',
      },
      {
        label: 'Not Covered in Warranty',
        val1: 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
        val2: 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
      },
      {
        label: 'Domestic Warranty',
        val1: '1 Year',
        val2: '3 Months',
      },
    ],
  },
];

interface ComparisonTableProps {
  product1: ComparisonProductInfo;
  product2: ComparisonProductInfo;
}

export default function ComparisonTable({ product1, product2 }: ComparisonTableProps) {
  const { addToCart, openCart } = useStore();

  const handleAddToCart = (productInfo: ComparisonProductInfo) => {
    addToCart(
      {
        id: productInfo.id,
        name: productInfo.name,
        subtitle: 'Living Room Collection',
        price: productInfo.rawPrice,
        image: productInfo.image,
        category: 'sofa',
        rating: productInfo.rating,
      },
      1
    );
    // Open the sliding cart drawer seamlessly
    openCart();
  };

  return (
    <div className="w-full font-['Poppins',sans-serif] overflow-x-auto">
      <div className="min-w-[840px] lg:min-w-full">
        {COMPARISON_DATA.map((section) => (
          <div key={section.title} className="mb-6">
            {/* Section Category Title */}
            <div className="grid grid-cols-4">
              <div className="p-6 sm:px-8 lg:px-10 pt-8 pb-3 border-r border-[#E8E8E8]">
                <h3 className="text-2xl font-bold text-black font-['Montserrat',sans-serif]">
                  {section.title}
                </h3>
              </div>
              <div className="border-r border-[#E8E8E8]" />
              <div className="border-r border-[#E8E8E8]" />
              <div />
            </div>

            {/* Specification Rows */}
            {section.specs.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-4 items-stretch group hover:bg-[#FAF8F5]/60 transition-colors"
              >
                {/* Column 1: Specification Label */}
                <div className="p-4 sm:px-8 lg:px-10 py-3 border-r border-[#E8E8E8] flex items-center">
                  <span className="text-base text-black font-normal font-['Poppins',sans-serif]">
                    {row.label}
                  </span>
                </div>

                {/* Column 2: Product 1 Value */}
                <div className="p-4 sm:px-8 lg:px-10 py-3 border-r border-[#E8E8E8] flex items-center">
                  <span className="text-sm sm:text-base text-black font-normal font-['Poppins',sans-serif] leading-relaxed">
                    {row.val1}
                  </span>
                </div>

                {/* Column 3: Product 2 Value */}
                <div className="p-4 sm:px-8 lg:px-10 py-3 border-r border-[#E8E8E8] flex items-center">
                  <span className="text-sm sm:text-base text-black font-normal font-['Poppins',sans-serif] leading-relaxed">
                    {row.val2}
                  </span>
                </div>

                {/* Column 4: Empty space with hairline border */}
                <div className="p-4 sm:px-8 lg:px-10 py-3 flex items-center" />
              </div>
            ))}
          </div>
        ))}

        {/* Bottom CTA Row: Add to Cart Buttons */}
        <div className="grid grid-cols-4 py-8 items-center border-t border-[#E8E8E8]">
          {/* Column 1: Empty */}
          <div className="p-4 sm:px-8 lg:px-10 border-r border-[#E8E8E8]" />

          {/* Column 2: Add To Cart Product 1 */}
          <div className="p-4 sm:px-8 lg:px-10 border-r border-[#E8E8E8]">
            <button
              onClick={() => handleAddToCart(product1)}
              className="w-full sm:w-auto px-8 sm:px-12 py-3.5 bg-[#B88E2F] hover:bg-[#9e7a27] text-white text-base font-normal font-['Poppins',sans-serif] transition-all cursor-pointer shadow-xs active:scale-98 whitespace-nowrap inline-flex items-center justify-center text-center"
            >
              Add To Cart
            </button>
          </div>

          {/* Column 3: Add To Cart Product 2 */}
          <div className="p-4 sm:px-8 lg:px-10 border-r border-[#E8E8E8]">
            <button
              onClick={() => handleAddToCart(product2)}
              className="w-full sm:w-auto px-8 sm:px-12 py-3.5 bg-[#B88E2F] hover:bg-[#9e7a27] text-white text-base font-normal font-['Poppins',sans-serif] transition-all cursor-pointer shadow-xs active:scale-98 whitespace-nowrap inline-flex items-center justify-center text-center"
            >
              Add To Cart
            </button>
          </div>

          {/* Column 4: Empty */}
          <div className="p-4 sm:px-8 lg:px-10" />
        </div>
      </div>
    </div>
  );
}

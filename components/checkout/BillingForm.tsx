'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';

export interface BillingFormData {
  firstName: string;
  lastName: string;
  companyName: string;
  country: string;
  streetAddress: string;
  city: string;
  province: string;
  zipCode: string;
  phone: string;
  email: string;
  additionalInfo: string;
}

interface BillingFormProps {
  formData: BillingFormData;
  onChange: (field: keyof BillingFormData, value: string) => void;
}

const COUNTRIES = [
  'Sri Lanka',
  'Indonesia',
  'India',
  'Singapore',
  'Malaysia',
  'United States',
  'United Kingdom',
  'Australia',
];

const PROVINCES = [
  'Western Province',
  'Central Province',
  'Southern Province',
  'North Western Province',
  'Eastern Province',
  'Northern Province',
];

export default function BillingForm({ formData, onChange }: BillingFormProps) {
  return (
    <div className="w-full font-['Poppins',sans-serif]">
      {/* Form Heading */}
      <h2 className="text-3xl sm:text-4xl font-semibold text-black font-['Poppins',sans-serif] mb-9">
        Billing details
      </h2>

      <div className="space-y-6 sm:space-y-8">
        {/* Row 1: First Name & Last Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-base font-medium text-black mb-3"
            >
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              required
              value={formData.firstName}
              onChange={(e) => onChange('firstName', e.target.value)}
              className="w-full h-[52px] sm:h-[65px] rounded-[10px] border border-[#9F9F9F] px-4 sm:px-6 text-sm sm:text-base text-black bg-white focus:outline-hidden focus:border-[#B88E2F] focus:ring-1 focus:ring-[#B88E2F] transition-all"
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-base font-medium text-black mb-3"
            >
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              required
              value={formData.lastName}
              onChange={(e) => onChange('lastName', e.target.value)}
              className="w-full h-[52px] sm:h-[65px] rounded-[10px] border border-[#9F9F9F] px-4 sm:px-6 text-sm sm:text-base text-black bg-white focus:outline-hidden focus:border-[#B88E2F] focus:ring-1 focus:ring-[#B88E2F] transition-all"
            />
          </div>
        </div>

        {/* Company Name (Optional) */}
        <div>
          <label
            htmlFor="companyName"
            className="block text-base font-medium text-black mb-3"
          >
            Company Name (Optional)
          </label>
          <input
            id="companyName"
            type="text"
            value={formData.companyName}
            onChange={(e) => onChange('companyName', e.target.value)}
            className="w-full h-[52px] sm:h-[65px] rounded-[10px] border border-[#9F9F9F] px-4 sm:px-6 text-sm sm:text-base text-black bg-white focus:outline-hidden focus:border-[#B88E2F] focus:ring-1 focus:ring-[#B88E2F] transition-all"
          />
        </div>

        {/* Country / Region Dropdown */}
        <div>
          <label
            htmlFor="country"
            className="block text-base font-medium text-black mb-3"
          >
            Country / Region
          </label>
          <div className="relative">
            <select
              id="country"
              value={formData.country}
              onChange={(e) => onChange('country', e.target.value)}
              className="w-full h-[65px] sm:h-[75px] rounded-[10px] border border-[#9F9F9F] px-6 pr-12 text-base text-[#9F9F9F] bg-white focus:outline-hidden focus:border-[#B88E2F] focus:ring-1 focus:ring-[#B88E2F] transition-all appearance-none cursor-pointer"
            >
              {COUNTRIES.map((c) => (
                <option key={c} value={c} className="text-black">
                  {c}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-black pointer-events-none stroke-[2]" />
          </div>
        </div>

        {/* Street address */}
        <div>
          <label
            htmlFor="streetAddress"
            className="block text-base font-medium text-black mb-3"
          >
            Street address
          </label>
          <input
            id="streetAddress"
            type="text"
            required
            value={formData.streetAddress}
            onChange={(e) => onChange('streetAddress', e.target.value)}
            className="w-full h-[52px] sm:h-[65px] rounded-[10px] border border-[#9F9F9F] px-4 sm:px-6 text-sm sm:text-base text-black bg-white focus:outline-hidden focus:border-[#B88E2F] focus:ring-1 focus:ring-[#B88E2F] transition-all"
          />
        </div>

        {/* Town / City */}
        <div>
          <label
            htmlFor="city"
            className="block text-base font-medium text-black mb-3"
          >
            Town / City
          </label>
          <input
            id="city"
            type="text"
            required
            value={formData.city}
            onChange={(e) => onChange('city', e.target.value)}
            className="w-full h-[52px] sm:h-[65px] rounded-[10px] border border-[#9F9F9F] px-4 sm:px-6 text-sm sm:text-base text-black bg-white focus:outline-hidden focus:border-[#B88E2F] focus:ring-1 focus:ring-[#B88E2F] transition-all"
          />
        </div>

        {/* Province Dropdown */}
        <div>
          <label
            htmlFor="province"
            className="block text-base font-medium text-black mb-3"
          >
            Province
          </label>
          <div className="relative">
            <select
              id="province"
              value={formData.province}
              onChange={(e) => onChange('province', e.target.value)}
              className="w-full h-[65px] sm:h-[75px] rounded-[10px] border border-[#9F9F9F] px-6 pr-12 text-base text-[#9F9F9F] bg-white focus:outline-hidden focus:border-[#B88E2F] focus:ring-1 focus:ring-[#B88E2F] transition-all appearance-none cursor-pointer"
            >
              {PROVINCES.map((p) => (
                <option key={p} value={p} className="text-black">
                  {p}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-black pointer-events-none stroke-[2]" />
          </div>
        </div>

        {/* ZIP code */}
        <div>
          <label
            htmlFor="zipCode"
            className="block text-base font-medium text-black mb-3"
          >
            ZIP code
          </label>
          <input
            id="zipCode"
            type="text"
            required
            value={formData.zipCode}
            onChange={(e) => onChange('zipCode', e.target.value)}
            className="w-full h-[52px] sm:h-[65px] rounded-[10px] border border-[#9F9F9F] px-4 sm:px-6 text-sm sm:text-base text-black bg-white focus:outline-hidden focus:border-[#B88E2F] focus:ring-1 focus:ring-[#B88E2F] transition-all"
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-base font-medium text-black mb-3"
          >
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => onChange('phone', e.target.value)}
            className="w-full h-[52px] sm:h-[65px] rounded-[10px] border border-[#9F9F9F] px-4 sm:px-6 text-sm sm:text-base text-black bg-white focus:outline-hidden focus:border-[#B88E2F] focus:ring-1 focus:ring-[#B88E2F] transition-all"
          />
        </div>

        {/* Email address */}
        <div>
          <label
            htmlFor="email"
            className="block text-base font-medium text-black mb-3"
          >
            Email address
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => onChange('email', e.target.value)}
            className="w-full h-[52px] sm:h-[65px] rounded-[10px] border border-[#9F9F9F] px-4 sm:px-6 text-sm sm:text-base text-black bg-white focus:outline-hidden focus:border-[#B88E2F] focus:ring-1 focus:ring-[#B88E2F] transition-all"
          />
        </div>

        {/* Additional Information (Standalone input matching screenshot) */}
        <div className="pt-2">
          <input
            id="additionalInfo"
            type="text"
            placeholder="Additional information"
            value={formData.additionalInfo}
            onChange={(e) => onChange('additionalInfo', e.target.value)}
            className="w-full h-[52px] sm:h-[65px] rounded-[10px] border border-[#9F9F9F] px-4 sm:px-6 text-sm sm:text-base text-black bg-white placeholder:text-[#9F9F9F] focus:outline-hidden focus:border-[#B88E2F] focus:ring-1 focus:ring-[#B88E2F] transition-all"
          />
        </div>
      </div>
    </div>
  );
}

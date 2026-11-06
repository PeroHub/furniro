'use client';

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import ContactHeader from '@/components/contact/ContactHeader';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';
import FeatureBar from '@/components/shop/FeatureBar';

export default function ContactPage() {
  return (
    <MainLayout currentPath="/contact">
      <div className="min-h-screen bg-white">
        {/* 1. Page Header Banner */}
        <ContactHeader />

        {/* 2. "Get In Touch With Us" Section Intro & Form */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-24">
          {/* Centered Heading & Subtitle */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl font-semibold text-black font-['Montserrat',sans-serif] mb-3">
              Get In Touch With Us
            </h2>
            <p className="text-sm sm:text-base text-[#9F9F9F] leading-relaxed max-w-2xl mx-auto font-['Poppins',sans-serif]">
              For More Information About Our Product &amp; Services. Please Feel Free To Drop Us An Email.
              Our Staff Always Be There To Help You Out. Do Not Hesitate!
            </p>
          </div>

          {/* Two-Column Asymmetric Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-5xl mx-auto">
            {/* Left Column: Contact Information Details */}
            <div className="lg:col-span-5">
              <ContactInfo />
            </div>

            {/* Right Column: Interactive Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* 3. Customer Trust / Feature Bar */}
        <FeatureBar />
      </div>
    </MainLayout>
  );
}

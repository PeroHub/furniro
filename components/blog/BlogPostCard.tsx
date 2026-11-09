'use client';

import React from 'react';
import Image from 'next/image';
import { User, Calendar, Tag } from 'lucide-react';
import { useStore } from '@/context/StoreContext';

export interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
}

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const { showToast } = useStore();

  return (
    <article className="w-full font-['Poppins',sans-serif] group">
      {/* 1. Full-width Hero Image with Rounded Corners */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:h-[500px] rounded-[10px] overflow-hidden bg-[#F9F1E7]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 1024px) 100vw, 65vw"
          className="object-cover object-center group-hover:scale-102 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* 2. Meta Info Row below Image */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-9 text-xs sm:text-base text-[#9F9F9F] font-normal mt-4">
        {/* Author */}
        <div className="flex items-center gap-2">
          <User className="w-4 h-4 text-[#9F9F9F] stroke-[1.8]" />
          <span>{post.author}</span>
        </div>

        {/* Date */}
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-[#9F9F9F] stroke-[1.8]" />
          <span>{post.date}</span>
        </div>

        {/* Category */}
        <div className="flex items-center gap-2">
          <Tag className="w-4 h-4 text-[#9F9F9F] stroke-[1.8]" />
          <span>{post.category}</span>
        </div>
      </div>

      {/* 3. Post Title */}
      <h2 className="text-2xl sm:text-3xl font-medium text-black font-['Poppins',sans-serif] mt-4 mb-3 group-hover:text-[#B88E2F] transition-colors leading-tight">
        {post.title}
      </h2>

      {/* 4. Excerpt Paragraph */}
      <p className="text-sm sm:text-base text-[#9F9F9F] font-normal leading-relaxed text-justify">
        {post.excerpt}
      </p>

      {/* 5. Read More CTA with Underline Indicator */}
      <div className="mt-6">
        <button
          onClick={() => showToast(`Opening article: "${post.title}"`)}
          className="text-base text-black font-normal border-b border-black pb-1 hover:text-[#B88E2F] hover:border-[#B88E2F] transition-colors cursor-pointer inline-block"
        >
          Read more
        </button>
      </div>
    </article>
  );
}

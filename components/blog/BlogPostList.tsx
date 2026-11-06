'use client';

import React from 'react';
import BlogPostCard, { BlogPost } from './BlogPostCard';

interface BlogPostListProps {
  posts: BlogPost[];
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function BlogPostList({
  posts,
  currentPage,
  onPageChange,
}: BlogPostListProps) {
  return (
    <div className="w-full font-['Poppins',sans-serif]">
      {posts.length === 0 ? (
        <div className="py-20 text-center bg-[#F9F1E7]/40 rounded-xl p-8">
          <p className="text-xl font-medium text-black mb-2">No articles found</p>
          <p className="text-sm text-[#9F9F9F]">
            Try adjusting your search query or selecting a different category from the sidebar.
          </p>
        </div>
      ) : (
        <div className="space-y-14 sm:space-y-16">
          {posts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      )}

      {/* Pagination Controls matching Figma specifications */}
      <div className="flex items-center justify-center gap-3 sm:gap-6 mt-14 sm:mt-18 font-['Poppins',sans-serif]">
        {[1, 2, 3].map((page) => (
          <button
            key={page}
            onClick={() => {
              onPageChange(page);
              window.scrollTo({ top: 300, behavior: 'smooth' });
            }}
            className={`w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-[10px] text-lg sm:text-xl font-normal transition-all cursor-pointer flex items-center justify-center shadow-xs active:scale-95 ${
              currentPage === page
                ? 'bg-[#B88E2F] text-white shadow-md'
                : 'bg-[#F9F1E7] text-black hover:bg-[#B88E2F] hover:text-white'
            }`}
            aria-label={`Go to page ${page}`}
            aria-current={currentPage === page ? 'page' : undefined}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => {
            const next = currentPage < 3 ? currentPage + 1 : 1;
            onPageChange(next);
            window.scrollTo({ top: 300, behavior: 'smooth' });
          }}
          className="px-6 sm:px-7 h-[50px] sm:h-[60px] rounded-[10px] bg-[#F9F1E7] text-black text-lg sm:text-xl font-light hover:bg-[#B88E2F] hover:text-white transition-all cursor-pointer flex items-center justify-center shadow-xs active:scale-95"
          aria-label="Next page"
        >
          Next
        </button>
      </div>
    </div>
  );
}

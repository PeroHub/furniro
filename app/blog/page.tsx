'use client';

import React, { useState, useMemo } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import BlogHeader from '@/components/blog/BlogHeader';
import BlogPostList from '@/components/blog/BlogPostList';
import BlogSidebar, {
  BlogCategory,
  RecentPost,
} from '@/components/blog/BlogSidebar';
import FeatureBar from '@/components/shop/FeatureBar';
import { BlogPost } from '@/components/blog/BlogPostCard';

const INITIAL_BLOG_POSTS: BlogPost[] = [
  {
    id: 'millennial-design',
    title: 'Going all-in with millennial design',
    author: 'Admin',
    date: '14 Oct 2022',
    category: 'Wood',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.',
    image: '/images/blog_post_1.jpg',
  },
  {
    id: 'decorating-ways',
    title: 'Exploring new ways of decorating',
    author: 'Admin',
    date: '14 Oct 2022',
    category: 'Handmade',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.',
    image: '/images/blog_post_2.jpg',
  },
  {
    id: 'handmade-pieces',
    title: 'Handmade pieces that took time to make',
    author: 'Admin',
    date: '14 Oct 2022',
    category: 'Wood',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.',
    image: '/images/blog_post_3.jpg',
  },
];

const CATEGORIES: BlogCategory[] = [
  { name: 'Crafts', count: 2 },
  { name: 'Design', count: 8 },
  { name: 'Handmade', count: 7 },
  { name: 'Interior', count: 1 },
  { name: 'Wood', count: 6 },
];

const RECENT_POSTS: RecentPost[] = [
  {
    id: 'recent-1',
    title: 'Going all-in with millennial design',
    date: '03 Aug 2022',
    image: '/images/blog_post_1.jpg',
  },
  {
    id: 'recent-2',
    title: 'Exploring new ways of decorating',
    date: '03 Aug 2022',
    image: '/images/blog_post_2.jpg',
  },
  {
    id: 'recent-3',
    title: 'Handmade pieces that took time to make',
    date: '03 Aug 2022',
    image: '/images/blog_post_3.jpg',
  },
  {
    id: 'recent-4',
    title: 'Modern home in Milan',
    date: '03 Aug 2022',
    image: '/images/hero_scandinavian_room_1793965621222.jpg',
  },
  {
    id: 'recent-5',
    title: 'Colorful office redesign',
    date: '03 Aug 2022',
    image: '/images/category_living_room_1793965623014.jpg',
  },
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter posts based on search query and category
  const filteredPosts = useMemo(() => {
    return INITIAL_BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === 'all' ||
        post.category.toLowerCase() === selectedCategory.toLowerCase();

      const matchesSearch =
        !searchQuery.trim() ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <MainLayout currentPath="/blog">
      <div className="min-h-screen bg-white">
        {/* 1. Page Header Banner */}
        <BlogHeader />

        {/* 2. Blog Content Section (Two-Column Asymmetric Layout) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left Column: Main Article Feed + Pagination */}
            <div className="lg:col-span-8">
              <BlogPostList
                posts={filteredPosts}
                currentPage={currentPage}
                onPageChange={(page) => setCurrentPage(page)}
              />
            </div>

            {/* Right Column: Sidebar */}
            <div className="lg:col-span-4 sticky top-28">
              <BlogSidebar
                searchQuery={searchQuery}
                onSearchChange={(q) => setSearchQuery(q)}
                selectedCategory={selectedCategory}
                onCategorySelect={(cat) => setSelectedCategory(cat)}
                categories={CATEGORIES}
                recentPosts={RECENT_POSTS}
              />
            </div>
          </div>
        </section>

        {/* 3. Customer Trust / Feature Bar */}
        <FeatureBar />
      </div>
    </MainLayout>
  );
}

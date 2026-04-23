"use client";

import { useEffect, useState } from "react";
import { blogPosts } from "@/data/blogPosts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogPagination from "@/components/blog/Pagination";
import FeaturedPost from "@/components/blog/FeaturedPost";
import ArticleList from "@/components/blog/ArticleList";

const POSTS_PER_PAGE = 9;

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = blogPosts.slice(startIndex, endIndex);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-white pb-20 lg:pb-0">
      <Header />
      
      <main className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
              Latest Articles
            </h1>
            <p className="text-xl text-gray-600">
              Insights and updates from the dental world
            </p>
          </div>

          {currentPage === 1 && currentPosts[0] && (
            <FeaturedPost post={currentPosts[0]} />
          )}

          <ArticleList posts={currentPosts} currentPage={currentPage} />

          <BlogPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
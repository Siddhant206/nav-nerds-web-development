"use client"
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";

function BlogCard({ post, priority = false }) {
  return (
    <article className="group">
      <Link
        href={`/blogs/${post.slug.current}`}
        className="block rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-[#4fd0da]  transform hover:-translate-y-1"
      >
        {post.mainImage?.asset?.url ? (
          <div className="relative overflow-hidden border   rounded-t-xl">
            <Image
              src={urlFor(post.mainImage.asset.url).width(800).height(500).url()}
              alt={post.mainImage?.alt || `Featured image for ${post.title}`}
              width={400}
              height={200}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              priority={priority}
            />
            {post.category && (
              <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {post.category}
              </span>
            )}
          </div>
        ) : (
          <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
          </div>
        )}

        <div className="p-5">
          <h3 className="font-bold text-lg leading-tight line-clamp-2 text-gray-800 group-hover:text-white transition-colors">
            {post.title}
          </h3>

          {(post.excerpt || post.description) && (
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 line-clamp-2 leading-relaxed">
              {post.excerpt || post.description}
            </p>
          )}

          <div className="flex items-center justify-between mt-4 text-xs text-gray-500">
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            {post.readingTime && <span>{post.readingTime} min read</span>}
          </div>
        </div>
      </Link>
    </article>
  );
}

function SearchAndFilter({
  searchQuery,
  selectedCategory,
  categories,
  onSearchChange,
  onCategoryChange,
  totalResults
}) {
  const [isPending, startTransition] = useTransition();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const query = formData.get('search');
    startTransition(() => onSearchChange(query));
  };

  return (
    <div className="mb-8 space-y-4">
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center">
        {/* Search */}
        <form onSubmit={handleSearchSubmit} className="flex-1 max-w-md">
          <div className="relative">
            <input
              type="text"
              name="search"
              placeholder="Search articles..."
              defaultValue={searchQuery}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent   dark:text-white"
            />
            <svg className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <button
              type="submit"
              className="absolute right-2 top-1.5 px-3 py-1 bg-[#4fd0da] text-white text-sm rounded hover:bg-black transition-colors"
              disabled={isPending}
            >
              {isPending ? '...' : 'Search'}
            </button>
          </div>
        </form>

        {/* Category Filter */}
        <select
          value={selectedCategory}
          onChange={(e) => startTransition(() => onCategoryChange(e.target.value))}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 text-gray-800 focus:ring-blue-500 "
          disabled={isPending}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Results count */}
      <div className="text-sm text-gray-600 dark:text-gray-200">
        {searchQuery || selectedCategory ? (
          <>
            Found {totalResults} result{totalResults !== 1 ? 's' : ''}
            {searchQuery && ` for "${searchQuery}"`}
            {selectedCategory && ` in "${selectedCategory}"`}
          </>
        ) : (
          `Showing ${totalResults} article${totalResults !== 1 ? 's' : ''}`
        )}
      </div>
    </div>
  );
}

function ServerPagination({ currentPage, totalPages, baseUrl }) {
  const generatePageUrl = (page) => {
    const url = new URL(baseUrl, window.location.origin);
    if (page > 1) url.searchParams.set('page', page.toString());
    return url.pathname + url.search;
  };

  if (totalPages <= 1) return null;

  const pages = [];
  const showPages = 5;
  let startPage = Math.max(1, currentPage - Math.floor(showPages / 2));
  let endPage = Math.min(totalPages, startPage + showPages - 1);

  if (endPage - startPage < showPages - 1) {
    startPage = Math.max(1, endPage - showPages + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <nav className="flex items-center justify-center space-x-2 mt-12">
      {currentPage > 1 && (
        <Link
          href={generatePageUrl(currentPage - 1)}
          className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
        >
          ← Previous
        </Link>
      )}

      {startPage > 1 && (
        <>
          <Link href={generatePageUrl(1)} className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            1
          </Link>
          {startPage > 2 && <span className="text-gray-500">...</span>}
        </>
      )}

      {pages.map((page) => (
        <Link
          key={page}
          href={generatePageUrl(page)}
          className={`px-3 py-2 text-sm font-medium rounded-lg border ${currentPage === page
              ? 'text-white bg-blue-600 border-blue-600'
              : 'text-gray-700 bg-white border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700'
            }`}
        >
          {page}
        </Link>
      ))}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span className="text-gray-500">...</span>}
          <Link href={generatePageUrl(totalPages)} className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            {totalPages}
          </Link>
        </>
      )}

      {currentPage < totalPages && (
        <Link
          href={generatePageUrl(currentPage + 1)}
          className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
        >
          Next →
        </Link>
      )}
    </nav>
  );
}

export default function BlogLayout({
  blogs,
  categories = [],
  currentPage = 1,
  totalPages = 1,
  totalResults = 0,
  searchQuery = '',
  selectedCategory = '',
  baseUrl = '/blogs'
}) {
  const router = useRouter();

  const handleSearchChange = (query) => {
    const url = new URL(baseUrl, window.location.origin);
    if (query) url.searchParams.set('search', query);
    if (selectedCategory) url.searchParams.set('category', selectedCategory);
    router.push(url.pathname + url.search);
  };

  const handleCategoryChange = (category) => {
    const url = new URL(baseUrl, window.location.origin);
    if (searchQuery) url.searchParams.set('search', searchQuery);
    if (category) url.searchParams.set('category', category);
    router.push(url.pathname + url.search);
  };

  return (
    <section className="min-h-screen bg-[url(/HomePageBg.webp)]  bg-cover bg-no-repeat bg-top py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900  mb-4">
            Our Latest Insights
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover stories, thinking, and expertise from writers on any topic.
          </p>
        </div>

        <SearchAndFilter
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
          categories={categories}
          onSearchChange={handleSearchChange}
          onCategoryChange={handleCategoryChange}
          totalResults={totalResults}
        />

        {blogs?.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((post, index) => (
                <BlogCard
                  key={post._id}
                  post={post}
                  priority={index < 6}
                />
              ))}
            </div>

            <ServerPagination
              currentPage={currentPage}
              totalPages={totalPages}
              baseUrl={baseUrl}
            />
          </>
        ) : (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
              {searchQuery || selectedCategory ? 'No posts match your criteria' : 'No posts found'}
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {searchQuery || selectedCategory ? 'Try adjusting your search or filters.' : 'Get started by creating your first blog post.'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
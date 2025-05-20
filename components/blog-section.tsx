"use client";

import { SanityTypes } from "@/@types";
import { BlurFade } from "@/components/magicui/blur-fade";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const POSTS_PER_PAGE = 6;

async function getCategories() {
  const query = `*[_type == "blogCategory"] {
    _id,
    title,
    description
  }`;
  return await client.fetch(query);
}

async function getPosts(page: number = 1, categoryId?: string) {
  const start = (page - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;
  
  const categoryFilter = categoryId ? `&& category._ref == "${categoryId}"` : '';
  
  const query = `{
    "posts": *[_type == 'post' ${categoryFilter}] | order(_createdAt desc)[$start...$end]{
      _id,
      title,
      description,
      image,
      content,
      "slug": slug.current,
      "category": category->{
        _id,
        title
      },
      _createdAt
    },
    "total": count(*[_type == 'post' ${categoryFilter}])
  }`;
  
  return await client.fetch(query, { start, end });
}

export default function BlogSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState<SanityTypes.Post[]>([]);
  const [categories, setCategories] = useState<SanityTypes.BlogCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();
  const [totalPosts, setTotalPosts] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  const fetchPosts = async (page: number, categoryId?: string) => {
    setIsLoading(true);
    try {
      const { posts: newPosts, total } = await getPosts(page, categoryId);
      setPosts(newPosts);
      setTotalPosts(total);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
    setIsLoading(false);
  };

  // Initial fetch
  useEffect(() => {
    fetchPosts(1);
    getCategories().then(setCategories);
  }, []);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      fetchPosts(newPage, selectedCategory);
    }
  };

  const handleCategoryClick = (categoryId?: string) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
    fetchPosts(1, categoryId);
  };

  return (
    <section>
      {/* Category Tags */}
      <div className="flex flex-wrap gap-4 justify-center my-8">
        <button
          key="all"
          onClick={() => handleCategoryClick(undefined)}
          className={`px-4 py-2 rounded-full border-2 transition-all duration-200 ${
            !selectedCategory
              ? "bg-black text-white border-black"
              : "border-gray-200 hover:border-gray-300"
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category._id}
            onClick={() => handleCategoryClick(category._id)}
            className={`px-4 py-2 rounded-full border-2 transition-all duration-200 ${
              selectedCategory === category._id
                ? "bg-black text-white border-black"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-10 mb-10 justify-items-center">
        {isLoading ? (
          <div className="col-span-3 text-center">Loading...</div>
        ) : (
          posts.map(({ image, title, description, slug, category }, key) => (
            <div key={key} className="group w-full">
              <BlurFade
                key={title}
                delay={0.25 + key * 0.2}
                inView
                className="rounded-lg p-4 border border-gray-200 transition-all duration-200 bg-white hover:shadow-[2px_2px_rgba(0,0,0),4px_4px_rgba(0,0,0),6px_6px_rgba(0,0,0),8px_8px_rgba(0,0,0),10px_10px_0px_0px_rgba(0,0,0)] h-full flex flex-col"
              >
                <div className="flex flex-col h-full">
                  <Image
                    height={10000}
                    width={10000}
                    className="h-[200px] w-full object-cover rounded-lg transition-all duration-200"
                    src={urlFor(image).url()}
                    alt={title}
                  />
                  <Link href={`/blog/${slug}`}>
                    <h3 className="text-blue-500 text-lg md:text-2xl font-extrabold pt-4 hover:underline">
                      {title}
                    </h3>
                  </Link>
                  <p className="pt-2 flex-grow">{description}</p>
                  {category && (
                    <span className="text-sm text-gray-500 mt-2">
                      {category.title}
                    </span>
                  )}
                </div>
              </BlurFade>
            </div>
          ))
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mt-8 mb-12">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1 || isLoading}
          className="px-4 py-2 rounded-md bg-blue-500 text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <span className="text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages || isLoading}
          className="px-4 py-2 rounded-md bg-blue-500 text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </section>
  );
} 
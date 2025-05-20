"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { BlurFade } from "@/components/magicui/blur-fade";
import { urlFor } from "@/sanity/lib/image";
import { SanityTypes } from "@/@types";

interface AutomationGridProps {
  automations: SanityTypes.Automation[];
  categories: SanityTypes.AutomationCategory[];
  currentPage: number;
  totalPages: number;
  selectedCategory?: string;
}

export default function AutomationGrid({ 
  automations = [], 
  categories = [],
  currentPage = 1, 
  totalPages = 1,
  selectedCategory
}: AutomationGridProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCategoryClick = (categoryId: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (categoryId === 'all') {
      params.delete('category');
    } else {
      params.set('category', categoryId);
    }
    params.set('page', '1'); // Reset to first page when changing category
    router.push(`/automations?${params.toString()}`);
  };

  // Add defensive check for automations
  if (!Array.isArray(automations)) {
    console.error('Automations is not an array:', automations);
    return null;
  }

  return (
    <>
      {/* Category Tags */}
      <div className="flex flex-wrap gap-4 justify-center my-8">
        <button
          key="all"
          onClick={() => handleCategoryClick('all')}
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
        {automations.map((automation, index) => {
          if (!automation || !automation.image) {
            console.error('Invalid automation data:', automation);
            return null;
          }

          const { image, title, description, slug } = automation;
          
          return (
            <div key={automation._id || index} className="group w-full">
              <BlurFade
                key={title}
                delay={0.1 + index * 0.05}
                inView
                className="rounded-lg p-4 border border-gray-200 transition-all duration-200 bg-white hover:shadow-[2px_2px_rgba(0,0,0),4px_4px_rgba(0,0,0),6px_6px_rgba(0,0,0),8px_8px_rgba(0,0,0),10px_10px_0px_0px_rgba(0,0,0)] h-full flex flex-col"
              >
                <div className="flex flex-col h-full">
                  <Image
                    height={300}
                    width={500}
                    className="h-[200px] w-full object-cover rounded-lg transition-all duration-200"
                    src={urlFor(image).url()}
                    alt={title || 'Automation image'}
                  />
                  <Link href={`/automations/${slug}`}>
                    <h3 className="text-blue-500 text-lg md:text-2xl font-extrabold pt-4 hover:underline">
                      {title}
                    </h3>
                  </Link>
                  <p className="pt-2 flex-grow">{description}</p>
                  {automation.category && (
                    <span className="text-sm text-gray-500 mt-2">
                      {automation.category.title}
                    </span>
                  )}
                </div>
              </BlurFade>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-8 mb-12">
          {currentPage > 1 && (
            <Link
              href={`/automations?page=${currentPage - 1}${selectedCategory ? `&category=${selectedCategory}` : ''}`}
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
            >
              Previous
            </Link>
          )}
          <span className="text-gray-600">
            Page {currentPage} of {totalPages}
          </span>
          {currentPage < totalPages && (
            <Link
              href={`/automations?page=${currentPage + 1}${selectedCategory ? `&category=${selectedCategory}` : ''}`}
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
            >
              Next
            </Link>
          )}
        </div>
      )}
    </>
  );
} 
"use server";

import { client } from "@/sanity/lib/client";

export const POSTS_PER_PAGE = 6;

export async function getCategories() {
    const query = `*[_type == "blogCategory"] {
    _id,
    title,
    description
  }`;
    return await client.fetch(query);
}

export async function getPosts(page: number = 1, categoryId?: string) {
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

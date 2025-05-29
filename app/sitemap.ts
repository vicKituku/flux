import { client } from "@/sanity/lib/client";
import { site } from "@/site";
import { MetadataRoute } from "next";

// Fetch all automation categories
async function getAutomationCategories() {
  const query = `*[_type == "automationCategory"] { 
    _id,
    title,
    _updatedAt
  }`;
  return client.fetch(query);
}

// Fetch all automations with their categories
async function getAutomations() {
  const query = `*[_type == "automation"] { 
    "slug": slug.current,
    _updatedAt,
    "category": category->title
  }`;
  return client.fetch(query);
}

// Fetch all blog categories
async function getBlogCategories() {
  const query = `*[_type == "blogCategory"] { 
    _id,
    title,
    _updatedAt
  }`;
  return client.fetch(query);
}

// Fetch all blog posts with their categories
async function getBlogPosts() {
  const query = `*[_type == "post"] { 
    "slug": slug.current,
    _updatedAt,
    "category": category->title
  }`;
  return client.fetch(query);
}

// Generate pagination URLs for a section
function generatePaginationUrls(baseUrl: string, totalItems: number, itemsPerPage: number) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  return Array.from({ length: totalPages }, (_, i) => ({
    url: `${site.url}${baseUrl}${i > 0 ? `?page=${i + 1}` : ''}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily' as const,
    priority: i === 0 ? 0.9 : 0.7,
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    // Fetch all dynamic content
    const [automations, automationCategories, posts, blogCategories] = await Promise.all([
      getAutomations(),
      getAutomationCategories(),
      getBlogPosts(),
      getBlogCategories(),
    ]);

    // Generate URLs for automation pages
    const automationUrls = automations
      .filter((automation: any) => automation?.slug)
      .map((automation: any) => ({
        url: `${site.url}/automations/${automation.slug}`,
        lastModified: automation._updatedAt || new Date().toISOString(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }));

    // Generate URLs for blog posts
    const postUrls = posts
      .filter((post: any) => post?.slug)
      .map((post: any) => ({
        url: `${site.url}/blog/${post.slug}`,
        lastModified: post._updatedAt || new Date().toISOString(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }));

    // Generate category filter URLs for automations
    const automationCategoryUrls = automationCategories.map((category: any) => ({
      url: `${site.url}/automations?category=${category._id}`,
      lastModified: category._updatedAt || new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }));

    // Generate category filter URLs for blog
    const blogCategoryUrls = blogCategories.map((category: any) => ({
      url: `${site.url}/blog?category=${category._id}`,
      lastModified: category._updatedAt || new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }));

    // Generate pagination URLs
    const ITEMS_PER_PAGE = 6;
    const automationPaginationUrls = generatePaginationUrls('/automations', automations.length, ITEMS_PER_PAGE);
    const blogPaginationUrls = generatePaginationUrls('/blog', posts.length, ITEMS_PER_PAGE);

    // Static URLs with dynamic lastModified dates
    const staticUrls = [
      {
        url: site.url,
        lastModified: new Date().toISOString(),
        changeFrequency: 'daily' as const,
        priority: 1,
      },
      {
        url: `${site.url}/automations`,
        lastModified: automations[0]?._updatedAt || new Date().toISOString(),
        changeFrequency: 'daily' as const,
        priority: 0.9,
      },
      {
        url: `${site.url}/blog`,
        lastModified: posts[0]?._updatedAt || new Date().toISOString(),
        changeFrequency: 'daily' as const,
        priority: 0.9,
      },
      {
        url: `${site.url}/privacy-policy`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 0.3,
      },
      {
        url: `${site.url}/return-policy`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 0.3,
      },
    ];

    // Combine all URLs
    return [
      ...staticUrls,
      ...automationUrls,
      ...postUrls,
      ...automationCategoryUrls,
      ...blogCategoryUrls,
      ...automationPaginationUrls,
      ...blogPaginationUrls,
    ];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    // Return only static URLs if there's an error
    return [
      {
        url: site.url,
        lastModified: new Date().toISOString(),
        changeFrequency: 'daily' as const,
        priority: 1,
      }
    ];
  }
} 
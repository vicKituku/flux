import { client } from "@/sanity/lib/client";
import { site } from "@/site";
import { MetadataRoute } from "next";

async function getAutomations() {
  const query = `*[_type == "automation"] { 
    "slug": slug.current,
    _updatedAt
  }`;
  return client.fetch(query);
}

async function getBlogPosts() {
  const query = `*[_type == "post"] { 
    "slug": slug.current,
    _updatedAt
  }`;
  return client.fetch(query);
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const automations = await getAutomations() || [];
    const posts = await getBlogPosts() || [];

    const automationUrls = automations
      .filter((automation: any) => automation?.slug) // Only include items with valid slugs
      .map((automation: any) => ({
        url: `${site.url}/automations/${automation.slug}`,
        lastModified: automation._updatedAt || new Date().toISOString(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }));

    const postUrls = posts
      .filter((post: any) => post?.slug) // Only include items with valid slugs
      .map((post: any) => ({
        url: `${site.url}/blog/${post.slug}`,
        lastModified: post._updatedAt || new Date().toISOString(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }));

    const staticUrls = [
      {
        url: site.url,
        lastModified: new Date().toISOString(),
        changeFrequency: 'daily' as const,
        priority: 1,
      },
      {
        url: `${site.url}/automations`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'daily' as const,
        priority: 0.9,
      },
      {
        url: `${site.url}/blog`,
        lastModified: new Date().toISOString(),
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

    return [...staticUrls, ...automationUrls, ...postUrls];
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
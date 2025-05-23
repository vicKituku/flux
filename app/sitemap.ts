import { client } from "@/sanity/lib/client";
import { site } from "@/site";
import { MetadataRoute } from "next";

async function getAutomations() {
  const query = `*[_type == "automation"] { slug { current } }`;
  return client.fetch(query);
}

async function getBlogPosts() {
  const query = `*[_type == "post"] { slug { current } }`;
  return client.fetch(query);
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const automations = await getAutomations();
  const posts = await getBlogPosts();

  const automationUrls = automations.map((automation: any) => ({
    url: `${site.url}/automations/${automation.slug.current}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const postUrls = posts.map((post: any) => ({
    url: `${site.url}/blog/${post.slug.current}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const staticUrls = [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${site.url}/automations`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${site.url}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${site.url}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${site.url}/return-policy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ];

  return [...staticUrls, ...automationUrls, ...postUrls];
} 
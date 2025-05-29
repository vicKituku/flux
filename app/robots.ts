import { site } from '@/site';
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/*', '/studio/*', '/admin/*'],
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
} 
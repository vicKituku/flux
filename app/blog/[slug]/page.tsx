import { SanityTypes } from "@/@types";
import ShowcaseNavbar from "@/components/showcase-navbar";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import React from "react";
import Image from "next/image";
import Footer from "@/components/footer";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import { site } from "@/site";
import { Metadata } from "next";
import { BlogPosting, WithContext } from "schema-dts";
import StructuredData from "@/components/StructuredData";
import MarkdownRenderer from "@/app/components/MarkdownRenderer/index";
import { notFound } from "next/navigation";

export const revalidate = 60;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  
  if (!post) {
    return {
      title: 'Not Found',
      description: 'The page you are looking for does not exist.'
    }
  }

  const ogImage = post.image ? urlFor(post.image).url() : `${site.url}/og-default.png`;

  return {
    metadataBase: new URL(site.url),
    title: post.title,
    description: post.description,
    authors: [{ name: post.author?._name || "Victor Kituku", url: "https://www.linkedin.com/in/victor-kituku/" }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post._createdAt,
      authors: [post.author?._name || "Victor Kituku"],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ],
      siteName: site.name,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [ogImage],
      creator: '@victorkituku',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

async function getPost(slug: string): Promise<any> {
  const query = `*[_type == 'post' && slug.current == $slug]{
    _createdAt,
    _id,
    title, 
    description, 
    "content": coalesce(content, ''),
    image, 
    author->
  }[0]`;
  const post = await client.fetch(query, { slug });
  return post;
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const schemaData: WithContext<BlogPosting> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.image ? urlFor(post.image).url() : `${site.url}/og-default.png`,
    author: {
      "@type": "Person",
      name: post.author?._name ?? "Victor Kituku",
      url: "https://www.linkedin.com/in/victor-kituku/",
    },
    datePublished: post._createdAt,
    dateModified: post._updatedAt || post._createdAt,
    publisher: {
      "@type": "Person",
      name: "Victor Kituku",
      url: site.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${site.url}/blog/${slug}`,
    },
  };

  return (
    <>
      <StructuredData data={schemaData} />
      <div className="overflow-clip inset-0 -z-10 h-full w-full bg-[#fafafa] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <ShowcaseNavbar />

        <section className="md:px-0 mt-10 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
          {post.image && (
            <div className="w-full h-96 relative mb-8">
              <Image
                src={urlFor(post.image).url()}
                alt={post.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          )}
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl font-bold mb-4">{post.title}</h2>
            <p className="text-gray-500 mb-6">
              Published on {new Date(post._createdAt).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>

            <article className="prose lg:prose-lg prose-gray max-w-none">
              <MarkdownRenderer content={post.content} />
            </article>
          </div>
          <LetsMakeThingsHappenSection />
        </section>

        <Footer />
      </div>
    </>
  );
}

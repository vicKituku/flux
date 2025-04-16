import ShowcaseNavbar from "@/components/showcase-navbar";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import React from "react";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import Footer from "@/components/footer";
import { Metadata } from "next";
import { site } from "@/site";
import moment from "moment";
import { BlogPosting, WithContext } from "schema-dts";
import StructuredData from "@/components/StructuredData";
export const revalidate = 60;
type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const query = `*[_type == 'automation' && slug.current == $slug]{_id, title, description, image}[0]`;
  const data = await client.fetch(query, { slug: params.slug });
  return {
    applicationName: site.name,
    creator: "Victor Kituku",
    metadataBase: new URL(site.url),
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: urlFor(data.image).url(),
      type: "article",
      locale: "en_GB",
    },
    authors: [{ name: "Victor Kituku" }],
  };
}

async function getAutomation(slug: string): Promise<any> {
  const query = `*[_type == 'automation' && slug.current == $slug]{_createdAt,_id,title, description, body, image}[0]`;
  return await client.fetch(query, { slug });
}
function formatDate(dateString: Date): string {
  return new Date(dateString).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const automation = await getAutomation(slug);
  const schemaData: WithContext<BlogPosting> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: automation.title,
    description: automation.description,
    image: urlFor(automation.image).url() ?? "",
    author: {
      "@type": "Person",
      name: "Victor Kituku",
      url: "https://www.linkedin.com/in/victor-kituku/",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": site.url,
    },
    datePublished: moment(automation._createdAt).format("yyy-mm-dd"),
    publisher: {
      "@type": "Person",
      name: "Victor Kituku",
    },
  };

  return (
    <>
      <StructuredData data={schemaData} />
      <div className="overflow-clip inset-0 -z-10 h-full w-full bg-[#fafafa] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <ShowcaseNavbar />

        <section className="md:px-0 mt-10 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
          {/* Post Image */}
          {automation.image && (
            <div className="w-full h-96 relative mb-8">
              <Image
                src={urlFor(automation.image).url()}
                alt={automation.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          )}
          <div className="md:w-3/5 mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-4">{automation.title}</h2>
            {/* Date Posted */}
            <p className="text-gray-500 mb-6">
              Published on {formatDate(automation._createdAt)}
            </p>

            <article className="prose lg:prose-lg prose-gray max-w-none">
              <PortableText value={automation.body} />
            </article>
          </div>
          <LetsMakeThingsHappenSection />
        </section>

        <Footer />
      </div>
    </>
  );
}

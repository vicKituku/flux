import { SanityTypes } from "@/@types";
import ShowcaseNavbar from "@/components/showcase-navbar";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import React from "react";
import Image from "next/image";
import { PortableText } from "next-sanity";
import Footer from "@/components/footer";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";

async function getPost(slug: string): Promise<any> {
  const query =
    "*[_type == 'post' && slug.current == $slug]{_createdAt,_id,title, description, content, image, author->}[0]";
  return await client.fetch(query, { slug });
}
function formatDate(dateString: Date): string {
  return new Date(dateString).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
export default async function Case({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const post: SanityTypes.Post = await getPost(slug);

  return (
    <div className="overflow-clip inset-0 -z-10 h-full w-full bg-[#fafafa] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <ShowcaseNavbar />

      <section className="md:px-0 mt-10 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        {/* Post Image */}
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
          {/* Date Posted */}
          <p className="text-gray-500 mb-6">
            Published on {formatDate(post._createdAt)}
          </p>

          <article className="prose lg:prose-lg prose-gray max-w-none">
            <PortableText value={post.content} />
          </article>
        </div>
        <LetsMakeThingsHappenSection />
      </section>

      <Footer />
    </div>
  );
}

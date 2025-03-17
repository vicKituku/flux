import { SanityTypes } from "@/@types";
import { BlurFade } from "@/components/magicui/blur-fade";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

async function getPosts() {
  const query = "*[_type == 'post'] | order(_createdAt desc)";
  return await client.fetch(query);
}

export async function ProjectsBlurFadeDemo() {
  const posts: SanityTypes.Post[] = await getPosts();
  return (
    <section>
      <div className="grid md:grid-cols-3 gap-8 mt-10 mb-10 justify-items-center">
        {posts.map(({ image, title, description, slug }, key) => (
          <div key={key}>
            <BlurFade
              key={title}
              delay={0.25 + key * 0.2}
              inView
              className={`rounded-lg p-4`}
            >
              <Link href={`/showcase/${slug.current}`}>
                <Image
                  height={10000}
                  width={10000}
                  className="
                h-5/6 w-full object-cover rounded-lg"
                  src={urlFor(image).url()}
                  alt={title}
                />
                <h3 className=" text-blue-500 text-lg md:text-2xl font-extrabold pt-4">
                  {title}
                </h3>
                <p className="pt-2">{description}</p>
              </Link>
            </BlurFade>
          </div>
        ))}
      </div>
    </section>
  );
}

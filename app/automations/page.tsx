import React from "react";
import Image from "next/image";
import { SanityTypes } from "@/@types";
import { client } from "@/sanity/lib/client";
import ShowcaseNavbar from "@/components/showcase-navbar";
import { BlurFade } from "@/components/magicui/blur-fade";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import Footer from "@/components/footer";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

export const revalidate = 60;

const AUTOMATIONS_PER_PAGE = 6;

interface AutomationResponse {
  automations: {
    _id: string;
    title: string;
    description: string;
    image: SanityTypes.Automation['image'];
    slug: string;
    _createdAt: string;
  }[];
  total: number;
}

async function getAutomations(page: number = 1): Promise<AutomationResponse> {
  const start = (page - 1) * AUTOMATIONS_PER_PAGE;
  const end = start + AUTOMATIONS_PER_PAGE;
  
  const query = `{
    "automations": *[_type == 'automation'] | order(_createdAt desc)[$start...$end]{
      _id,
      title,
      description,
      image,
      "slug": slug.current,
      _createdAt
    },
    "total": count(*[_type == 'automation'])
  }`;
  
  return await client.fetch(query, { start, end });
}

export default async function Automations({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const currentPage = Number(searchParams.page) || 1;
  const { automations, total } = await getAutomations(currentPage);
  const totalPages = Math.ceil(total / AUTOMATIONS_PER_PAGE);

  return (
    <div className="overflow-clip inset-0 -z-10 h-full w-full bg-[#fafafa] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <ShowcaseNavbar />
      <section className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <div className="flex items-center justify-center relative">
          <BlurFade delay={0.25} inView>
            <h2 className="text-3xl pt-20 lg:text-5xl font-semibold max-w-3xl mx-auto md:text-center z-20">
              Automation Templates for Your Business
            </h2>
          </BlurFade>
        </div>
        <section>
          <div className="grid md:grid-cols-3 gap-8 mt-10 mb-10 justify-items-center">
            {automations.map(({ image, title, description, slug }, index: number) => (
              <div key={index} className="group w-full">
                <BlurFade
                  key={title}
                  delay={0.25 + index * 0.2}
                  inView
                  className="rounded-lg p-4 border border-gray-200 transition-all duration-200 bg-white hover:shadow-[2px_2px_rgba(0,0,0),4px_4px_rgba(0,0,0),6px_6px_rgba(0,0,0),8px_8px_rgba(0,0,0),10px_10px_0px_0px_rgba(0,0,0)] h-full flex flex-col"
                >
                  <div className="flex flex-col h-full">
                    <Image
                      height={300}
                      width={500}
                      className="h-[200px] w-full object-cover rounded-lg transition-all duration-200"
                      src={urlFor(image).url()}
                      alt={title}
                    />
                    <Link href={`/automations/${slug}`}>
                      <h3 className="text-blue-500 text-lg md:text-2xl font-extrabold pt-4 hover:underline">
                        {title}
                      </h3>
                    </Link>
                    <p className="pt-2 flex-grow">{description}</p>
                  </div>
                </BlurFade>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-8 mb-12">
              {currentPage > 1 && (
                <Link
                  href={`/automations?page=${currentPage - 1}`}
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
                  href={`/automations?page=${currentPage + 1}`}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
                >
                  Next
                </Link>
              )}
            </div>
          )}
        </section>

        <LetsMakeThingsHappenSection />
      </section>
      <Footer />
    </div>
  );
}

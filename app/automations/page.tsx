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
async function getAutomations() {
  const query = `*[_type == 'automation'] | order(_createdAt desc)`;

  return await client.fetch(query);
}

export default async function Automations() {
  const automations: SanityTypes.Automation[] = await getAutomations();

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
            {automations.map(({ image, title, description, slug }, key) => (
              <div key={key} className="group">
                <BlurFade
                  key={title}
                  delay={0.25 + key * 0.2}
                  inView
                  className={`rounded-lg p-4`}
                >
                  <Link href={`/automations/${slug.current}`}>
                    <Image
                      height={300}
                      width={500}
                      className="
                h-[200px] w-full object-cover rounded-lg group-hover:opacity-80 transition-all"
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

        <LetsMakeThingsHappenSection />
      </section>
      <Footer />
    </div>
  );
}

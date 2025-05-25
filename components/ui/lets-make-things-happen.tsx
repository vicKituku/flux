import React from "react";
import Image from "next/image";
import Link from "next/link";

function LetsMakeThingsHappenSection() {
  return (
    <section
      className="
     my-10 md:py-20  md:mx-auto
    bg-accent rounded-[45px] p-[50px] md:p-[60px] relative"
    >
      <div className="md:pr-[22rem]">
        <p className="text-3xl font-medium">Let&apos;s make things happen</p>

        <p className="my-10 text-xl">
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>

        <Link
          href="/meeting"
          className="py-3.5 
            px-8
            md:px-12
      md:text-lg
      hover:bg-[#abcbff] 
      rounded-[8px]
      border-2 
      border-black 
      dark:border-white 
       bg-[#121212] 
       text-white 
       transition 
       duration-200 
       hover:shadow-[2px_2px_rgba(0,0,0),4px_4px_rgba(0,0,0),6px_6px_rgba(0,0,0),8px_8px_rgba(0,0,0),10px_10px_0px_0px_rgba(0,0,0)] dark:shadow-[2px_2px_rgba(255,255,255),4px_4px_rgba(255,255,255),6px_6px_rgba(255,255,255),8px_8px_rgba(255,255,255),10px_10px_0px_0px_rgba(255,255,255)] "
        >
          Book a Call
        </Link>
      </div>
      <div className="absolute -top-8 right-8 hidden md:block">
        <Image
          src="/images/proposal_illustration.webp"
          alt="proposal illustration"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
}

export default LetsMakeThingsHappenSection;

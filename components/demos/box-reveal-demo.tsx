"use client";

import { BoxReveal } from "@/components/magicui/box-reveal";
import Link from "next/link";

const BoxRevealDemo = () => {
  return (
    <div className="h-full w-full items-center justify-center ml-10 overflow-hidden pt-8 space-y-2">
      <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
        <p className="text-3xl font-semibold">1. Connect</p>
      </BoxReveal>

      <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
        <h2 className="my-2 text-lg text-gray-500">
          <Link href={"/meeting"} className="text-[#3b82f6]">
            Schedule{" "}
          </Link>
          a call and share your vision.
        </h2>
      </BoxReveal>
      <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
        <p className="text-3xl font-semibold">2. Collaborate</p>
      </BoxReveal>

      <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
        <h2 className="my-2 text-lg text-gray-500">
          Define the scope and strategy together.
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
        <p className="text-3xl font-semibold">3. Create</p>
      </BoxReveal>

      <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
        <h2 className="my-2 text-lg text-gray-500">
          Watch your ideas come to life with seamless execution.
        </h2>
      </BoxReveal>
    </div>
  );
};

export default BoxRevealDemo;

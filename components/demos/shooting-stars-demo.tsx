import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";

const features = [
  {
    icon: "/icons/fast.svg",
    title: "Rapid Delivery",
    description:
      "Get your project up and running in just 1-2 weeks. Contact us to learn more.",
  },
  {
    icon: "/icons/design.svg",
    title: "Modern Design & Development",
    description:
      "We craft high-performing, visually stunning websites using the latest technologies.",
  },
  {
    icon: "/icons/scalable.svg",
    title: "Scalable & Future-Proof",
    description:
      "Our solutions grow with your business, ensuring seamless expansion and maintenance.",
  },
  {
    icon: "/icons/team.svg",
    title: "Industry Experts",
    description:
      "Work with a team of skilled professionals dedicated to your success.",
  },
  {
    icon: "/icons/safe.svg",
    title: "Security First",
    description:
      "We follow best practices to protect your data and keep your site secure.",
  },
  {
    icon: "/icons/analytics.svg",
    title: "Smart Analytics",
    description:
      "Gain insights with built-in tracking tools to monitor and optimize performance.",
  },
  {
    icon: "/icons/flexible.svg",
    title: "Dynamic & Customizable",
    description:
      "Our flexible solutions make it easy to manage and scale your digital presence.",
  },
  {
    icon: "/icons/support.svg",
    title: "24/7 Dedicated Support",
    description:
      "Round-the-clock assistance to ensure your website runs smoothly at all times.",
  },
  {
    icon: "/icons/money.svg",
    title: "Cost-Effective Solutions",
    description:
      "Premium services at competitive prices—great value for businesses of all sizes.",
  },
];

export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="mt-20 py-10 md:py-20 rounded-[40px] bg-neutral-900 flex flex-col items-center justify-center relative w-full px-6 md:px-0">
      <h2 className="relative flex-col  z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 via-white to-white flex items-center gap-2 ">
        Our guarantees to you.
        <p className="md:text-center   mx-auto  text-xl md:text-2xl text-gray-200">
          We ensure the highest quality of work, with the fastest delivery
          times.
        </p>
      </h2>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 z-40 xl:w-4/5 2xl:w-[68%] mx-auto ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col p-10 bg-neutral-800 rounded-xl"
          >
            <button
              className="
                     w-16 p-4 
                     animate-shine flex items-center justify-center rounded-md  bg-gradient-to-br  
                        from-neutral-700 to-neutral-800 
                    font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <Image
                src={feature.icon}
                width={10000}
                height={10000}
                alt="icon"
                className="w-8 h-8"
              />
            </button>

            <h3 className="text-xl font-bold mt-4 text-white">
              {feature.title}
            </h3>
            <p className=" text-gray-200">{feature.description}</p>
          </div>
        ))}
      </div>

      <ShootingStars />
      <StarsBackground />
    </div>
  );
}

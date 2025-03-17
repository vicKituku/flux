"use client";
import { AnimatedBeamMultipleOutputDemo } from "@/components/demos/animated-beam-demo";
import { AnimatedShinyTextDemo } from "@/components/demos/animated-shiny-text";
import BoxRevealDemo from "@/components/demos/box-reveal-demo";
import { CoverDemo } from "@/components/demos/cover-demo";
import { ScrollBasedVelocityDemo } from "@/components/demos/scroll-based-velocity-demo";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/demos/shooting-stars-demo";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import { IconStarFilled } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PiCheckBold } from "react-icons/pi";
import { Link as ScrollLink, Element } from "react-scroll";
import { Menu, X } from "lucide-react";

const services = [
  {
    icon: "/images/marketing.svg",
    title: "Marketing Automation",
    description: [
      "📩 Email & SMS Automation",
      "🚀 AI-Powered Funnel Optimization",
      "🔍 Behavior-Based Triggers",
      "📊 Advanced Analytics & Reporting",
      "🎯 Omnichannel Marketing",
    ],
  },
  {
    icon: "/images/no-code.svg",
    title: "No-Code & Low-Code Automation",
    description: [
      "🔗 Connect 1,000+ Apps",
      "🛠️ No-Code & Low-Code Solutions",
      "⏳ Automate Repetitive Tasks",
      "📡 Webhook & API Integrations",
      "📊 Data Sync & Processing",
    ],
  },
  {
    icon: "/images/chatbot.svg",
    title: "AI Chatbots & Virtual Assistants",
    description: [
      "🤖 AI-Powered Lead Capture",
      "💬 24/7 Customer Support",
      "📞 Appointment Booking Bots",
      "🏆 Custom AI Assistants",
      "🔄 Seamless CRM Integration",
    ],
  },
];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="overflow-clip inset-0 -z-10 h-full w-full bg-[#fafafa] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <Element name="top" className="sticky top-0 z-50  bg-white shadow-md  ">
        <div
          className="xl:w-4/5 
2xl:w-[68%] mx-auto flex items-center justify-between py-4 px-6 md:px-8"
        >
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo/fluxauto.png"
              alt="FluxAuto Logo"
              width={140}
              height={40}
              className="w-32"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-x-8 items-center text-gray-700 font-medium text-lg">
            <Link href="/showcase" className="hover:text-blue-500">
              Showcase
            </Link>
            <ScrollLink
              to="services"
              smooth={true}
              className="hover:text-blue-500 cursor-pointer"
            >
              Services
            </ScrollLink>
            <ScrollLink
              to="process"
              smooth={true}
              className="hover:text-blue-500 cursor-pointer"
            >
              Process
            </ScrollLink>
            <ScrollLink
              to="guarantees"
              smooth={true}
              className="hover:text-blue-500 cursor-pointer"
            >
              Guarantees
            </ScrollLink>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden py-4" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Call & Book Button (Desktop) */}
          <div className=" hidden md:flex items-center gap-x-4">
            {/* <a href="tel:+254716694890">
              <button className="px-4 py-2 rounded-md flex items-center gap-x-3 border border-gray-300 hover:bg-gray-200">
                +254 716 694 890
              </button>
            </a> */}
            <Link
              href={"/meeting"}
              className="py-3 px-6
      text-lg
      hover:bg-[#abcbff] 
      rounded-[6px]
      border-2 
      border-black 
      dark:border-white 
           bg-[#121212] 
       text-white 
       transition 
       duration-200 
       hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
            >
              Book a call
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center gap-4 py-4 bg-white border-t shadow-lg">
            <Link
              href="/showcase"
              className="hover:text-blue-500"
              onClick={() => setIsOpen(false)}
            >
              Showcase
            </Link>
            <ScrollLink
              to="services"
              smooth={true}
              className="hover:text-blue-500 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Services
            </ScrollLink>
            <ScrollLink
              to="process"
              smooth={true}
              className="hover:text-blue-500 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Process
            </ScrollLink>
            <ScrollLink
              to="guarantees"
              smooth={true}
              className="hover:text-blue-500 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Guarantees
            </ScrollLink>
            <a
              href="tel:+254716694890"
              className="text-gray-700 font-medium"
              onClick={() => setIsOpen(false)}
            >
              +254 716 694 890
            </a>
            <Link
              href="/meeting"
              className="px-4 py-2 bg-black text-white rounded-sm border border-black dark:border-white transition duration-200 text-lg hover:bg-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Book a Call
            </Link>
          </div>
        )}
      </Element>
      <main className="md:pb-10">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-14">
          <AnimatedShinyTextDemo />

          <h1>
            <CoverDemo />
          </h1>
          <p className="md:text-center text-xl md:text-2xl my-6 md:my-10 md:w-4/5 mx-auto text-gray-500">
            Book a call today and see how AI can transform your business—fast
            and effortlessly.
          </p>
          <div
            className="
                 flex 
                  md:justify-center 
                  items-center 
                  gap-x-4
                   "
          >
            <Link
              href="/meeting"
              className="py-3 
            px-8
            md:px-16
      md:text-xl
      hover:bg-[#abcbff] 
      rounded-[6px]
      border-2 
      border-black 
      dark:border-white 
       bg-[#121212] 
       text-white 
       transition 
       duration-200 
       hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
            >
              Book a Call
            </Link>
            <Link
              href={"/showcase"}
              className="
              bg-white
   py-3 
   px-10
   md:px-16
      md:text-xl
        border-4
        border-black
        rounded-[6px]
        hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
            >
              Showcase
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-left md:justify-items-center md:mx-auto mt-10 md:mt-16">
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                AI-Powered Workflows
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Smart Systems
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Automated Growth
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Intelligent Strategy
              </p>
            </BoxReveal>
          </div>
          <div className="md:flex items-center justify-between gap-y-4 my-10 gap-x-28 mx-auto">
            <div className="md:w-2/5">
              <h1 className="text-2xl font-medium text-gray-600 w-4/5">
                Trusted by fast moving brands world wide
              </h1>
              <div className="flex my-6 gap-x-5 w-full">
                <div>
                  <h1 className="text-blue-500 text-3xl md:text-5xl">
                    <NumberTicker value={50} /> +{" "}
                    <p className="text-gray-500 text-sm md:text-md">
                      Happy Customers
                    </p>
                  </h1>
                </div>
                <div className="w-px bg-gray-300 self-stretch"></div>
                <div className="flex-1 min-w-0 whitespace-nowrap overflow-hidden">
                  <h1 className="text-blue-500 text-3xl md:text-5xl">
                    <NumberTicker value={100} /> +{" "}
                    <p className="text-gray-500 text-sm md:text-md">
                      Automated systems
                    </p>
                  </h1>
                </div>
              </div>
            </div>
            <section className="overflow-hidden mt-10 md:w-4/5">
              <InfiniteMovingLogos
                speed="normal"
                direction="right"
                items={[
                  {
                    logo: "/logos/theintimateinstinct.jpeg",
                    name: "The intimate instinct",
                    height: 10,
                  },
                  { logo: "/logo/fluxauto.png", name: "Logo2", height: 160 },
                ]}
              />
            </section>
          </div>
        </div>
      </main>
      <Element name="services">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
          <h1 className="text-3xl md:text-5xl md:text-center font-medium">
            Built from the ground up for efficiency
            <span className="text-[#5046e6]">.</span>
          </h1>
          <p className="md:text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
            Custom AI and automation solutions designed to streamline your
            business and maximize productivity
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col justify-between h-full space-y-4 text-center bg-gray-100 p-4 cursor-pointer hover:scale-105 transition-transform rounded-md"
              >
                <Image
                  src={service.icon}
                  width={1000}
                  height={1000}
                  className="object-contain bg-gray-100 p-4 w-full h-40 rounded-md"
                  alt={"image"}
                />
                <h1 className="text-xl font-medium">{service.title}</h1>
                <ul className="text-gray-500 space-y-2">
                  {service.description.map((desc, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Element>
      <section className="py-20">
        <ScrollBasedVelocityDemo />
      </section>
      <Element name="process">
        <main className="md:px-0 mx-6 md:mx-auto">
          <h1 className="text-3xl md:text-5xl md:text-center font-medium flex items-center gap-x-2 mx-auto justify-center">
            Our{" "}
            <span className="text-blue-500 flex gap-x-1 items-center">
              {" "}
              <Image
                src={"/icons/squiggle.svg"}
                width={10000}
                height={10000}
                className="w-6"
                alt="image"
              />
              Creative
              <Image
                src={"/icons/star.svg"}
                width={10000}
                height={10000}
                className="w-6 mb-8"
                alt="image"
              />
            </span>{" "}
            Process
          </h1>
          <p className="text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
            Our services are designed to streamline your business, boost
            visibility, and drive growth effortlessly.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-1/2 mx-auto">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <AnimatedBeamMultipleOutputDemo />
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 md:ml-0">
              <BoxRevealDemo />
            </div>
          </div>
        </main>
      </Element>
      <section>
        <main className="md:flex items-center justify-center space-y-6 md:space-y-0 md:gap-x-20 xl:w-4/5 2xl:w-[68%] mx-auto px-6 md:px-0">
          <Image
            src={"/images/business-owner.jpg"}
            width={10000}
            height={10000}
            className=" md:w-1/3 rounded-md"
            alt="image"
          />
          <div className="flex flex-col gap-y-5 md:w-1/2">
            <h1 className="text-lg md:text-2xl text-gray-500">
              &quot;We&apos;ve been working with Flux Auto for over 7 months and
              they&apos;ve been amazing to work with. They&apos;ve helped us
              grow our business and we couldn&apos;t be happier with the
              results. &quot;
            </h1>
            <div className="flex items-center gap-x-1">
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
            </div>

            <span className="text-xl font-medium">
              Jordan, Brisson <br />
              CEO, Atlas Massage
            </span>
          </div>
        </main>
      </section>
      <Element name="guarantees">
        <ShootingStarsAndStarsBackgroundDemo />
      </Element>
      <section className="my-10 md:py-20 xl:w-4/5 2xl:w-[68%] mx-auto">
        <LetsMakeThingsHappenSection />
      </section>
      <footer className="bg-[#fafafa] py-10  px-6 md:px-0 md:mx-auto border-t">
        <div className="flex flex-col  justify-between gap-y-3 xl:w-4/5 2xl:w-[68%] mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium ">
            <Image
              src={"/logo/fluxauto.png"}
              width={10000}
              height={10000}
              className="w-40"
              alt="image"
            />{" "}
          </h1>
          <p className="text-left  text-xl  text-gray-500">
            <a href="tel:+254716694890">+254716694890</a>
          </p>
          <p className="text-left  text-xl  text-gray-500">
            victorkituku@gmail.com
          </p>
        </div>

        <div className="flex md:justify-center gap-x-4 mt-10">
          © 2025 Bird. All Rights Reserved.
          <Link href="/" className="text-blue-500">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
}

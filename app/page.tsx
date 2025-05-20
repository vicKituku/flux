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
import { useState, useEffect } from "react";
import { PiCheckBold } from "react-icons/pi";
import { Link as ScrollLink, Element } from "react-scroll";
import { Menu, X } from "lucide-react";
import { SiN8N, SiMake, SiZapier, SiOpenai, SiAirtable, SiGooglesheets, SiClaude } from "react-icons/si";
import { FaRobot } from "react-icons/fa";
import { BsRobot } from "react-icons/bs";
import { TbBrandVscode } from "react-icons/tb";
import Footer from "@/components/footer";
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="overflow-clip inset-0 -z-10 h-full w-full bg-[#fafafa] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <Element name="top" className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm" 
          : "bg-white/50 backdrop-blur-sm"
      }`}>
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 transition-transform hover:scale-105">
              <Image
                src="/logo/fluxauto.png"
                alt="Next Automation Logo"
                width={140}
                height={40}
                className="w-32 h-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-10">
              <ScrollLink
                to="services"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="text-base font-medium transition-all duration-200 text-gray-700 hover:text-blue-600 cursor-pointer"
              >
                Services
              </ScrollLink>
              <Link 
                href="/automations" 
                className="text-base font-medium transition-all duration-200 text-gray-700 hover:text-blue-600"
              >
                Automations
              </Link>
              <Link 
                href="/blog" 
                className="text-base font-medium transition-all duration-200 text-gray-700 hover:text-blue-600"
              >
                Blog
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <Link
                href="/meeting"
                className="inline-flex items-center justify-center px-6 py-2.5 text-base font-medium text-white bg-black rounded-lg border-2 border-black hover:bg-blue-600 hover:border-blue-600 hover:scale-105 transition-all duration-300 whitespace-nowrap shadow-sm hover:shadow-md"
              >
                Book a call
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsOpen(false)}
        >
          <div 
            className={`fixed inset-y-0 right-0 w-full max-w-sm bg-white/100 shadow-xl transform transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={e => e.stopPropagation()}
          >
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between px-4 pt-4">
                <div className="flex items-center">
                  <Image
                    src="/logo/fluxauto.png"
                    alt="FluxAuto Logo"
                    width={120}
                    height={35}
                    className="w-28 h-auto"
                  />
                </div>
                <button
                  className="p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="px-4 pt-6 pb-8 space-y-6 bg-white">
                <ScrollLink
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="block py-3 text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </ScrollLink>
                <Link
                  href="/automations"
                  className="block py-3 text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Automations
                </Link>
                <Link
                  href="/blog"
                  className="block py-3 text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
                <div className="pt-6">
                  <Link
                    href="/meeting"
                    className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-black rounded-lg border-2 border-black hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 shadow-sm hover:shadow-md"
                    onClick={() => setIsOpen(false)}
                  >
                    Book a Call
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
      <main className="md:pb-20">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-20">
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
                  md:gap-x-6
                   "
          >
            <Link
              href="/meeting"
              className="
                inline-flex 
                items-center 
                justify-center 
                px-5
                md:px-8 
                py-3 
                text-base
                md:text-lg
                font-medium 
                text-white 
                bg-black 
                rounded-lg 
                border-2 
                border-black 
                hover:bg-blue-600 
                hover:border-blue-600 
                hover:scale-105 
                transition-all 
                duration-300 
                whitespace-nowrap 
                shadow-sm 
                hover:shadow-md
                min-w-[140px]
                md:min-w-[160px]
              "
            >
              Book a Call
            </Link>
            <Link
              href={"/automations"}
              className="
                inline-flex 
                items-center 
                justify-center 
                px-5
                md:px-8 
                py-3 
                text-base
                md:text-lg
                font-medium 
                bg-white
                text-black
                rounded-lg 
                border-2 
                border-black 
                hover:bg-gray-50
                hover:scale-105 
                transition-all 
                duration-300 
                shadow-sm 
                hover:shadow-md
                min-w-[140px]
                md:min-w-[160px]
              "
            >
              Automations
            </Link>
          </div>
        
          <div className="md:flex items-center justify-between gap-y-4 my-20 gap-x-28 mx-auto">
            <div className="md:w-2/5">
              <h1 className="text-2xl font-medium text-gray-600 w-4/5">
                Tools and platforms we work with
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
                    icon: <SiN8N className="w-10 h-10 text-blue-600" />,
                    name: "n8n",
                    height: 40 
                  },
                  { 
                    icon: <SiMake className="w-10 h-10 text-blue-600" />,
                    name: "Make.com",
                    height: 40 
                  },
                  { 
                    icon: <Image src="/logos/ghl.png" alt="Go High Level" width={40} height={40} className="w-10 h-10 object-contain" />,
                    name: "Go High Level",
                    height: 40 
                  },
                  { 
                    icon: <SiZapier className="w-10 h-10 text-blue-600" />,
                    name: "Zapier",
                    height: 40 
                  },
                  { 
                    icon: <Image src="/logos/vapi.png" alt="Vapi" width={40} height={40} className="w-10 h-10 object-contain" />,
                    name: "Vapi",
                    height: 40 
                  },
                  { 
                    icon: <SiOpenai className="w-10 h-10 text-blue-600" />,
                    name: "OpenAI",
                    height: 40 
                  },
                  { 
                    icon: <SiAirtable className="w-10 h-10 text-blue-600" />,
                    name: "Airtable",
                    height: 40 
                  },
                  { 
                    icon: <SiClaude className="w-10 h-10 text-blue-600" />,
                    name: "Claude",
                    height: 40 
                  },
                  { 
                    icon: <SiGooglesheets className="w-10 h-10 text-blue-600" />,
                    name: "Google Sheets",
                    height: 40 
                  },
                ]}
              />
            </section>
          </div>
        </div>
      </main>
      <Element name="services-separator">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mt-0 mb-4"></div>
      </Element>
      <Element name="services" className="scroll-mt-32">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto pt-4">
          <h1 className="text-3xl md:text-5xl md:text-center font-medium">
            Services
          </h1>
          <p className="md:text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
            Custom AI and automation solutions designed to streamline your
            business and maximize productivity
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Service Icon */}
                <div className="mb-6">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                  {service.title}
                </h3>

                {/* Service Features */}
                <ul className="space-y-3">
                  {service.description.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="flex items-start gap-2 text-gray-600"
                    >
                      <span className="text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover Effect Gradient Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </Element>
      <section className="py-32">
        <ScrollBasedVelocityDemo />
      </section>
      <Element name="process">
        <main className="md:px-0 mx-6 md:mx-auto py-32">
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
      <section className="py-32">
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
              &quot;We&apos;ve been working with Next Automations for over 7 months and
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
      <section className="my-20 md:py-32 xl:w-4/5 2xl:w-[68%] mx-auto">
        <LetsMakeThingsHappenSection />
      </section>
      <Footer/>
    </div>
  );
}

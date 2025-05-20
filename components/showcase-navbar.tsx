"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: "/images/marketing.svg",
    title: "Marketing Automation",
  },
  {
    icon: "/images/no-code.svg",
    title: "No-Code & Low-Code Automation",
  },
  {
    icon: "/images/chatbot.svg",
    title: "AI Chatbots & Virtual Assistants",
  },
];

const ShowcaseNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sticky top-0 z-50 bg-white shadow-md  mx-auto">
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
          <Link href={"/"} className="hover:text-blue-500 cursor-pointer">
            Services
          </Link>
          <Link href="/automations" className="hover:text-blue-500">
            Automations
          </Link>
          <Link href="/blog" className="hover:text-blue-500">
            Blog
          </Link>
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
            className="py-3.5 px-8
          text-lg
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
            Book a call
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 py-6 bg-white border-t shadow-lg animate-in slide-in-from-top duration-300">
          <Link
            href="/"
            className="text-lg font-medium hover:text-blue-500 cursor-pointer transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/automations"
            className="text-lg font-medium hover:text-blue-500 transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Automations
          </Link>
          <Link
            href="/blog"
            className="text-lg font-medium hover:text-blue-500 transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>

          <div className="w-full px-6 pt-4 border-t border-gray-100">
            <div className="grid grid-cols-1 gap-4 mb-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <Image
                    src={service.icon}
                    width={24}
                    height={24}
                    alt={service.title}
                    className="w-6 h-6"
                  />
                  <span className="text-gray-700 font-medium">{service.title}</span>
                </div>
              ))}
            </div>
            <Link
              href="/meeting"
              className="w-full py-3.5 px-8 bg-black text-white rounded-[8px] border-2 border-black dark:border-white transition duration-200 text-lg hover:bg-gray-800 hover:shadow-[2px_2px_rgba(0,0,0),4px_4px_rgba(0,0,0),6px_6px_rgba(0,0,0),8px_8px_rgba(0,0,0),10px_10px_0px_0px_rgba(0,0,0)] dark:shadow-[2px_2px_rgba(255,255,255),4px_4px_rgba(255,255,255),6px_6px_rgba(255,255,255),8px_8px_rgba(255,255,255),10px_10px_0px_0px_rgba(255,255,255)] flex items-center justify-center"
              onClick={() => setIsOpen(false)}
            >
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowcaseNavbar;

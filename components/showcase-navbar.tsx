"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

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
            href="/"
            className="hover:text-blue-500 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/automations"
            className="hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Automations
          </Link>
          <Link
            href="/blog"
            className="hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>

          <Link
            href="/meeting"
            className="px-4 py-2 bg-black text-white rounded-sm border border-black dark:border-white transition duration-200 text-lg hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
          >
            Book a Call
          </Link>
        </div>
      )}
    </div>
  );
};

export default ShowcaseNavbar;

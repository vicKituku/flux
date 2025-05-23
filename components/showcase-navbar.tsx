"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Link as ScrollLink } from "react-scroll";

const ShowcaseNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/80 backdrop-blur-md shadow-sm" 
        : "bg-white/50 backdrop-blur-sm"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
        {/* Logo */}
          <Link href="/" className="flex-shrink-0 transition-transform hover:scale-105">
          <Image
            src="/logo/fluxauto.png"
            alt="FluxAuto Logo"
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
              className={`text-base font-medium transition-all duration-200 ${
                isActive("/automations")
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
            Automations
          </Link>
            <Link 
              href="/blog" 
              className={`text-base font-medium transition-all duration-200 ${
                isActive("/blog")
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
            Blog
          </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
          <Link
              href="/meeting"
              className="inline-flex items-center justify-center px-6 py-2.5 text-base font-medium text-white bg-black rounded-lg border-2 border-black hover:bg-blue-600 hover:border-blue-600 hover:scale-105 transition-all duration-300 whitespace-nowrap shadow-sm hover:shadow-md"
          >
            Book a call
          </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
          </button>
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
                className={`block py-3 text-lg font-medium transition-colors duration-200 ${
                  isActive("/automations")
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
            onClick={() => setIsOpen(false)}
          >
            Automations
          </Link>
          <Link
            href="/blog"
                className={`block py-3 text-lg font-medium transition-colors duration-200 ${
                  isActive("/blog")
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
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
    </div>
  );
};

export default ShowcaseNavbar;

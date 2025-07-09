import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-[#fafafa] border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/">
              <Image
                src="/logo/fluxauto.png"
                width={160}
                height={40}
                className="w-32"
                alt="Flux Auto Logo"
              />
            </Link>
            <p className="text-sm text-gray-500 max-w-xs">
              Empowering businesses with intelligent automation solutions that drive growth and efficiency.
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
                <FaTwitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
                <FaLinkedin size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-sm text-gray-500 hover:text-gray-700">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/automations" className="text-sm text-gray-500 hover:text-gray-700">
                  Automations
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-700">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+254705044913" className="text-sm text-gray-500 hover:text-gray-700">
                  +254 705 044 913
                </a>
              </li>
              <li>
                <a href="mailto:dancun.n@nextautomations.com" className="text-sm text-gray-500 hover:text-gray-700">
                  dancun.n@nextautomations.com
                </a>
              </li>
              <li>
                <Link href="/meeting" className="text-sm text-gray-500 hover:text-gray-700">
                  Schedule a Meeting
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy-policy" className="text-sm text-gray-500 hover:text-gray-700">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/return-policy" className="text-sm text-gray-500 hover:text-gray-700">
                  Return Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-center text-gray-500">
              © {currentYear} Next Automations. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="text-sm text-gray-500 hover:text-gray-700">
                Terms
              </Link>
              <Link href="/privacy-policy" className="text-sm text-gray-500 hover:text-gray-700">
                Privacy
              </Link>
              <Link href="/return-policy" className="text-sm text-gray-500 hover:text-gray-700">
                Returns
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

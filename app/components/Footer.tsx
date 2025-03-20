import Link from "next/link";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 - Branding */}
        <div>
          <h2 className="text-2xl font-bold">isladogsoftware</h2>
          <p className="mt-4 text-gray-400">
            Crafting digital experiences that make a difference.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/about" className="text-gray-400 hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-gray-400 hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-400 hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 - Services */}
        <div>
          <h3 className="text-lg font-semibold">Services</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/services#web-development" className="text-gray-400 hover:text-white">
                Web Development
              </Link>
            </li>
            <li>
              <Link href="/services#uiux" className="text-gray-400 hover:text-white">
                UI/UX Design
              </Link>
            </li>
            <li>
              <Link href="/services#mobile-apps" className="text-gray-400 hover:text-white">
                Mobile Apps
              </Link>
            </li>
            <li>
              <Link href="/services#data-analytics" className="text-gray-400 hover:text-white">
                Data Analytics
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4 - Connect */}
        <div>
          <h3 className="text-lg font-semibold">Connect</h3>
          <div className="mt-4 flex space-x-4">
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="text-gray-400 hover:text-white text-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/mark-workman-02a944120/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-gray-400 hover:text-white text-2xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Full-width line */}
      <div className="border-t border-gray-700 mt-10"></div>

      {/* Copyright section */}
      <div className="text-center text-gray-400 text-sm mt-4">
        &copy; 2025 isladogsoftware. All rights reserved.
      </div>
    </footer>
  );
}

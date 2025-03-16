import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "./components/Footer";
import { FaLaptopCode, FaPalette, FaMobileAlt, FaChartBar } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="px-10 py-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            Turning your ideas into <br /> a digital reality
          </h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            As a company, we are dedicated to building great-looking and responsive websites and applications for your needs.
          </p>
          <div className="mt-6 flex space-x-4">
            <Link
              href="/get-started"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Get started
            </Link>
            <Link
              href="/services"
              className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
            >
              Services
            </Link>
          </div>
        </div>

        {/* Services Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Website Design */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center space-x-4">
            <FaLaptopCode className="text-blue-600 text-4xl" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Website Design</h3>
              <p className="text-gray-700 dark:text-gray-300">Custom websites built with modern technologies.</p>
            </div>
          </div>

          {/* UI/UX Design */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center space-x-4">
            <FaPalette className="text-green-600 text-4xl" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">UI/UX Design</h3>
              <p className="text-gray-700 dark:text-gray-300">Beautiful and intuitive interfaces.</p>
            </div>
          </div>

          {/* Mobile Apps */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center space-x-4">
            <FaMobileAlt className="text-purple-600 text-4xl" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Mobile Apps</h3>
              <p className="text-gray-700 dark:text-gray-300">Native and cross-platform mobile applications.</p>
            </div>
          </div>

          {/* Data Analytics */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center space-x-4">
            <FaChartBar className="text-orange-600 text-4xl" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Data Analytics</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Data analysis and cleaning with dashboards built using PowerBI.
              </p>
            </div>
          </div>
        </div>

        {/* Call-to-Action Box */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Ready to start your project?</h2>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            Let's work together to create something amazing. Contact us today to discuss your project and get a free consultation.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="px-6 py-3 bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 rounded-lg hover:opacity-80 transition"
            >
              Contact us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

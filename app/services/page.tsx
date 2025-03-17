import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col">
      <Header />
      <main className="flex-1 px-6 py-28"> {/* Increased padding to move text down */}
        <section className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            We offer a comprehensive range of digital services to help your business succeed.
            From web development to data analytics, we've got all your digital needs covered.
          </p>
        </section>
        
        {/* Services Boxes */}
        <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Web Development Box */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Web Development</h2>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Custom web applications built with modern frameworks and best practices. We create scalable solutions that grow with your business.
            </p>
            <ul className="mt-4 text-gray-700 dark:text-gray-300 font-bold list-disc list-inside">
              <li>Custom Web Applications</li>
              <li>Frontend Development</li>
              <li>Backend Development</li>
              <li>API Integration</li>
            </ul>
            <Link href="/contact">
              <button className="mt-4 px-6 py-3 bg-gray-900 text-white dark:bg-white dark:text-gray-900 rounded-lg font-bold text-lg hover:bg-gray-700 dark:hover:bg-gray-300 transition">
                Get Started
              </button>
            </Link>
          </div>
          
          {/* UI/UX Design Box */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">UI/UX Design</h2>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              User-centered design that creates intuitive and engaging digital experiences. We focus on both aesthetics and functionality.
            </p>
            <ul className="mt-4 text-gray-700 dark:text-gray-300 font-bold list-disc list-inside">
              <li>User Interface Design</li>
              <li>User Experience Design</li>
              <li>Wireframing & Prototyping</li>
              <li>Design Systems</li>
            </ul>
            <Link href="/contact">
              <button className="mt-4 px-6 py-3 bg-gray-900 text-white dark:bg-white dark:text-gray-900 rounded-lg font-bold text-lg hover:bg-gray-700 dark:hover:bg-gray-300 transition">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Development Box */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Mobile Development</h2>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Native and cross-platform mobile applications that provide seamless experiences across all devices.
            </p>
            <ul className="mt-4 text-gray-700 dark:text-gray-300 font-bold list-disc list-inside">
              <li>iOS Development</li>
              <li>Android Development</li>
              <li>Cross-platform Apps</li>
              <li>Progressive Web Apps</li>
            </ul>
            <Link href="/contact">
              <button className="mt-4 px-6 py-3 bg-gray-900 text-white dark:bg-white dark:text-gray-900 rounded-lg font-bold text-lg hover:bg-gray-700 dark:hover:bg-gray-300 transition">
                Get Started
              </button>
            </Link>
          </div>

          {/* Digital Analytics Box */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Digital Analytics</h2>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Data-driven insights to help you understand your users and improve your digital presence.
            </p>
            <ul className="mt-4 text-gray-700 dark:text-gray-300 font-bold list-disc list-inside">
              <li>User Behaviour Tracking</li>
              <li>Conversion Tracking</li>
              <li>Performance Monitoring</li>
              <li>Custom Reporting</li>
            </ul>
            <Link href="/contact">
              <button className="mt-4 px-6 py-3 bg-gray-900 text-white dark:bg-white dark:text-gray-900 rounded-lg font-bold text-lg hover:bg-gray-700 dark:hover:bg-gray-300 transition">
                Get Started
              </button>
            </Link>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="mt-16 bg-gray-200 dark:bg-gray-800 py-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Ready to transform your digital presence?</h2>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            Let's discuss how we can help your business grow with our professional web development services.
          </p>
          <Link href="/contact">
            <button className="mt-6 px-8 py-4 bg-gray-900 text-white dark:bg-white dark:text-gray-900 rounded-lg font-bold text-lg hover:bg-gray-700 dark:hover:bg-gray-300 transition">
              Schedule a Consultation
            </button>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;

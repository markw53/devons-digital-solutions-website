import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col">
      <Header />
      <main className="flex-1 px-6 py-28"> {/* Increased padding to move text down */}
        <section className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            Ready to start your next project? We're here to help bring your vision to life.
          </p>
        </section>
        <section className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 dark:text-gray-300">Your Name</label>
              <input type="text" className="w-full mt-2 p-3 border rounded-md bg-gray-100 dark:bg-gray-700 dark:text-white" placeholder="Enter your name" />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300">Email</label>
              <input type="email" className="w-full mt-2 p-3 border rounded-md bg-gray-100 dark:bg-gray-700 dark:text-white" placeholder="Enter your email" />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300">Service Required</label>
              <select className="w-full mt-2 p-3 border rounded-md bg-gray-100 dark:bg-gray-700 dark:text-white">
                <option>Web Development</option>
                <option>UI/UX Design</option>
                <option>Mobile Development</option>
                <option>Data Analytics</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300">Budget Range</label>
              <select className="w-full mt-2 p-3 border rounded-md bg-gray-100 dark:bg-gray-700 dark:text-white">
                <option>Under £1,000</option>
                <option>£1,001 - £5,000</option>
                <option>£5,001 - £10,000</option>
                <option>£10,001 +</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300">Message</label>
              <textarea className="w-full mt-2 p-3 border rounded-md bg-gray-100 dark:bg-gray-700 dark:text-white" rows={5} placeholder="Enter your message"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md">
                Send Message
              </button>
            </div>
          </form>
        </section>
        <section className="max-w-4xl mx-auto bg-gray-200 dark:bg-gray-800 p-8 rounded-lg shadow-md mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">FAQ</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">How long does a typical project take?</h3>
              <p className="text-gray-700 dark:text-gray-300">Project timelines vary based on complexity. A simple website might take 4-6 weeks, while larger applications can take 3-6 months.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Do you offer maintenance services?</h3>
              <p className="text-gray-700 dark:text-gray-300">Yes, we offer ongoing maintenance and support packages to keep your website secure and up-to-date.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">What is your payment structure?</h3>
              <p className="text-gray-700 dark:text-gray-300">We typically require a 50% deposit to begin work, with the remaining balance due upon project completion.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

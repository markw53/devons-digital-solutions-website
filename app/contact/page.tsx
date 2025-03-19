"use client";

import React, { useState } from "react";
import { db } from "@/firebaseConfig"; 
import { collection, addDoc } from "firebase/firestore";// Import Firebase functions
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const Contact = () => {
  // State to store form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Web Development",
    budget: "Under £1,000",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  interface FormData {
    name: string;
    email: string;
    service: string;
    budget: string;
    message: string;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");
  
    try {
      console.log("Submitting form data:", formData);
      await addDoc(collection(db, "contactMessages"), formData);
      setSuccessMessage("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        service: "Web Development",
        budget: "Under £1,000",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      setSuccessMessage("Error sending message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col">
      <Header />
      <main className="flex-1 px-6 py-28">
        <section className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Get in Touch</h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            Ready to start your next project? We're here to help bring your vision to life.
          </p>
        </section>

        <section className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 dark:text-gray-300">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-md bg-gray-100 dark:bg-gray-700 dark:text-white"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-md bg-gray-100 dark:bg-gray-700 dark:text-white"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300">Service Required</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-md bg-gray-100 dark:bg-gray-700 dark:text-white"
              >
                <option>Web Development</option>
                <option>UI/UX Design</option>
                <option>Mobile Development</option>
                <option>Data Analytics</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300">Budget Range</label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-md bg-gray-100 dark:bg-gray-700 dark:text-white"
              >
                <option>Under £1,000</option>
                <option>£1,001 - £5,000</option>
                <option>£5,001 - £10,000</option>
                <option>£10,001 +</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-md bg-gray-100 dark:bg-gray-700 dark:text-white"
                rows={5}
                placeholder="Enter your message"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>

            {successMessage && <p className="text-green-600 text-center mt-4">{successMessage}</p>}
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;

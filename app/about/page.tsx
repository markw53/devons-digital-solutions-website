import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Clock, Users, Zap } from "lucide-react"; // Importing icons from Lucide

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-1 px-6 py-20">
        {/* Section 1 - About Us */}
        <section className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            About Us
          </h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            We're a team of passionate developers, designers, and digital experts dedicated to creating exceptional web experiences.
          </p>
        </section>

        {/* Full-width Stats Section */}
        <section className="bg-gray-200 dark:bg-gray-800 py-12">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-around text-center">
            {/* Years of Experience */}
            <div className="flex flex-col items-center">
              <Clock size={48} className="text-gray-700 dark:text-gray-300" />
              <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">2+</p>
              <p className="text-lg text-gray-700 dark:text-gray-300">Years Experience</p>
            </div>

            {/* Happy Clients */}
            <div className="flex flex-col items-center mt-8 md:mt-0">
              <Users size={48} className="text-gray-700 dark:text-gray-300" />
              <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">2+</p>
              <p className="text-lg text-gray-700 dark:text-gray-300">Happy Clients</p>
            </div>

            {/* Projects Completed */}
            <div className="flex flex-col items-center mt-8 md:mt-0">
              <Zap size={48} className="text-gray-700 dark:text-gray-300" />
              <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">2+</p>
              <p className="text-lg text-gray-700 dark:text-gray-300">Projects Completed</p>
            </div>
          </div>
        </section>

        {/* Section 2 - Our Mission */}
        <section className="max-w-4xl mx-auto mb-16 mt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            Our mission is to transform ideas into reality by building modern, scalable, and user-friendly digital solutions.
          </p>
        </section>

        {/* Section 3 - Why Choose Us */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Why Choose Us?</h2>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            We prioritize innovation, quality, and user experience, ensuring that every project we deliver exceeds expectations.
          </p>
        </section>

        {/* Centered CTA Box */}
        <section className="max-w-3xl mx-auto mt-16 p-8 bg-white dark:bg-gray-800 rounded-2xl text-center shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Work With Us</h3>
          <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
            Let's collaborate to build something incredible.
          </p>
          <Link href="/contact">
            <button className="mt-4 px-6 py-3 bg-gray-900 text-white dark:bg-white dark:text-gray-900 rounded-lg font-bold text-lg hover:bg-gray-700 dark:hover:bg-gray-300 transition">
              Contact Us
            </button>
          </Link>
        </section>

        {/* Meet Our Team Section */}
        <section className="max-w-4xl mx-auto mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Meet Our Team</h2>

          {/* Team Member Cards */}
          <div className="mt-8 flex flex-col md:flex-row justify-center gap-8">
            {/* Founder & CEO */}
            <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-800 shadow-md flex flex-col items-center">
              <Image
                src="/images/mark-workman.jpg" // Update with actual image path
                alt="Mark Workman"
                width={150}
                height={150}
                className="rounded-full"
              />
              <p className="mt-4 text-xl font-bold text-gray-900 dark:text-white">Mark Workman</p>
              <p className="text-gray-700 dark:text-gray-300">Founder & CEO</p>
            </div>

            {/* Frontend Developer */}
            <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-800 shadow-md flex flex-col items-center">
              <Image
                src="/images/frontend-developer.jpg" // Update with actual image path
                alt="Frontend Developer"
                width={150}
                height={150}
                className="rounded-full"
              />
              <p className="mt-4 text-xl font-bold text-gray-900 dark:text-white">Mark Workman</p>
              <p className="text-gray-700 dark:text-gray-300">Frontend Developer</p>
            </div>

            {/* Backend Developer */}
            <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-800 shadow-md flex flex-col items-center">
              <Image
                src="/images/backend-developer.jpg" // Update with actual image path
                alt="Backend Developer"
                width={150}
                height={150}
                className="rounded-full"
              />
              <p className="mt-4 text-xl font-bold text-gray-900 dark:text-white">Mark Workman</p>
              <p className="text-gray-700 dark:text-gray-300">Backend Developer</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

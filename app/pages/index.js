import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Devon's Digital Solutions</title>
        <meta name="description" content="Turning your ideas into a digital reality" />
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-gray-100 dark:bg-gray-800">
        <h1 className="text-4xl md:text-6xl font-bold dark:text-white">
          Turning your ideas into <br /> a digital reality
        </h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          As a company, we are dedicated to building great looking and responsive websites and applications for your needs.
        </p>
        <div className="mt-6 flex space-x-4">
          <a
            href="/get-started"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Get started
          </a>
          <a
            href="/services"
            className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800"
          >
            Services
          </a>
        </div>
      </main>
    </>
  );
}

"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="w-full border-b border-gray-300 dark:border-gray-600 py-4 px-6 flex justify-between items-center bg-white dark:bg-gray-900">
      <div className="flex items-center space-x-2">
        <Image src="/pawprint.png" alt="Logo" width={32} height={32} />
        <h1 className="text-xl font-bold dark:text-white">isladogsoftware</h1>
      </div>

      <nav className="flex items-center space-x-6">
        <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">
          Home
        </Link>
        <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">
          About
        </Link>
        <Link href="/services" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">
          Services
        </Link>
        <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">
          Contact
        </Link>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded bg-gray-200 dark:bg-gray-700"
        >
          {mounted && (theme === "dark" ? "☀️" : "🌙")}
        </button>
      </nav>
    </header>
  );
}

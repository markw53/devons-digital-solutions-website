"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

if (!mounted) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="flex justify-between items-center py-6 px-10">
        <div className="text-2xl font-bold text-gray-900 dark:text-white">isladogsoftware</div>
        <nav className="flex space-x-6">
          <Link href="/" className="text-gray-900 dark:text-white hover:underline">
            Home
          </Link>
          <Link href="/about" className="text-gray-900 dark:text-white hover:underline">
            About
          </Link>
          <Link href="/services" className="text-gray-900 dark:text-white hover:underline">
            Services
          </Link>
          <Link href="/contact" className="text-gray-900 dark:text-white hover:underline">
            Contact
          </Link>
        </nav>
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 border rounded"
          >
            {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        )}
      </div>
    </header>
  );
}

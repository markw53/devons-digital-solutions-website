import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="flex justify-between items-center py-6 px-10">
        {/* Logo */}
        <div className="flex items-center space-x-3">
        <Image src="/wolfbyte-logo.webp" alt="WolfByte Logo" width={40} height={40} />
          <span className="text-2xl font-bold text-gray-900 dark:text-white">WolfByte</span>
        </div>

        {/* Navigation */}
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
      </div>
    </header>
  );
}

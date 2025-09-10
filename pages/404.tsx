import Link from "next/link";
import { FaRegSadTear } from "react-icons/fa";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <FaRegSadTear className="text-7xl text-orange-500 mb-4" />
      <h1 className="text-4xl font-bold mb-2">404 - Page Not Found</h1>
      <p className="mb-6 text-center max-w-md">
        Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/" passHref legacyBehavior>
        <a className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-2 rounded-md shadow hover:scale-105 transition-all duration-300 cursor-pointer">
          Go Home
        </a>
      </Link>
    </div>
  );
}
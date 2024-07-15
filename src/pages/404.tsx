import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function Custom404() {
  return (
    <div className="flex flex-col min-h-screen bg-linen">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-6xl font-bold text-amethyst">404</h1>
        <p className="text-2xl text-gray-700 mt-4">Oops! The page you are looking for does not exist.</p>
        <Link href="/"
 className="mt-6 inline-block bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow hover:bg-amethyst focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 rounded-lg">
            Go back to Home

        </Link>
      </main>
    </div>
  );
};

import React from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-linen">
      <Navbar />
      <div className="flex flex-col md:flex-row flex-grow items-center justify-center px-4 md:px-8 py-8 md:py-0">
        <div className="w-full md:w-2/5 flex items-center justify-center mb-8 md:mb-0">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-lg">
            <Image
              src="/images/profile.webp"
              alt="Profile Picture"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>
        <div className="w-full md:w-3/5 flex flex-col justify-center items-center md:items-start">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-2 md:mb-4">Hello!</h1>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-amethyst mb-4">I&apos;m Mrinaal Arora</h2>
            <p className="text-sm md:text-base text-black mb-6 md:mb-8 max-w-md md:max-w-lg">
              Explore my diverse range of projects and discover the creative solutions I&apos;ve developed.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/projects"
                className="px-6 py-3 text-base md:text-lg font-medium text-white bg-black rounded-md hover:bg-gray-800 text-center">
                View Projects
              </Link>
              <Link href="/contact"
                className="px-6 py-3 text-base md:text-lg font-medium text-black bg-white border border-black rounded-md hover:bg-gray-100 text-center">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

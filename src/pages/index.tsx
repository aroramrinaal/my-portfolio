import React from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-linen">
      <Navbar />
      <div className="flex flex-grow items-center justify-center">
        <div className="w-2/5 flex items-center justify-center">
          <div className="relative">
          <div className="relative w-96 h-96 rounded-full overflow-hidden shadow-lg">
            <Image
              src="/images/profile.webp"
              alt="Profile Picture"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          </div>
        </div>
        <div className="w-3/5 flex flex-col justify-center items-start p-8">
          <div>
            <h1 className="text-6xl font-bold text-black mb-4">Hello!</h1>
            <h2 className="text-7xl font-bold text-amethyst mb-4">I&apos;m Mrinaal Arora</h2>
            <p className="text-sm text-black mb-8">
              Explore my diverse range of projects and discover the creative solutions I&apos;ve developed.
            </p>
            <div className="flex space-x-4">
              <Link href="/projects">
                <a className="px-6 py-3 text-lg font-medium text-white bg-black rounded-md hover:bg-gray-800">
                  View Projects
                </a>
              </Link>
              <Link href="/contact">
                <a className="px-6 py-3 text-lg font-medium text-black bg-white border border-black rounded-md hover:bg-gray-100">
                  Contact Me
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

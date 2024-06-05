import React from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-linen">
      <Navbar />
      <div className="flex flex-grow">
        <div className="w-2/5 bg-cover bg-center" style={{ backgroundImage: "url('/images/profile.jpeg')" }}></div>
        <div className="w-3/5 flex flex-col justify-center items-center p-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-black">Welcome to My Portfolio</h1>
            <p className="text-xl mt-4 text-amethyst">
              Explore my diverse range of projects and discover the creative solutions I&apos;ve developed for clients across various industries.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
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

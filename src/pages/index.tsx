import React from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-linen">
      <Navbar />
      <div className="flex flex-grow items-center justify-center">
        <div className="w-2/5 flex items-center justify-center">
          <img 
            src="/images/profile.jpeg" 
            alt="Profile Picture" 
            className="w-3/4 h-auto rounded-full border-4 border-white shadow-lg" 
          />
        </div>
        <div className="w-3/5 flex flex-col justify-center items-start p-8">
          <div>
            <h1 className="text-5xl font-bold text-black mb-4">Welcome to My Portfolio</h1>
            <p className="text-xl text-amethyst mb-8">
              Explore my diverse range of projects and discover the creative solutions I&apos;ve developed for clients across various industries.
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

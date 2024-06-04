import React from 'react';
import Navbar from '@/components/Navbar';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-grow">
        <div className="w-2/5 bg-cover bg-center" style={{ backgroundImage: "url('/images/profile.jpeg')", borderRadius: "50%" }}></div>
        <div className="w-3/5 flex flex-col justify-center items-center bg-linen">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-amethyst">I&apos;m Mrinaal Arora</h1>
            <p className="text-2xl mt-4 text-gray-700"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

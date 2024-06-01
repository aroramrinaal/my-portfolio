import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto mt-8">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-4">This is the home page of my portfolio website.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

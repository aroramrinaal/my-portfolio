import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Your main content here */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;

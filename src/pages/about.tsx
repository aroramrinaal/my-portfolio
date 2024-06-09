import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

const About: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-linen">
      <Navbar />
      <main className="flex-grow py-12 md:py-16 lg:py-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="flex flex-col items-center md:items-start md:order-2">
            <div className="rounded-lg overflow-hidden w-full md:w-[400px] md:h-[400px] md:ml-auto">
              <Image 
                src="/images/about-page-image.webp"
                alt="Profile Picture"
                width={400}
                height={400}
                className="object-cover"
                layout="responsive"
              />
            </div>
          </div>
          <div>
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-amethyst">About Me</h1>
              <p className="text-gray-700 text-xl md:text-2xl">
                Hi, I'm Mrinaal Arora, a dedicated Computer Science student at Arizona State University with a perfect GPA...
              </p>
            </div>
            <div className="mt-8 space-y-4">
              <h2 className="text-3xl font-bold text-amethyst">Career</h2>
              <p className="text-gray-700 text-xl md:text-2xl">
                I embarked on my career journey at Arizona State University...
              </p>
            </div>
            {/* Additional content sections */}
            <div className="mt-8 space-y-4">
              <h2 className="text-3xl font-bold text-amethyst">Work Experience</h2>
              <div className="space-y-6">
                {/* Sample Work Experience */}
                <p className="text-gray-700 text-xl md:text-2xl">
                  Here you can add detailed experiences or any other relevant information that showcases your professional background.
                </p>
              </div>
            </div>
            <div className="mt-8 space-y-4">
              <h2 className="text-3xl font-bold text-amethyst">Let's Connect</h2>
              <div className="flex items-center space-x-4">
                <Link
                  href="https://www.linkedin.com/in/mrinaalarora/"
                  className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                >
                  LinkedIn
                </Link>
                {/* Other social links */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const About: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-linen">
      <Navbar />
      <main className="flex-grow py-12 md:py-16 lg:py-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="flex flex-col items-center md:items-start md:order-2">
            <div className="rounded-lg overflow-hidden w-full aspect-square md:w-[400px] md:h-[400px] md:ml-auto">
              <img src="/images/about-page-image.jpeg" alt="Profile Picture" className="object-cover w-full h-full" />
            </div>
          </div>
          <div>
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold text-amethyst">About Me</h1>
              <p className="text-gray-700 text-lg">
                Hi, I&apos;m Mrinaal Arora, a passionate web developer with a keen eye for design. I&apos;ve been creating beautiful and functional websites for over 10 years, and I&apos;m excited to share my journey with you.
              </p>
            </div>
            <div className="mt-8 space-y-4">
              <h2 className="text-2xl font-bold text-amethyst">Career</h2>
              <p className="text-gray-700">
                I started my career as a front-end developer, honing my skills in HTML, CSS, and JavaScript. Over the years, I&apos;ve expanded my expertise to include back-end development, database management, and project management. I&apos;ve worked on a wide range of projects, from small personal websites to large-scale enterprise applications.
              </p>
              <p className="text-gray-700">
                My passion for technology and design has led me to stay up-to-date with the latest industry trends and best practices. I&apos;m always eager to learn new skills and take on challenging projects that push me to grow as a developer.
              </p>
            </div>
            <div className="mt-8 space-y-4">
              <h2 className="text-2xl font-bold text-amethyst">Let&apos;s Connect</h2>
              <div className="flex items-center space-x-4">
                <Link
                  href="https://www.linkedin.com/in/mrinaalarora/"
                  className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                >
                  <img src="/linkedin-white.svg" alt="LinkedIn" className="w-5 h-5 mr-2" />
                  LinkedIn
                </Link>
                <Link
                  href="https://github.com/aroramrinaal"
                  className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                >
                  <img src="/github-white.svg" alt="GitHub" className="w-5 h-5 mr-2" />
                  GitHub
                </Link>
                <Link
                  href="https://x.com/mrinaalarora25"
                  className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                >
                  <img src="/twitter.svg" alt="Twitter" className="w-5 h-5 mr-2" />
                  Twitter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;

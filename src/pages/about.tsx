import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-linen">
      <Navbar />
      <main className="flex-grow py-12 md:py-16 lg:py-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="flex flex-col items-center md:items-start md:order-2">
            <div className="rounded-lg overflow-hidden w-full md:w-[400px] md:h-[400px]">
              <img
                src="https://raw.githubusercontent.com/aroramrinaal/my-portfolio/main/public/images/about-page-image.webp"
                alt="Profile Picture"
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: 'auto'
                }}
                width="400"
                height="400"
              />
            </div>
          </div>
          <div>
            <div className="space-y-4">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-amethyst text-center md:text-left">About Me</h1>
              <p className="text-gray-700 text-base md:text-lg lg:text-xl text-justify">
                Hi, I&apos;m Mrinaal Arora, a dedicated Computer Science student at Arizona State University, maintaining a perfect GPA. My experience extends from academic research and educational support as a Research Aide and Undergraduate Teaching Assistant to hands-on software engineering during my internship at OK Health. My projects range from data analysis tools to eco-friendly web applications, showcasing my passion for technology and commitment to driving innovation. I aim to blend creativity with technology to address real-world problems. Explore my journey and projects to see how I apply my technical expertise for positive change.
              </p>
            </div>
            <div className="mt-8 space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-amethyst text-center md:text-left">Let&apos;s Connect</h2>
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
                <Link
                  href="https://www.linkedin.com/in/mrinaalarora/"
                  className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                >
                  <img src="/linkedin-white.svg" alt="LinkedIn" className="w-5 h-5 mr-2" />
                  LinkedIn
                </Link>
                <Link
                  href="https://github.com/aroramrinaal"
                  className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                >
                  <img src="/github-white.svg" alt="GitHub" className="w-5 h-5 mr-2" />
                  GitHub
                </Link>
                <Link
                  href="https://x.com/mrinaalarora25"
                  className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                >
                  <img src="/twitter-x-white.svg" alt="Twitter" className="w-5 h-5 mr-2" />
                  Twitter
                </Link>
                <Link
                  href="https://www.instagram.com/mri.ar/"
                  className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                >
                  <img src="/instagram-white.svg" alt="Instagram" className="w-5 h-5 mr-2" />
                  Instagram
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

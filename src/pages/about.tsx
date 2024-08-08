import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-linen">
      <Head>
        <title>About | Mrinaal Arora</title>
        <meta name="description" content="Learn more about Mrinaal Arora, a software engineer specializing in web development and AI." />
        <meta name="keywords" content="Mrinaal Arora, About, Software Engineer, Web Development, AI" />
        <meta name="author" content="Mrinaal Arora" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://aroramrinaal.vercel.app/about" />
        <meta property="og:title" content="About | Mrinaal Arora" />
        <meta property="og:description" content="Learn more about Mrinaal Arora, a software engineer specializing in web development and AI." />
        <meta property="og:image" content="https://aroramrinaal.vercel.app/images/about-page-preview.png" />
        <meta property="og:url" content="https://aroramrinaal.vercel.app/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About | Mrinaal Arora" />
        <meta name="twitter:description" content="Learn more about Mrinaal Arora, a software engineer specializing in web development and AI." />
        <meta name="twitter:image" content="https://aroramrinaal.vercel.app/images/about-page-preview.png" />
      </Head>

      <Navbar />
      <main className="flex-grow py-12 md:py-16 lg:py-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="flex flex-col items-center md:items-start md:order-2">
            <div className="rounded-lg overflow-hidden w-full md:w-[400px] md:h-[400px]">
              <Image
                src="https://raw.githubusercontent.com/aroramrinaal/my-portfolio/main/public/images/about-page-image.webp"
                alt="Profile Picture"
                layout="responsive"
                width={400}
                height={400}
                objectFit="cover"
              />
            </div>
          </div>
          <div>
            <div className="space-y-4">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-amethyst text-center md:text-left">About Me</h1>
              <p className="text-black font-normal md:text-lg lg:text-xl text-justify">
                Experienced Computer Science junior at Arizona State University with a demonstrated history of working in web development and data analysis. Skilled in Python, JavaScript, TypeScript, Next.js, and PostgreSQL. My projects showcase my abilities in building data-driven and full-stack applications.
                <br /> <br />
                I enjoy stretching my full-stack abilities whenever I get the chance. My experience spans various technologies, and I&apos;m always eager to dive into new ones.
                <br /> <br />
                I was Runner Up at MakeHarvard 2024 for Project PowerStride and won the Sustainability Track at YHacks for Project EcoCoin.
                <br /> <br />
                I love coffee and side projects, hit me up. Open to summer 2025 internships.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

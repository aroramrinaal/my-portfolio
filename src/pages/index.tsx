import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-linen">
      <Head>
        <title>Mrinaal Arora | Software Engineer</title>
        <meta name="description" content="Mrinaal Arora's Portfolio: Software Engineer. Explore projects, blog, and contact info." />
        <meta name="keywords" content="Mrinaal Arora, software engineer, web developer, AI, portfolio, Mrinaal, Arora" />
        <meta name="author" content="Mrinaal Arora" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://aroramrinaal.vercel.app/" />

        {/* Open Graph tags */}
        <meta property="og:title" content="Mrinaal Arora - Software Engineer" />
        <meta property="og:description" content="Explore the portfolio of Mrinaal Arora, a software engineer." />
        <meta property="og:image" content="https://aroramrinaal.vercel.app/images/index-page-preview.jpg" />
        <meta property="og:image:secure_url" content="https://aroramrinaal.vercel.app/images/index-page-preview.jpg" />
        <meta property="og:url" content="https://aroramrinaal.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mrinaal Arora - Software Engineer" />
        <meta name="twitter:description" content="Explore the portfolio of Mrinaal Arora, a software engineer." />
        <meta name="twitter:image" content="https://aroramrinaal.vercel.app/images/index-page-preview.jpg" />

        {/* Preload the primary OG image */}
        <link rel="preload" href="https://aroramrinaal.vercel.app/images/index-page-preview.jpg" as="image" />

        {/* Preload the fallback OG image */}
        <link rel="preload" href="https://aroramrinaal.vercel.app/images/project2.webp" as="image" />

        {/* Structured data */}
        <script type="application/ld+json">
          {`
    {
      "@context": "http://schema.org",
      "@type": "Person",
      "name": "Mrinaal Arora",
      "jobTitle": "Software Engineer",
      "url": "https://aroramrinaal.vercel.app/",
      "sameAs": [
        "https://www.linkedin.com/in/mrinaalarora/",
        "https://github.com/aroramrinaal",
        "https://x.com/mrinaalarora25",
        "https://www.instagram.com/mri.ar/",
        "https://devpost.com/aroramrinaal"
      ],
      "image": "https://aroramrinaal.vercel.app/images/project2.webp",
      "description": "Mrinaal Arora's Portfolio: Software Engineer. Explore projects, blog, and contact info."
    }
    `}
        </script>
      </Head>

      <Navbar />
      <div className="flex flex-col md:flex-row flex-grow items-center justify-center px-4 md:px-8 py-8 md:py-0">
        <div className="w-full md:w-2/5 flex items-center justify-center mb-8 md:mb-0">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-lg">
            <Image
              src="https://raw.githubusercontent.com/aroramrinaal/my-portfolio/main/public/images/profile.webp"
              alt="Profile Picture of Mrinaal Arora"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
        </div>
        <div className="w-full md:w-3/5 flex flex-col justify-center items-center md:items-start">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-2 md:mb-4">Hello!</h1>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-amethyst mb-4">I&apos;m Mrinaal Arora</h2>
            <p className="text-sm md:text-base text-black mb-4 md:mb-6 max-w-md md:max-w-lg">
              Welcome to my page on the internet! I am a software engineer. Explore my diverse range of projects and discover the creative solutions I&apos;ve developed.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mb-6 md:mb-8">
              <SocialIcon href="https://www.linkedin.com/in/mrinaalarora/" ariaLabel="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://github.com/aroramrinaal" ariaLabel="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://x.com/mrinaalarora25" ariaLabel="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://www.instagram.com/mri.ar/" ariaLabel="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://devpost.com/aroramrinaal" ariaLabel="Devpost">
                <svg fill="#000000" width="24" height="24" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.002 1.61 0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853z" />
                </svg>
              </SocialIcon>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/projects"
                className="px-6 py-3 text-base md:text-lg font-medium text-white bg-black rounded-md hover:bg-gray-800 text-center">
                View Projects
              </Link>
              <Link href="/contact"
                className="px-6 py-3 text-base md:text-lg font-medium text-black bg-white border border-black rounded-md hover:bg-gray-100 text-center">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const SocialIcon = ({ href, children, ariaLabel }: { href: string, children: React.ReactNode, ariaLabel: string }) => (
  <Link href={href} className="text-black hover:text-gray-700 transition-colors duration-200 ease-in-out" aria-label={ariaLabel}>
    {children}
  </Link>
);

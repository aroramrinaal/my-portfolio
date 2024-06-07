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
            <div className="rounded-lg overflow-hidden w-full aspect-square md:max-w-[300px] md:ml-auto">
              <img src="/images/about-page-image.jpeg" alt="Profile Picture" className="object-cover w-full h-full" />
            </div>
          </div>
          <div>
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold">About Me</h1>
              <p className="text-gray-700 text-lg">
                Hi, I&apos;m Mrinaal Arora, a passionate web developer with a keen eye for design. I&apos;ve been creating beautiful and functional websites for over 10 years, and I&apos;m excited to share my journey with you.
              </p>
            </div>
            <div className="mt-8 space-y-4">
              <h2 className="text-2xl font-bold">Career</h2>
              <p className="text-gray-700">
                I started my career as a front-end developer, honing my skills in HTML, CSS, and JavaScript. Over the years, I&apos;ve expanded my expertise to include back-end development, database management, and project management. I&apos;ve worked on a wide range of projects, from small personal websites to large-scale enterprise applications.
              </p>
              <p className="text-gray-700">
                My passion for technology and design has led me to stay up-to-date with the latest industry trends and best practices. I&apos;m always eager to learn new skills and take on challenging projects that push me to grow as a developer.
              </p>
            </div>
            <div className="mt-8 space-y-4">
              <h2 className="text-2xl font-bold">Work Experience</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <img src="/images/hyperfury-icon.png" alt="Hyperfury Icon" className="w-8 h-8" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">Feature head and Full-Stack developer</h3>
                    <p className="text-gray-500">Hyperfury</p>
                    <p className="text-gray-500">Mar. 2023 - Aug. 2023</p>
                    <p className="mt-2 text-gray-700">
                      As a Project Lead, my responsibility was to oversee and maintain all the codebase of one of Hyperfury&apos;s core offerings. Typescript, Rust, Python were used in the infrastructure. We utilized NextJS with the “T-3 stack” – ensuring developer productivity as well as a bug-free typesafe codebase.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                    <img src="/images/commnete-icon.png" alt="Commnete Icon" className="w-8 h-8" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">App Developer and Project Manager</h3>
                    <p className="text-gray-500">Commnete</p>
                    <p className="text-gray-500">Aug. 2022 - Dec. 2022</p>
                    <p className="mt-2 text-gray-700">
                      This was my first job at a startup. Commnete is a management, security and accounting solution for housing societies. I built their security app for guards, using React native and Expo. The security guards have to enter the visitor&apos;s information in a smooth simple yet easy to use form, along with other features such as emergency and parcel delivery.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <img src="/images/epikhost-icon.png" alt="Epikhost Icon" className="w-8 h-8" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">Co-Founder</h3>
                    <p className="text-gray-500">Epikhost</p>
                    <p className="text-gray-500">Oct. 2021 - Apr. 2022</p>
                    <p className="mt-2 text-gray-700">
                      I was the Co-Owner of Epikhost, a hosting company. At our peak, we had more than 5000 members in our active discord community and more than 3000 users. I managed the community, managed finances and some of the technologies that enabled us to grow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 space-y-4">
              <h2 className="text-2xl font-bold">Let&apos;s Connect</h2>
              <div className="flex items-center space-x-4">
                <Link
                  href="https://www.linkedin.com/in/mrinaalarora/"
                  className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                >
                  <LinkedinIcon className="mr-2 h-5 w-5" />
                  LinkedIn
                </Link>
                <Link
                  href="https://github.com/aroramrinaal"
                  className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                >
                  <GitHubIcon className="mr-2 h-5 w-5" />
                  GitHub
                </Link>
                <Link
                  href="https://twitter.com/mrinaalarora"
                  className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                >
                  <TwitterIcon className="mr-2 h-5 w-5" />
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

function GitHubIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.304 3.438 9.8 8.207 11.387.599.111.793-.261.793-.578v-2.173c-3.338.725-4.041-1.415-4.041-1.415-.546-1.387-1.333-1.755-1.333-1.755-1.089-.746.082-.731.082-.731 1.205.084 1.837 1.236 1.837 1.236 1.071 1.837 2.809 1.306 3.495.998.109-.776.418-1.305.762-1.605-2.665-.305-5.466-1.337-5.466-5.951 0-1.316.469-2.391 1.236-3.231-.124-.304-.536-1.529.118-3.185 0 0 1.008-.324 3.301 1.23.957-.267 1.982-.4 3.003-.404 1.021.004 2.046.137 3.005.404 2.293-1.554 3.299-1.23 3.299-1.23.656 1.656.244 2.881.12 3.185.77.84 1.237 1.915 1.237 3.231 0 4.623-2.804 5.641-5.475 5.942.43.37.824 1.102.824 2.222v3.293c0 .318.194.692.799.576C20.565 21.8 24 17.304 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

export default About;

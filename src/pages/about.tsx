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
              {/* Next.js Image component with specified width and height */}
              <Image 
                src="/images/about-page-image.jpeg"
                alt="Profile Picture"
                width={400} // Specify the width
                height={400} // Specify the height
                className="object-cover"
                layout="responsive"
              />
            </div>
          </div>
          <div>
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold text-amethyst">About Me</h1>
              <p className="text-gray-700 text-lg">
                Hi, I&apos;m Mrinaal Arora, a dedicated Computer Science student at Arizona State University with a perfect GPA. With hands-on experience as a Research Aide and Undergraduate Teaching Assistant, I have honed my skills in both academic research and educational support. My passion for technology is reflected in my diverse projects, ranging from data analysis tools to eco-friendly web applications. I am committed to leveraging my technical expertise to drive innovation and positive change in the world. Explore my journey and projects to see how I blend creativity with technology to solve real-world problems.
              </p>
            </div>
            <div className="mt-8 space-y-4">
              <h2 className="text-3xl font-bold text-amethyst">Career</h2>
              <p className="text-gray-700">
                I embarked on my career journey at <u>Arizona State University</u>, where I have been immersed in the world of <u>Computer Science</u>, achieving a stellar <u>4.0 GPA</u>. My professional experience began with roles such as <u>Research Aide</u> at the School of Life Sciences and the Biodesign Center for Applied Structural Discovery, where I contributed to significant projects like the &quot;<u>Digitization TCN</u>&quot; and developed proficiency in <u>advanced laboratory techniques</u>. As an <u>Undergraduate Teaching Assistant</u> at the Fulton Schools of Engineering, I played a pivotal role in enhancing the educational experience for engineering students through collaborative learning activities.
              </p>
              <p className="text-gray-700">
                Beyond academia, my passion for technology is showcased through various innovative projects. I developed tools like <u>Spotistats</u> for analyzing Spotify data and <u>Ecocoin</u>, a Chrome extension promoting eco-friendly shopping. My technical repertoire includes <u>Python, HTML/CSS, JavaScript</u>, and frameworks like <u>Django and NodeJS</u>. My work has been recognized at prestigious events such as <u>YHacks</u> and <u>MakeHarvard</u>. I am committed to staying abreast of the latest industry trends, continually learning new skills, and tackling challenging projects that drive both personal and technological growth.
              </p>
            </div>
            <div className="mt-8 space-y-4">
              <h2 className="text-3xl font-bold text-amethyst">Let&apos;s Connect</h2>
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
                  <img src="/twitter-x-white.svg" alt="Twitter" className="w-5 h-5 mr-2" />
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

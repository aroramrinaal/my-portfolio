import React from 'react';
import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard';
import Head from 'next/head';

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Projects | Mrinaal Arora</title>
        <meta name="description" content="Discover the projects developed by Mrinaal Arora." />
        <meta name="keywords" content="Mrinaal Arora, Projects, Web Development, AI" />
        <meta name="author" content="Mrinaal Arora" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://aroramrinaal.vercel.app/projects" />
        <meta property="og:title" content="Projects | Mrinaal Arora" />
        <meta property="og:description" content="Discover the projects developed by Mrinaal Arora." />
        <meta property="og:image" content="https://aroramrinaal.vercel.app/images/projects-page-preview.jpg" />
        <meta property="og:url" content="https://aroramrinaal.vercel.app/projects" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Projects | Mrinaal Arora" />
        <meta name="twitter:description" content="Discover the projects developed by Mrinaal Arora." />
        <meta name="twitter:image" content="https://aroramrinaal.vercel.app/images/projects-page-preview.jpg" />
      </Head>
      <Navbar />
      <main className="flex-grow bg-linen p-4 md:p-6">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="Spotistats"
            description="Analyzing Spotify Listening Habits"
            imageUrl="https://raw.githubusercontent.com/aroramrinaal/my-portfolio/main/public/images/project1.webp"
            projectUrl="https://github.com/aroramrinaal/spotistats/?tab=readme-ov-file#spotistats"
            githubUrl='https://github.com/aroramrinaal/spotistats/'
            externalLinkUrl='https://aroramrinaal.vercel.app/blog/spotistats-project'
            techStack={['Python', 'Jupyter', 'Pandas', 'Matplotlib', 'Seaborn']}
          />
          <ProjectCard
            title="Portfolio Website"
            description="Personal Portfolio Website"
            imageUrl="https://raw.githubusercontent.com/aroramrinaal/my-portfolio/main/public/images/project2.webp"
            projectUrl="https://aroramrinaal.vercel.app"
            githubUrl='https://github.com/aroramrinaal/my-portfolio'
            externalLinkUrl='https://aroramrinaal.vercel.app/'
            techStack={['NextJS', 'TailwindCSS', 'Vercel']}
          />
          <ProjectCard
            title='SysTrack'
            description='Real-time system statistics monitoring.'
            imageUrl='https://raw.githubusercontent.com/aroramrinaal/my-portfolio/main/public/images/project6.webp'
            projectUrl='https://pypi.org/project/systracker/'
            githubUrl='https://github.com/VenturaSync/SysTrack'
            externalLinkUrl='https://pypi.org/project/systracker/'
            techStack={['python', 'typer','psutil','CLI']}
          />
          <ProjectCard
            title='CursorPath'
            description='Track your cursor movement across tabs and browsing sessions.            '
            imageUrl='https://raw.githubusercontent.com/aroramrinaal/my-portfolio/main/public/images/cursorpathproject.png'
            projectUrl="https://cursorpath.vercel.app/"
            githubUrl='https://github.com/aroramrinaal/cursor-path'
            externalLinkUrl='https://chromewebstore.google.com/detail/cursor-path/mbdjmnlimadokilnbchhooijjphlipfc'
            techStack={['javascript','chrome-extension','background-script']}
          />
          <ProjectCard
            title="Powerstride"
            description="Wearable tech that turns your steps into electricity"
            imageUrl="https://raw.githubusercontent.com/aroramrinaal/my-portfolio/main/public/images/project3.webp"
            projectUrl="https://devpost.com/software/powerstride"
            githubUrl='https://github.com/aroramrinaal/PowerStride'
            externalLinkUrl='https://devpost.com/software/powerstride'
            stickerText="Made at MakeHarvard"
            techStack={['arduino','battery','wires','wearable-tech']}
          />
          <ProjectCard
            title="Freshuntil"
            description="Minimize Waste & Maximize Taste."
            imageUrl="https://raw.githubusercontent.com/aroramrinaal/my-portfolio/main/public/images/project4.webp"
            projectUrl='https://devpost.com/software/freshuntil-4ol2qy'
            githubUrl='https://github.com/mekhiHart/LAHacks-2024/'
            externalLinkUrl='https://devpost.com/software/freshuntil-4ol2qy'
            stickerText="Made at LA Hacks"
            techStack={['typescript','react','ui/ux','food-waste prevention']}
          />
          <ProjectCard
            title='EcoCoin'
            description='Earn Green for Going Green'
            imageUrl='https://raw.githubusercontent.com/aroramrinaal/my-portfolio/main/public/images/ecocoin.png'
            projectUrl='https://devpost.com/software/ecocoin'
            githubUrl='https://github.com/aroramrinaal/EcoCoin'
            externalLinkUrl='https://devpost.com/software/ecocoin'
            stickerText="Made at YHacks"
            techStack={['chrome-extension','sustainability']}
          />
        </section>
      </main>
    </div>
  );
};

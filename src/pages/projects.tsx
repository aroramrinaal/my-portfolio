import React from 'react';
import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-linen p-4 md:p-6">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="Spotistats"
            description="Analyzing Spotify Listening Habits"
            imageUrl="https://raw.githubusercontent.com/aroramrinaal/my-portfolio/main/public/images/project1.webp"
            projectUrl="https://github.com/aroramrinaal/spotistats/"
            githubUrl='https://github.com/aroramrinaal/spotistats/'
            externalLinkUrl='https://aroramrinaal.vercel.app/blog/spotistats-project'
            isHackathonProject={false}
          />
          <ProjectCard
            title="Portfolio Website"
            description="Personal Portfolio Website"
            imageUrl="https://raw.githubusercontent.com/aroramrinaal/my-portfolio/main/public/images/project2.webp"
            projectUrl="https://github.com/aroramrinaal/my-portfolio"
            githubUrl='https://github.com/aroramrinaal/my-portfolio'
            externalLinkUrl='https://aroramrinaal.vercel.app/'
            isHackathonProject={false}
          />
          <ProjectCard
            title='SysTrack'
            description='Real-time system statistics monitoring.'
            imageUrl='https://raw.githubusercontent.com/aroramrinaal/my-portfolio/main/public/images/project6.webp'
            projectUrl='https://pypi.org/project/systracker/'
            githubUrl='https://github.com/VenturaSync/SysTrack'
            externalLinkUrl='https://pypi.org/project/systracker/'
            isHackathonProject={false}
          />
          <ProjectCard
            title='CursorPath'
            description='Track Your Mouse Journey'
            imageUrl='https://raw.githubusercontent.com/aroramrinaal/my-portfolio/main/public/images/cursorpathproject.png'
            projectUrl="https://cursorpath.vercel.app/"
            githubUrl='https://github.com/aroramrinaal/cursor-path'
            externalLinkUrl='https://cursorpath.vercel.app/'
            isHackathonProject={false}
          />
          <ProjectCard
            title="Powerstride"
            description="Wearable tech that turns your steps into electricity"
            imageUrl="https://raw.githubusercontent.com/aroramrinaal/my-portfolio/main/public/images/project3.webp"
            projectUrl="https://devpost.com/software/powerstride"
            githubUrl='https://github.com/aroramrinaal/PowerStride'
            externalLinkUrl='https://devpost.com/software/powerstride'
            isHackathonProject={true}
          />
          <ProjectCard
            title="Freshuntil"
            description="Minimize Waste & Maximize Taste."
            imageUrl="https://raw.githubusercontent.com/aroramrinaal/my-portfolio/main/public/images/project4.webp"
            projectUrl='https://devpost.com/software/freshuntil-4ol2qy'
            githubUrl='https://github.com/mekhiHart/LAHacks-2024/'
            externalLinkUrl='https://devpost.com/software/freshuntil-4ol2qy'
            isHackathonProject={true}
          />
          <ProjectCard
            title='EcoCoin'
            description='Earn Green for Going Green'
            imageUrl='https://raw.githubusercontent.com/aroramrinaal/my-portfolio/main/public/images/project5.webp'
            projectUrl='https://devpost.com/software/ecocoin'
            githubUrl='https://github.com/aroramrinaal/EcoCoin'
            externalLinkUrl='https://devpost.com/software/ecocoin'
            isHackathonProject={true}
          />
        </section>
      </main>
    </div>
  );
};

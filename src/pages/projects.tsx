import React from 'react';
import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard';

const Projects: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-linen dark:bg-gray-900 p-4 md:p-6">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="Spotistats"
            description="Analyzing Spotify Listening Habits"
            imageUrl="/images/project1.jpeg"
            projectUrl="https://github.com/aroramrinaal/spotistats/"
            githubUrl='https://github.com/aroramrinaal/spotistats/'
            externalLinkUrl='https://aroramrinaal.vercel.app/blog/spotistats-project'
          />
          <ProjectCard
            title="Portfolio Website"
            description="Personal Portfolio Website"
            imageUrl="/images/project2.jpeg"
            projectUrl="https://github.com/aroramrinaal/my-portfolio"
            githubUrl='https://github.com/aroramrinaal/my-portfolio'
            externalLinkUrl='https://aroramrinaal.vercel.app/'
          />
        </section>
      </main>
    </div>
  );
};

export default Projects;

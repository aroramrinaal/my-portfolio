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
          />
          <ProjectCard
            title="Project 2"
            description="A brief description of the second project."
            imageUrl="/images/project2.jpeg"
            projectUrl="#"
          />
          <ProjectCard
            title="Project 3"
            description="A brief description of the third project."
            imageUrl="/images/project3.jpeg"
            projectUrl="#"
          />
          <ProjectCard
            title="Project 4"
            description="A brief description of the fourth project."
            imageUrl="/images/project4.jpeg"
            projectUrl="#"
          />
          <ProjectCard
            title="Project 5"
            description="A brief description of the fifth project."
            imageUrl="/images/project5.jpeg"
            projectUrl="#"
          />
          <ProjectCard
            title="Project 6"
            description="A brief description of the sixth project."
            imageUrl="/images/project6.jpeg"
            projectUrl="#"
          />
        </section>
      </main>
    </div>
  );
};

export default Projects;

import React from 'react';
import Link from 'next/link';
import HackathonSticker from './HackathonSticker';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  githubUrl: string;
  externalLinkUrl: string;
  isHackathonProject: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, projectUrl, githubUrl, externalLinkUrl, isHackathonProject }) => {
  return (
    <div className="bg-linen rounded-lg overflow-hidden shadow-md border border-black relative">
      {isHackathonProject && <HackathonSticker />}
      <Link href={projectUrl} className="block" prefetch={false}>
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">
          <Link href={projectUrl} className="text-black text-2xl" prefetch={false}>
            {title}
          </Link>
        </h3>
        <p className="text-black mb-4 text-xl">{description}</p>
        <div className="flex justify-between items-center">
          <Link href={projectUrl} className="inline-flex items-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800" prefetch={false}>
            View Project
          </Link>
          <div className="flex space-x-4">
            <Link href={githubUrl} className="block" prefetch={false}>
              <img src="/github.svg" alt="GitHub" className="w-6 h-6" />
            </Link>
            <Link href={externalLinkUrl} className="block" prefetch={false}>
              <img src="/external-link-icon.svg" alt="External Link" className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

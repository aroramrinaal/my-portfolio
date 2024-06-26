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
          <Link href={projectUrl} className="text-darkPurple" prefetch={false}>
            {title}
          </Link>
        </h3>
        <p className="text-darkPurple dark:text-gray-400 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <Link href={projectUrl} className="inline-flex items-center text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-500" prefetch={false}>
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

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export default ProjectCard;

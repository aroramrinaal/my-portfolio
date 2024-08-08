import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HackathonSticker from './HackathonSticker';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  githubUrl: string;
  externalLinkUrl: string;
  stickerText?: string;
  techStack: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  projectUrl,
  githubUrl,
  externalLinkUrl,
  stickerText,
  techStack,
}) => {
  return (
    <div className="bg-linen rounded-lg overflow-hidden shadow-md border border-black relative">
      {stickerText && <HackathonSticker text={stickerText} />}
      <Link href={projectUrl} className="block" prefetch={false}>
        <Image src={imageUrl} alt={title} className="w-full h-48 object-cover" width={500} height={300} />
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">
          <Link href={projectUrl} className="text-black text-2xl" prefetch={false}>
            {title}
          </Link>
        </h3>
        <p className="text-black mb-2 text-xl">{description}</p>
        <div className="mb-4">
          <div className="flex flex-wrap">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-black text-white text-sm font-medium mr-2 mb-2 px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
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

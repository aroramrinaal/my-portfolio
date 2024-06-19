import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  githubUrl: string;
  externalLinkUrl: string;
  stickerText?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  projectUrl,
  githubUrl,
  externalLinkUrl,
  stickerText
}) => {
  return (
    <div className="bg-linen rounded-lg overflow-hidden shadow-md border border-black relative">
      {stickerText && (
        <div className="hackathon-sticker">
          {stickerText}
        </div>
      )}
      <Link href={projectUrl} className="block" prefetch={false}>
        <Image
          src={imageUrl}
          alt={title}
          width={300}
          height={200}
          className="w-full h-48 object-cover"
          layout="responsive"
        />
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">
          <Link href={projectUrl} className="hover:text-primary-500 dark:hover:text-primary-400" prefetch={false}>
            {title}
          </Link>
        </h3>
        <p className="text-gray-500 dark:text-gray-400 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <Link
            href={projectUrl}
            className="inline-flex items-center text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-500"
            prefetch={false}
          >
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

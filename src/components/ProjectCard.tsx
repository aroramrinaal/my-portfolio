import React from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    projectUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, projectUrl }) => {
    return (
        <div className="bg-linen rounded-lg overflow-hidden shadow-md dark:bg-gray-900 dark:text-gray-200">
            <a href={projectUrl} className="block" target="_blank" rel="noopener noreferrer">
                <img src={imageUrl} alt={title} width={300} height={200} className="w-full h-48 object-cover" />
            </a>
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">
                    <a href={projectUrl} className="hover:text-primary-500 dark:hover:text-primary-400" target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">{description}</p>
                <a
                    href={projectUrl}
                    className="inline-flex items-center text-primary-500 hover:text-amethyst dark:text-primary-400 dark:hover:text-primary-500"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View Project
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                </a>
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

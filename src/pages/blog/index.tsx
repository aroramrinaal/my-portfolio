import React from 'react';
import Link from 'next/link';
import { Clock, Calendar, Tag } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Head from 'next/head';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  readTime: number;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 'tech-stack-fun',
    title: 'Building My First Portfolio: Next.js, Tailwind CSS, and Vercel Adventures',
    description: 'Let me take you through the fun and excitement of using Next.js, Tailwind CSS, and Vercel to create and deploy my portfolio page!',
    date: 'July 25, 2024',
    readTime: 5,
    tags: ['Next.js', 'Tailwind CSS', 'Vercel']
  },
  {
    id: 'spotistats-project',
    title: 'Insights from Spotify Streaming History: The Spotistats Project',
    description: 'Data analysis and visualization project based on your Spotify streaming history.',
    date: 'June 6, 2024',
    readTime: 8,
    tags: ['Data Analysis', 'Spotify', 'Python']
  },
];

const Blog: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-linen">
      <Navbar />
      <Head>
        <title>Blog | Mrinaal Arora</title>
        <meta name="description" content="Read the latest blog posts by Mrinaal Arora." />
        <meta name="keywords" content="Mrinaal Arora, Blog, Web Development, AI, Software Engineer" />
        <meta name="author" content="Mrinaal Arora" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://aroramrinaal.vercel.app/blog" />
        <meta property="og:title" content="Blog | Mrinaal Arora" />
        <meta property="og:description" content="Read the latest blog posts by Mrinaal Arora." />
        <meta property="og:image" content="https://aroramrinaal.vercel.app/images/blog-page-preview.png" />
        <meta property="og:url" content="https://aroramrinaal.vercel.app/blog" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog | Mrinaal Arora" />
        <meta name="twitter:description" content="Read the latest blog posts by Mrinaal Arora." />
        <meta name="twitter:image" content="https://aroramrinaal.vercel.app/images/blog-page-preview.png" />
      </Head>

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl sm:text-5xl text-amethyst font-bold mb-8 text-center">Read My Blog</h1>
        <ul className="space-y-8">
          {blogPosts.map((post) => (
            <li key={post.id} className="bg-white border border-gray-300 rounded-lg p-6 transition-transform duration-300 hover:scale-105 shadow-md">
              <Link href={`/blog/${post.id}`} className="block">
                <h2 className="text-xl sm:text-2xl font-semibold text-darkPurple hover:text-amethyst transition-colors duration-300 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-700 mb-4">{post.description}</p>
                <div className="flex flex-wrap items-center text-sm text-gray-600 mb-2">
                  <span className="flex items-center mr-4 mb-2">
                    <Calendar size={16} className="mr-1" />
                    {post.date}
                  </span>
                  <span className="flex items-center mr-4 mb-2">
                    <Clock size={16} className="mr-1" />
                    {post.readTime} min read
                  </span>
                </div>
                <div className="flex flex-wrap">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="flex items-center bg-lavender text-darkPurple px-2 py-1 rounded-full text-xs mr-2 mb-2">
                      <Tag size={12} className="mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Blog;
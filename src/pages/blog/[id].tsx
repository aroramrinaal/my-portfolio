import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import Navbar from '@/components/Navbar';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  { 
    id: '1', 
    title: 'Why I used Next.js for building my portfolio page?', 
    content: `
      <p>Next.js offers several features that make it a great choice for building a portfolio website:</p>
      <ul class="list-disc ml-5">
        <li><strong>Server-Side Rendering (SSR)</strong>: Helps with SEO and improves performance by rendering pages on the server.</li>
        <li><strong>Static Site Generation (SSG)</strong>: Allows pre-rendering pages at build time, providing fast load times.</li>
        <li><strong>API Routes</strong>: Enables the creation of backend endpoints within the same framework.</li>
        <li><strong>Developer Experience</strong>: Comes with a great developer experience with fast refresh, built-in CSS support, and TypeScript support.</li>
      </ul>
      <p>By leveraging these features, I was able to build a fast, SEO-friendly, and easy-to-maintain portfolio website.</p>
    `, 
    date: 'June 6, 2024',
  },
];

interface BlogPostProps {
  post: BlogPost;
}

const BlogPostPage: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <div className="flex flex-col min-h-screen bg-linen">
      <Navbar />
      <div className="flex-grow p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
        <p className="text-gray-600 mb-8">{post.date}</p>
        <div className="text-gray-700 prose lg:prose-xl" dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogPosts.map((post) => ({
    params: { id: post.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = blogPosts.find((post) => post.id === params?.id);

  return {
    props: {
      post,
    },
  };
};

export default BlogPostPage;

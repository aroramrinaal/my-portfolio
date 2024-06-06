import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

interface BlogPost {
  id: string;
  title: string;
  description: string;
}

const blogPosts: BlogPost[] = [
  { id: 'why-nextjs', title: 'Why I used Next.js for building my portfolio page?', description: 'Learn why Next.js was chosen for building this portfolio page.' },
];

const Blog: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-linen">
      <Navbar />
      <div className="flex flex-grow items-center justify-center">
        <div className="p-8 max-w-2xl w-full">
          <h1 className="text-5xl text-amethyst font-bold mb-8 text-center">Read My Blog</h1>
          <ul>
            {blogPosts.map((post) => (
              <li key={post.id} className="mb-8">
                <Link href={`/blog/${post.id}`}>
                  <a className="text-2xl font-semibold text-black hover:underline">
                    {post.title}
                  </a>
                </Link>
                <p className="text-gray-700">{post.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blog;

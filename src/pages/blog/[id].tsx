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
    id: 'why-nextjs', 
    title: 'Why I used Next.js for building my portfolio page?', 
    content: `
      <p>Creating a portfolio website involves choosing the right tools and technologies to ensure the site is fast, SEO-friendly, and easy to maintain. After evaluating several options, I decided to use Next.js for building my portfolio page. Here's why:</p>

      <h3>Next.js Features</h3>
      <p>Next.js offers several features that make it an excellent choice for building a portfolio website:</p>
      <ul class="list-disc ml-5">
        <li><strong>Server-Side Rendering (SSR)</strong>: Helps with SEO and improves performance by rendering pages on the server.
          <ul class="list-disc ml-5">
            <li>Ensures that search engines can crawl and index the site effectively, leading to better visibility in search results.</li>
            <li>Provides a seamless experience for users by delivering fully-rendered pages on each request.</li>
          </ul>
        </li>
        <li><strong>Static Site Generation (SSG)</strong>: Allows pre-rendering pages at build time, providing fast load times.
          <ul class="list-disc ml-5">
            <li>Enables the creation of static HTML files for each page, reducing the need for server-side processing.</li>
            <li>Ensures that the site is fast and performs well even under high traffic.</li>
          </ul>
        </li>
        <li><strong>API Routes</strong>: Enables the creation of backend endpoints within the same framework.
          <ul class="list-disc ml-5">
            <li>Simplifies the process of fetching and handling data without the need for a separate backend.</li>
            <li>Provides a flexible way to integrate server-side functionality directly into the Next.js application.</li>
          </ul>
        </li>
        <li><strong>Developer Experience</strong>: Comes with a great developer experience with fast refresh, built-in CSS support, and TypeScript support.
          <ul class="list-disc ml-5">
            <li>Features like automatic code splitting, dynamic imports, and file-based routing make development more efficient and enjoyable.</li>
            <li>The extensive documentation and vibrant community support make it easy to get started and find solutions to common issues.</li>
          </ul>
        </li>
      </ul>

      <h3>Why Next.js?</h3>
      <p>By leveraging these features, I was able to build a fast, SEO-friendly, and easy-to-maintain portfolio website. Here are some specific reasons why Next.js stood out:</p>
      <ol class="list-decimal ml-5">
        <li><strong>Performance</strong>: 
          <ul class="list-disc ml-5">
            <li>The combination of SSR and SSG ensures that my portfolio loads quickly and provides a smooth user experience. The pre-rendered static pages reduce server load and improve site speed.</li>
          </ul>
        </li>
        <li><strong>SEO</strong>:
          <ul class="list-disc ml-5">
            <li>Server-side rendering enhances SEO by ensuring that search engines can index the content effectively. This leads to better rankings and more visibility for my portfolio.</li>
          </ul>
        </li>
        <li><strong>Flexibility</strong>:
          <ul class="list-disc ml-5">
            <li>The ability to create API routes within the same framework simplifies the process of handling data and integrating backend functionality. This flexibility allows me to add features like contact forms and dynamic content easily.</li>
          </ul>
        </li>
        <li><strong>Developer Experience</strong>:
          <ul class="list-disc ml-5">
            <li>The intuitive file-based routing, hot-reloading, and rich plugin ecosystem make development more efficient and enjoyable. I can focus on building features rather than dealing with configuration and setup.</li>
          </ul>
        </li>
      </ol>

      <h3>Conclusion</h3>
      <p>Next.js has proven to be a powerful and flexible framework for building my portfolio website. Its features, performance, and developer-friendly environment make it an ideal choice for creating a professional and engaging online presence. If you're considering building a portfolio or any web application, I highly recommend giving Next.js a try.</p>
    `, 
    date: 'June 6, 2024',
  },{
    id: 'spotistats-project',
    title: 'Insights from Spotify Streaming History: The Spotistats Project',
    content: ``,
    date: 'June 6, 2024',
  }
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

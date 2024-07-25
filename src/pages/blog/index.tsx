// import React from 'react';
// import Link from 'next/link';
// import Navbar from '@/components/Navbar';

// interface BlogPost {
//   id: string;
//   title: string;
//   description: string;
// }

// const blogPosts: BlogPost[] = [
//   { id: 'why-nextjs', title: 'Why I used Next.js for building my portfolio page?', description: 'Learn why Next.js was chosen for building this portfolio page.' },
//   {id: 'spotistats-project', title: 'Insights from Spotify Streaming History: The Spotistats Project', description: 'Data analysis and visualization project based on your Spotify streaming history.' },
// ];

// const Blog: React.FC = () => {
//   return (
//     <div className="flex flex-col min-h-screen bg-linen">
//       <Navbar />
//       <div className="flex flex-grow items-center justify-center">
//         <div className="p-8 max-w-2xl w-full">
//           <h1 className="text-5xl text-amethyst font-bold mb-8 text-center">Read My Blog</h1>
//           <ul>
//             {blogPosts.map((post) => (
//               <li key={post.id} className="mb-8">
//                 <Link href={`/blog/${post.id}`}
//  className="text-2xl font-semibold text-darkPurple hover:underline">
//                     {post.title}

//                 </Link>
//                 <p className="text-gray-700">{post.description}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blog;


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
  { id: 'spotistats-project', title: 'Insights from Spotify Streaming History: The Spotistats Project', description: 'Data analysis and visualization project based on your Spotify streaming history.' },
];

const Blog: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-linen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl sm:text-5xl text-amethyst font-bold mb-8 text-center">Read My Blog</h1>
        <ul className="space-y-8">
          {blogPosts.map((post) => (
            <li key={post.id} className="bg-white shadow-md rounded-lg p-6 transition-transform duration-300 hover:scale-105">
              <Link href={`/blog/${post.id}`} className="block">
                <h2 className="text-xl sm:text-2xl font-semibold text-darkPurple hover:text-amethyst transition-colors duration-300 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-700">{post.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Blog;
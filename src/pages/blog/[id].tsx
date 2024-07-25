import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  { 
    id: 'tech-stack-fun', 
    title: 'Building My First Portfolio: Next.js, Tailwind CSS, and Vercel Adventures', 
    content: `
    <p>Embarking on the journey of building my first complete web application was an exhilarating experience. Let me take you through the fun and excitement of using Next.js, Tailwind CSS, and Vercel to create and deploy my portfolio page!</p>

    <h3 class="text-2xl font-semibold mt-6 mb-2">Technologies Used</h3>
    <p>Here's the awesome trio that powered my project:</p>
    <ul class="list-disc ml-5">
      <li><strong>Next.js</strong>: The backbone of my project for server-side rendering, static site generation, and efficient image optimization. It's like having a superhero cape for your app!
        <ul class="list-disc ml-5">
          <li>With server-side rendering, my pages load faster and are super SEO-friendly.</li>
          <li>Static site generation ensures that the site remains blazing fast even under high traffic.</li>
        </ul>
      </li>
      <li><strong>Tailwind CSS</strong>: My secret weapon for rapid and responsive UI development. It’s like having a magic wand to style components effortlessly.
        <ul class="list-disc ml-5">
          <li>Quickly create beautiful designs with utility-first CSS classes.</li>
          <li>Responsive design made easy, ensuring my app looks great on all devices.</li>
        </ul>
      </li>
      <li><strong>Vercel</strong>: The ultimate deployment platform, tailor-made for Next.js projects. It’s like having a smooth runway for a perfect launch.
        <ul class="list-disc ml-5">
          <li>Effortless deployment with built-in support for Next.js.</li>
          <li>Provides valuable analytics and performance insights.</li>
        </ul>
      </li>
    </ul>

    <h3 class="text-2xl font-semibold mt-6 mb-2">Why This Stack?</h3>
    <p>Choosing this stack was a no-brainer for me, and here’s why:</p>
    <ol class="list-decimal ml-5">
      <li><strong>Performance</strong>: 
        <ul class="list-disc ml-5">
          <li>Next.js ensures my app is fast and responsive, providing a seamless user experience.</li>
        </ul>
      </li>
      <li><strong>Developer Happiness</strong>:
        <ul class="list-disc ml-5">
          <li>Tailwind CSS speeds up the styling process, letting me focus more on functionality.</li>
        </ul>
      </li>
      <li><strong>Easy Deployment</strong>:
        <ul class="list-disc ml-5">
          <li>Vercel makes deploying my app a breeze, with zero configuration needed.</li>
        </ul>
      </li>
    </ol>

    <h3 class="text-2xl font-semibold mt-6 mb-2">Dynamic Routing for Blog Pages</h3>
    <p>One of the coolest features I implemented was dynamic routing for my blog pages. This allows each blog post to have its own unique URL and makes managing content a breeze. Here's a quick look at how I did it:</p>
    <ul class="list-disc ml-5">
      <li><strong>File-based Routing</strong>: Next.js uses a file-based routing system where each file in the pages directory automatically becomes a route. For example, <code class="bg-gray-200 p-1 rounded">pages/blog/[id].tsx</code> handles all blog post routes dynamically based on the <code class="bg-gray-200 p-1 rounded">id</code> parameter.</li>
      <li><strong>GetStaticPaths and GetStaticProps</strong>: These functions help in generating static pages at build time, making the site faster and more SEO-friendly. <code class="bg-gray-200 p-1 rounded">getStaticPaths</code> defines the paths to be generated, while <code class="bg-gray-200 p-1 rounded">getStaticProps</code> fetches the data needed for each page.</li>
    </ul>

    <h3 class="text-2xl font-semibold mt-6 mb-2">Conclusion</h3>
    <p>Building my portfolio page with Next.js, Tailwind CSS, and Vercel has been an exciting adventure. This powerful combo ensures top-notch performance, developer-friendly experience, and hassle-free deployment. If you're gearing up for your first project, I highly recommend giving this stack a try!</p>
    `,
    date: 'July 25, 2024',
  },{
    id: 'spotistats-project',
    title: 'Insights from Spotify Streaming History: The Spotistats Project',
    content: `
    
    <p>Spotify is one of the most popular music streaming platforms worldwide, offering users an extensive library of songs and podcasts. As an avid Spotify user, I was curious to explore my listening habits in detail. This curiosity led to the creation of Spotistats, a data analysis and visualization project designed to uncover insights from my Spotify streaming history.</p>
    
    <h3 class="text-2xl font-semibold mt-6 mb-2">Introduction</h3>
    <p>Welcome to Spotistats, a project that delves into the depths of my personal Spotify usage. With this project, I aim to understand my listening preferences, track my most-played songs and artists, and uncover patterns in my streaming habits.</p>
        
    <h3 class="text-2xl font-semibold mt-6 mb-2">Getting the Data</h3>
    <p>To start this journey, I downloaded my Spotify streaming history from Spotify's Privacy Setting section. This feature allows users to download their personal usage data, providing a detailed record of every track played.</p>
        
    <h3 class="text-2xl font-semibold mt-6 mb-2">Tools and Technologies</h3>
    <p>For this exploratory data analysis (EDA) project, I utilized several powerful tools and libraries:</p>
    <ul class="list-disc ml-5">
      <li><strong>Jupyter Notebook</strong>: For interactive coding and visualization.</li>
      <li><strong>Python</strong>: The backbone of the project, providing versatility and simplicity.</li>
      <li><strong>Pandas</strong>: For data manipulation and analysis.</li>
      <li><strong>Matplotlib & Seaborn</strong>: For creating visualizations.</li>
      <li><strong>WordCloud</strong>: For generating word clouds.</li>
      <li><strong>NumPy</strong>: For numerical computations.</li>
    </ul>
        
    <h3 class="text-2xl font-semibold mt-6 mb-2">Data Cleaning and Preparation</h3>
    <p>The raw data obtained from Spotify required some cleaning and formatting to be useful for analysis. Key steps included:</p>
    <ul class="list-disc ml-5">
      <li><strong>Loading the Data</strong>: Importing JSON files into Pandas DataFrames.</li>
      <li><strong>Selecting Relevant Columns</strong>: Focusing on columns like track name, artist, playtime, and platform.</li>
      <li><strong>Converting Timestamps</strong>: Ensuring the 'Play-Time' column is in datetime format.</li>
      <li><strong>Extracting Date and Time Information</strong>: Deriving year, month, day, hour, etc.</li>
      <li><strong>Dropping Irrelevant Columns</strong>: Streamlining the dataset for analysis.</li>
    </ul>
        
    <h3 class="text-2xl font-semibold mt-6 mb-2">Exploratory Data Analysis</h3>
    
    <h4 class="text-xl font-semibold mt-4 mb-2">Top 10 Favorite Artists</h4>
    <p>Understanding my top artists based on listening time and play count. This analysis provided a clear picture of which artists dominated my listening habits.</p>
        
    <h4 class="text-xl font-semibold mt-4 mb-2">Unique Tracks Analysis</h4>
    <p>Calculating the percentage of unique tracks played. This helped me understand the diversity of my listening preferences.</p>
        
    <h4 class="text-xl font-semibold mt-4 mb-2">Day Wise Usage</h4>
    <p>Analyzing active usage in a day over a week with a heatmap. This visualization highlighted periods of high and low streaming activity, providing insights into my listening behavior throughout the week.</p>
        
    <h4 class="text-xl font-semibold mt-4 mb-2">Songs Played Each Day</h4>
    <p>Visualizing the number of songs played each day with a scatter plot. This revealed trends and patterns in my daily listening habits, including identifying the day with the maximum number of songs played.</p>
        
    <h4 class="text-xl font-semibold mt-4 mb-2">Word Cloud of Top 100 Favorite Artists</h4>
    <p>Generating a word cloud to visualize the top 100 favorite artists based on the number of times their songs were played. The size of each artist's name in the word cloud is proportional to the number of times their songs were played, providing a visual representation of my most frequently played artists.</p>
        
    <h3 class="text-2xl font-semibold mt-6 mb-2">Conclusion</h3>
    <p>Spotistats provided valuable insights into my Spotify listening habits, revealing patterns and preferences that I was previously unaware of. By leveraging powerful data analysis and visualization tools, this project showcases the potential of personal data analytics.</p>
    <p>If you're interested in exploring your Spotify data, you can check out the project on GitHub: <a href="https://github.com/aroramrinaal/spotistats/" class="text-blue-600 hover:text-blue-800">Link</a></p>
    
    `,
    date: 'June 6, 2024',
  }
];

interface BlogPostProps {
  post: BlogPost;
}

const BlogPostPage: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title} | Mrinaal Arora&apos;s Blog</title>
        <meta name="description" content={`Read about ${post.title}`} />
      </Head>
      <div className="min-h-screen bg-linen flex flex-col">
        <Navbar />
        <main className="flex-grow max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link href="/blog" className="inline-flex items-center text-black hover:text-amethyst mb-6">
            <ArrowLeft className="mr-2" size={20} />
            <span>Back to Blog</span>
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">{post.title}</h1>
          <div className="flex items-center text-gray-600 mb-8">
            <time>{post.date}</time>
          </div>
          <div 
            className="prose prose-sm sm:prose lg:prose-lg max-w-none text-gray-800"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </main>
        <footer className="bg-linen py-6 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-black">
              &copy; {new Date().getFullYear()} Mrinaal Arora. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
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

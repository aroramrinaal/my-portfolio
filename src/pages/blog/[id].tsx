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

    <h3 class="text-2xl font-semibold mt-6 mb-2">Next.js Features</h3>
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
      <li><strong>Scalability</strong>: Next.js makes it easy to scale your applications as they grow.
        <ul class="list-disc ml-5">
          <li>With built-in support for dynamic routing and API routes, you can easily add new features and expand your application.</li>
          <li>The framework's modular architecture allows you to scale different parts of your application independently.</li>
        </ul>
      </li>
    </ul>

    <h3 class="text-2xl font-semibold mt-6 mb-2">Why Next.js?</h3>
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
      <li><strong>Community and Support</strong>:
        <ul class="list-disc ml-5">
          <li>Next.js has a large and active community, providing a wealth of resources, tutorials, and plugins.</li>
          <li>Regular updates and improvements from the core team ensure the framework stays up-to-date with the latest web development trends.</li>
        </ul>
      </li>
    </ol>

    <h3 class="text-2xl font-semibold mt-6 mb-2">Conclusion</h3>
    <p>Next.js has proven to be a powerful and flexible framework for building my portfolio website. Its features, performance, and developer-friendly environment make it an ideal choice for creating a professional and engaging online presence. If you're considering building a portfolio or any web application, I highly recommend giving Next.js a try.</p>
    `, 
    date: 'June 6, 2024',
  },{
    id: 'spotistats-project',
    title: 'Insights from Spotify Streaming History: The Spotistats Project',
    content: `
    
    <p>Spotify is one of the most popular music streaming platforms worldwide, offering users an extensive library of songs and podcasts. As an avid Spotify user, I was curious to explore my listening habits in detail. This curiosity led to the creation of Spotistats, a data analysis and visualization project designed to uncover insights from my Spotify streaming history.</p>
    
    <h3><strong>Introduction</strong></h3>
    <p>Welcome to Spotistats, a project that delves into the depths of my personal Spotify usage. With this project, I aim to understand my listening preferences, track my most-played songs and artists, and uncover patterns in my streaming habits.</p>
        
    <h3><strong>Getting the Data</strong></h3>
    <p>To start this journey, I downloaded my Spotify streaming history from Spotify's Privacy Setting section. This feature allows users to download their personal usage data, providing a detailed record of every track played.</p>
        
    <h3><strong>Tools and Technologies</strong></h3>
    <p>For this exploratory data analysis (EDA) project, I utilized several powerful tools and libraries:</p>
    <ul class="list-disc ml-5">
      <li><strong>Jupyter Notebook</strong>: For interactive coding and visualization.</li>
      <li><strong>Python</strong>: The backbone of the project, providing versatility and simplicity.</li>
      <li><strong>Pandas</strong>: For data manipulation and analysis.</li>
      <li><strong>Matplotlib & Seaborn</strong>: For creating visualizations.</li>
      <li><strong>WordCloud</strong>: For generating word clouds.</li>
      <li><strong>NumPy</strong>: For numerical computations.</li>
    </ul>
        
    <h3><strong>Data Cleaning and Preparation</strong></h3>
    <p>The raw data obtained from Spotify required some cleaning and formatting to be useful for analysis. Key steps included:</p>
    <ul class="list-disc ml-5">
      <li><strong>Loading the Data</strong>: Importing JSON files into Pandas DataFrames.</li>
      <li><strong>Selecting Relevant Columns</strong>: Focusing on columns like track name, artist, playtime, and platform.</li>
      <li><strong>Converting Timestamps</strong>: Ensuring the 'Play-Time' column is in datetime format.</li>
      <li><strong>Extracting Date and Time Information</strong>: Deriving year, month, day, hour, etc.</li>
      <li><strong>Dropping Irrelevant Columns</strong>: Streamlining the dataset for analysis.</li>
    </ul>
        
    <h3><strong>Exploratory Data Analysis</strong></h3>
    
    <h4><strong>Top 10 Favorite Artists</strong></h4>
    <p>Understanding my top artists based on listening time and play count. This analysis provided a clear picture of which artists dominated my listening habits.</p>
        
    <h4><strong>Unique Tracks Analysis</strong></h4>
    <p>Calculating the percentage of unique tracks played. This helped me understand the diversity of my listening preferences.</p>
        
    <h4><strong>Day Wise Usage</strong></h4>
    <p>Analyzing active usage in a day over a week with a heatmap. This visualization highlighted periods of high and low streaming activity, providing insights into my listening behavior throughout the week.</p>
        
    <h4><strong>Songs Played Each Day</strong></h4>
    <p>Visualizing the number of songs played each day with a scatter plot. This revealed trends and patterns in my daily listening habits, including identifying the day with the maximum number of songs played.</p>
        
    <h4><strong>Word Cloud of Top 100 Favorite Artists</strong></h4>
    <p>Generating a word cloud to visualize the top 100 favorite artists based on the number of times their songs were played. The size of each artist's name in the word cloud is proportional to the number of times their songs were played, providing a visual representation of my most frequently played artists.</p>
        
    <h3><strong>Conclusion</strong></h3>
    <p>Spotistats provided valuable insights into my Spotify listening habits, revealing patterns and preferences that I was previously unaware of. By leveraging powerful data analysis and visualization tools, this project showcases the potential of personal data analytics.</p>
    <p>If you're interested in exploring your Spotify data, you can check out the project on GitHub: <a href="https://github.com/aroramrinaal/spotistats/">Link</a></p>
    
    `,
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

/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/aroramrinaal/my-portfolio/main/public/images/**'
      },
    ],
  },
};

export default nextConfig;

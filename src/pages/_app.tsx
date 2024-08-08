import { AppProps } from 'next/app';
import Head from 'next/head';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import '@/styles/globals.css';
import Script from 'next/script';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Portfolio of Mrinaal Arora, a software engineer specializing in web development and AI. Explore my projects, blog posts, and contact information." />
        <meta name="keywords" content="Mrinaal Arora, Software Engineer, Web Developer, AI, Portfolio" />
        <meta name="author" content="Mrinaal Arora" />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="mhTViDfPI8LSLXD2AWDLIsywTXRe5IWfnmf9-kcQJw4" />
      </Head>
      <Component {...pageProps} />
      <SpeedInsights />
      <Analytics />
      {/* Google Analytics */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-W7GVY05PCJ"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-W7GVY05PCJ');
        `}
      </Script>
    </>
  );
}

export default App;

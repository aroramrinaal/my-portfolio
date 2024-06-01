import { AppProps } from 'next/app';
import Head from 'next/head';
import '@/styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Mrinaal Arora</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Mrinaal Arora" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;

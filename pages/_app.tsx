import '@/styles/base.css';
import type { AppProps } from 'next/app';
import { Inter, Lato } from 'next/font/google';
import '@/styles/common.css';
import Head from 'next/head';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const lato = Lato({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Project Friday</title>
      </Head>
      <main className={lato.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;

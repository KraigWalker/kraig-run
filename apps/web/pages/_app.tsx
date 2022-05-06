import { AppProps } from 'next/app';
import Head from 'next/head';
import { SiteHeader } from '@kraigwalker/run-site-header';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Kraig.run | The Running Journal of Kraig Walker</title>
      </Head>
      <div className="background-container">
        <SiteHeader />
        <main className="app">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;

import { AppProps } from 'next/app';
import Head from 'next/head';
import { defaultTheme, Provider } from '@adobe/react-spectrum';

import { SiteHeader } from '@kraigwalker/run-site-header';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Kraig.run | The Running Journal of Kraig Walker</title>
      </Head>
      <Provider theme={defaultTheme}>
        <SiteHeader />
        <main className="app">
          <Component {...pageProps} />
        </main>
      </Provider>
    </>
  );
}

export default CustomApp;

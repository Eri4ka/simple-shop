import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import NextNProgress from 'nextjs-progressbar';

import { request } from '@shared/api';
import { CartManager } from '@context/CartManager';
import { Layout } from '@components/pure/Layout';
import '@styles/index.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <SWRConfig
      value={{
        fetcher: (resource) => request(resource),
      }}
    >
      <CartManager>
        <Layout>
          <NextNProgress
            color='#fe73a4'
            showOnShallow={false}
            options={{ showSpinner: false }}
          />
          <Component {...pageProps} />
        </Layout>
      </CartManager>
    </SWRConfig>
  );
};

export default MyApp;

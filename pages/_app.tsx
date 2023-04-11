import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';

import { request } from '@shared/api';
import { CartProvider } from '@shared/context/CartProvider';
import { Layout } from '@pages-content/Layout';
import '@styles/index.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <SWRConfig
      value={{
        fetcher: (resource) => request(resource),
      }}
    >
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </SWRConfig>
  );
};

export default MyApp;

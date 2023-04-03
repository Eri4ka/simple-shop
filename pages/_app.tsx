import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';

import { request } from '@shared/api';
import { Layout } from '@pages-content/Layout';
import '@styles/index.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <SWRConfig
      value={{
        fetcher: (resource) => request(resource),
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
};

export default MyApp;

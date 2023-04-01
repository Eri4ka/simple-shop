import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';

import { request } from '@shared/api';
import '@styles/index.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <SWRConfig
      value={{
        fetcher: (resource) => request(resource),
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
};

export default MyApp;

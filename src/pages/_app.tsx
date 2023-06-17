import { AppProps } from 'next/app';

import GlobalStyle from '@/components/GlobalStyle';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
};

export default App;

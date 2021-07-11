import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { SWRConfig, SWRConfiguration } from 'swr';

import { Layout } from './components';
import { Home } from './layouts';
import { ThemeProvider } from './styled';

const getLibrary = provider => {
  const library = new Web3Provider(provider);
  library.pollingInterval = 8000;
  return library;
};

const SWR_CONFIG: SWRConfiguration = {
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  shouldRetryOnError: false,
};

function App() {
  return (
    <Web3ReactProvider {...{ getLibrary }}>
      <SWRConfig value={SWR_CONFIG}>
        <ThemeProvider>
          <Layout>
            <Home />
          </Layout>
        </ThemeProvider>
      </SWRConfig>
    </Web3ReactProvider>
  );
}

export default App;

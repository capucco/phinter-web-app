import React, { ComponentType } from 'react';
import App, { AppProps } from 'next/app';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { SWRConfig, SWRConfiguration } from 'swr';

import { ThemeProvider } from 'styled';
import { HttpProvider } from 'app';

const getLibrary = provider => {
  const library = new Web3Provider(provider);
  library.pollingInterval = 8000;
  return library;
};

const withWeb3ReactProvider =
  (WrappedApp: ComponentType<AppProps>) => (props: AppProps) =>
    (
      <Web3ReactProvider {...{ getLibrary }}>
        <WrappedApp {...props} />
      </Web3ReactProvider>
    );

const SWR_CONFIG: SWRConfiguration = {
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  shouldRetryOnError: false,
};

class EnhancedApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider>
        <HttpProvider>
          <SWRConfig value={SWR_CONFIG}>
            <Component {...pageProps} />
          </SWRConfig>
        </HttpProvider>
      </ThemeProvider>
    );
  }
}

export default withWeb3ReactProvider(EnhancedApp);

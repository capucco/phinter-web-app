import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
});

export const walletConnectConnector = new WalletConnectConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
  infuraId: process.env.NEXT_PUBLIC_INFURA_PROJECT_ID,
  qrcodeModalOptions: {
    mobileLinks: ['metamask'],
  },
});

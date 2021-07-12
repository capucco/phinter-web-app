import { useCallback } from 'react';
import { useWeb3React } from '@web3-react/core';
import { useMount } from 'react-use';

import {
  injected,
  isMobileDevice,
  useWalletBalance,
  walletConnectConnector,
} from 'components';

import {
  AddAsset,
  Balance,
  LoggedUser,
  SignIn,
  StyledUser,
  Wallet,
} from './User.styled';
import { TOKEN_ICON } from './token-icon';

export const User = () => {
  const balance = useWalletBalance();
  const { account, activate, library } = useWeb3React();

  const handleClickSignInButton = useCallback(async () => {
    await activate(isMobileDevice ? walletConnectConnector : injected);
  }, [activate]);

  const handleAddToWalletClick = useCallback(async () => {
    await library.provider.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: process.env.REACT_APP_TOKEN_ADDRESS,
          symbol: 'PHINT',
          decimals: 18,
          image: TOKEN_ICON,
        },
      },
    });
  }, [library]);

  useMount(() => {
    if (isMobileDevice) {
      try {
        if (walletConnectConnector) {
          activate(walletConnectConnector);
        }
      } catch (e) {
        // e
      }
    } else {
      injected.isAuthorized().then(async isAuthorized => {
        try {
          if (isAuthorized) {
            await activate(injected);
          }
        } catch (e) {
          // e
        }
      });
    }
  });

  return (
    <StyledUser>
      {account ? (
        <LoggedUser>
          <Wallet>
            <Balance>
              <span>Balance: {balance}</span>
            </Balance>
            <AddAsset onClick={handleAddToWalletClick}>Add to wallet</AddAsset>
          </Wallet>
        </LoggedUser>
      ) : (
        <SignIn onClick={handleClickSignInButton}>Sign in</SignIn>
      )}
    </StyledUser>
  );
};

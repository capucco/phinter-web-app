import { useCallback } from 'react';
import { useWeb3React } from '@web3-react/core';
import { useMount } from 'react-use';

import {
  injected,
  isMobileDevice,
  isProduction,
  useWalletBalance,
  walletConnectConnector,
} from 'app';

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
          address: process.env.NEXT_PUBLIC_TOKEN_ADDRESS,
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
        if (walletConnectConnector?.walletConnectProvider?.accounts?.length) {
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
              Balance:&nbsp;
              <a
                href={`https://${
                  !isProduction() ? `${process.env.NEXT_PUBLIC_NETWORK}.` : ''
                }etherscan.io/token/${
                  process.env.NEXT_PUBLIC_TOKEN_ADDRESS
                }?a=${account}`}
                target="_blank"
              >
                {Number(balance).toFixed(2)}
              </a>
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

import { useCallback } from 'react';
import { useWeb3React } from '@web3-react/core';

import { isProduction, useUser, useWalletBalance } from 'app';

import {
  Actions,
  AddAsset,
  Balance,
  LoggedUser,
  Logout,
  SignIn,
  StyledUser,
  Wallet,
} from './User.styled';
import { TOKEN_ICON } from './token-icon';

export const User = () => {
  const { login } = useUser();
  const balance = useWalletBalance();
  const { account, library } = useWeb3React();

  const handleClickSignInButton = useCallback(async () => {
    await login();
  }, [login]);

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

  const handleLogoutClick = useCallback(async () => {
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
            <Actions>
              <Logout onClick={handleLogoutClick}>Logout</Logout>
              <AddAsset onClick={handleAddToWalletClick}>
                Add to wallet
              </AddAsset>
            </Actions>
          </Wallet>
        </LoggedUser>
      ) : (
        <SignIn onClick={handleClickSignInButton}>Sign in</SignIn>
      )}
    </StyledUser>
  );
};

import { useEffect } from 'react';
import useSWR from 'swr';
import { useWeb3React } from '@web3-react/core';
import { formatEther } from '@ethersproject/units';
import { isNil } from 'ramda';

import tokenABI from 'contracts/abi/PhinterToken.json';

import { web3Fetcher } from '../utils';

export const useWalletBalance = () => {
  const { account, library } = useWeb3React();
  const { data: balance, mutate } = useSWR(
    account
      ? [process.env.REACT_APP_TOKEN_ADDRESS, 'balanceOf', account]
      : null,
    {
      fetcher: web3Fetcher(library, tokenABI),
    }
  );

  useEffect(() => {
    if (library) {
      library.on('block', async () => {
        await mutate(undefined, true);
      });
    }

    return () => {
      if (library) library.removeAllListeners('block');
    };
  }, [library, mutate]);

  return !isNil(balance) ? formatEther(balance) : 0;
};

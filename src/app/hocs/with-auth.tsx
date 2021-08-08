import { useWeb3React } from '@web3-react/core';
import cookie from 'js-cookie';
import { GetServerSideProps, GetServerSidePropsResult } from 'next';
import nextCookie from 'next-cookies';
import { ComponentType, createContext, useCallback, useMemo } from 'react';
import { useMount, usePrevious, useUpdateEffect } from 'react-use';
import useSWR from 'swr';
import keccak256 from 'keccak256';

import {
  TUser,
  getHttpClient,
  injected,
  isMobileDevice,
  useHttp,
  walletConnectConnector,
} from 'app';
import { UserService } from 'services';

type TWrappedWithAuth = {
  user?: TUser | null;
};

type TUserContext = {
  user: TUser | null;
  isLoading: boolean;
  login: () => Promise<void>;
  logout: () => void;
};

export const withAuthServerSideProps =
  (getServerSideProps?: GetServerSideProps): GetServerSideProps =>
  async ctx => {
    const http = getHttpClient();
    const { token } = nextCookie(ctx);

    const result = getServerSideProps
      ? ((await getServerSideProps(ctx)) as {
          props?: Record<string, unknown>;
        })
      : { props: {} };

    if (!result.props) return result as GetServerSidePropsResult<unknown>;

    if (token) {
      try {
        const user = await UserService.getProfile(http, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        return {
          props: {
            ...result.props,
            user,
          },
        };
      } catch (e) {
        /**/
      }
    }

    return { props: { ...result.props, user: null } };
  };

export const UserContext = createContext<TUserContext | null>(null);

export const withAuth = <
  P extends Record<string, unknown> = Record<string, unknown>
>(
  WrappedComponent: ComponentType<P>
): ComponentType<P> => {
  const WrappedWithAuth = ({
    user: initialUser,
    ...rest
  }: P & TWrappedWithAuth) => {
    const http = useHttp();
    const { account, library, activate, deactivate } = useWeb3React();
    const previousAccount = usePrevious(account);
    const { data, revalidate, mutate, isValidating } = useSWR<{ user: TUser }>(
      'profile',
      async () => {
        const user = await UserService.getProfile(http);
        return { user };
      },
      { initialData: { user: initialUser || null } }
    );

    const login = useCallback(async () => {
      await activate(isMobileDevice ? walletConnectConnector : injected);

      cookie.remove('token_expiration_date');
    }, [activate]);

    const logout = useCallback(async () => {
      cookie.remove('token');
      cookie.remove('token_expiration_date');
      localStorage.removeItem('walletconnect');
      window.location.reload();
    }, []);

    const ctx = useMemo<TUserContext>(
      () => ({
        user: data.user,
        isLoading: isValidating,
        login,
        logout,
      }),
      [data.user, isValidating, login, logout]
    );

    useMount(() => {
      if (isMobileDevice) {
        try {
          if (
            walletConnectConnector.walletConnectProvider?.accounts[0] &&
            data.user
          ) {
            activate(walletConnectConnector);
          }
        } catch (e) {
          cookie.remove('token');
          localStorage.removeItem('walletconnect');
          mutate({ user: null }).catch();
        }
      } else {
        injected.isAuthorized().then(async isAuthorized => {
          try {
            if (isAuthorized && data.user) {
              await activate(injected);
            }
          } catch (e) {
            cookie.remove('token');
            mutate({ user: null }).catch();
          }
        });
      }
    });

    useUpdateEffect(() => {
      if (account && !data.user) {
        const getProfile = async () => {
          try {
            const http = getHttpClient();
            const { nonce } = await UserService.getWalletNonce(http, account);
            const signer = library.getSigner();
            const message = isMobileDevice
              ? keccak256(
                  '\x19Ethereum Signed Message:\n' + nonce.length + nonce
                )
              : nonce;
            const signedMessage = await signer.signMessage(message);
            const { token } = await UserService.walletLogin(http, {
              signedMessage,
              nonce,
            });
            cookie.set('token', token);
            await revalidate();
          } catch (e) {
            deactivate();
          }
        };

        getProfile().catch();
      }
    }, [account]);

    useUpdateEffect(() => {
      if (
        (!account || (previousAccount && account !== previousAccount)) &&
        data.user
      ) {
        cookie.remove('token');
        localStorage.removeItem('walletconnect');
        window.location.reload();
      }
    }, [account]);

    return (
      <UserContext.Provider value={ctx}>
        <WrappedComponent {...(rest as unknown as P)} />
      </UserContext.Provider>
    );
  };

  WrappedWithAuth.displayName = 'WrappedWithAuth';

  return WrappedWithAuth;
};

import { AxiosInstance, AxiosRequestConfig } from 'axios';

import { TUser } from 'app';

export type TNonceDataResponse = {
  nonce: string;
};

export type TTokenDataResponse = {
  token: string;
  expirationDate: string;
};

export type TWalletLoginCredentialsDto = {
  signedMessage: string;
  nonce: string;
};

export class UserService {
  static getWalletNonce(http: AxiosInstance, publicAccount: string) {
    return http.post<TNonceDataResponse>('/api/authentication/wallet/account', {
      publicAccount,
    });
  }

  static walletLogin(
    http: AxiosInstance,
    walletAuthCredentialsDto: TWalletLoginCredentialsDto
  ) {
    return http.post<TTokenDataResponse>(
      '/api/authentication/wallet/authenticate',
      walletAuthCredentialsDto
    );
  }

  static getProfile(http: AxiosInstance, config?: AxiosRequestConfig) {
    return http.get<TUser>('api/user/profile', config);
  }

  static refreshTokenData(
    httpClient: AxiosInstance,
    config?: AxiosRequestConfig
  ) {
    return httpClient.post('api/token/refresh', null, config);
  }
}

import cookie from 'js-cookie';
import { FC, createContext, useContext, useMemo } from 'react';

import { getHttpClient } from '../utils';

const HttpContext = createContext(getHttpClient());

export const HttpProvider: FC = ({ children }) => {
  const ctx = useMemo(() => {
    const http = getHttpClient();

    http.interceptors.request.use(config => {
      const token = cookie.get('token');

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    return http;
  }, []);

  return <HttpContext.Provider value={ctx}>{children}</HttpContext.Provider>;
};

export const useHttp = () => useContext(HttpContext);

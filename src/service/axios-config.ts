import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import { getAccessToken } from 'store/authStore';

import { IFunc } from 'types/common.type';

const version = `${process.env.REACT_APP_API_VERSION}`;

export const http = axios.create({
  baseURL: `http://localhost:5000/${version}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setupInterceptor = (onLogout?: IFunc) => {
  const onRequestSuccess = (config: InternalAxiosRequestConfig) => {
    const token = getAccessToken();

    if (token && config.headers) {
      config.headers.Authorization = 'Bearer ' + token;
    }

    return config;
  };

  const onResponseSuccess = (response: AxiosResponse) => {
    return response;
  };

  const onResponseError = (error: AxiosError) => {
    if (error.response?.status === 401) {
      // logout or refresh
      onLogout && onLogout();
    }

    if (axios.isCancel(error)) return null;

    return Promise.reject(error);
  };

  http.interceptors.request.use(onRequestSuccess);
  http.interceptors.response.use(onResponseSuccess, onResponseError);
};

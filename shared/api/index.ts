import axios, { AxiosError } from 'axios';

import { API_URL } from '@shared/services/UrlService/constants/index';

const instance = axios.create({
  baseURL: API_URL,
});

export const request = async (url: string, method = 'GET') => {
  try {
    const response = await instance({ url, method });
    const data = await response.data;
    return data;
  } catch (e) {
    const error = e as AxiosError;
    throw error;
  }
};

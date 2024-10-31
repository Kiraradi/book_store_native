import axios from 'axios';
import TokenService from '../services/TokenService';
import {refreshToken} from '../services/UserApi';
import {SERVER_URL} from '../../config';

let isRefreshMode: null | Promise<void>;

const instance = axios.create({
  baseURL: `${SERVER_URL}`,
});

instance.interceptors.request.use(
  async config => {
    const accessToken = await TokenService.getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  error => Promise.reject(error),
);

instance.interceptors.response.use(
  response => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;

    if (error.response.status === 403) {
      if (!isRefreshMode) {
        isRefreshMode = refreshToken();
      }
      await isRefreshMode.catch(newError => {
        console.log('REFRESH TOKEN ERROR', newError.response.status);
        return Promise.reject(newError);
      });
      await TokenService.getAccessToken();

      return instance(originalRequest);
    }

    return Promise.reject(error);
  },
);

export const configuredAxios = instance;

export default configuredAxios;

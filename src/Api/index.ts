import axios from 'axios';
import TokenService from '../services/TokenService';
import {refreshToken} from '../services/UserApi';
import {SERVER_URL} from '../../config';

let isRefreshMode: null | Promise<void>;
let requestAttemptCounter = 0;

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
  response => response,
  async function (error) {
    const originalRequest = error.config;

    if (error.response.status === 403 && requestAttemptCounter < 5) {
      requestAttemptCounter++;
      if (!isRefreshMode) {
        isRefreshMode = refreshToken().then(() => {
          isRefreshMode = null;
        });
      }

      await isRefreshMode.catch(newError => {
        isRefreshMode = null;
        console.log('REFRESH TOKEN ERROR', newError.response.status);
        requestAttemptCounter = 0;
        return Promise.reject(newError);
      });

      return instance(originalRequest);
    }

    return Promise.reject(error);
  },
);

export const configuredAxios = instance;

export default configuredAxios;

import axios from 'axios';
import TokenService from '../services/TokenService';
import {refreshToken} from '../services/UserApi';
import {SERVER_URL} from '../config';

const instance = axios.create({
  baseURL: `${SERVER_URL}`,
});

instance.interceptors.request.use(
  async config => {
    const accessToken = await TokenService.getAccessToken();
    config.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + accessToken,
    };

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

    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      const access_token = await refreshToken();

      axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;

      return instance(originalRequest);
    }

    return error.response.data;
  },
);

export const configuredAxios = instance;

export default configuredAxios;

import axios from 'axios';
import qs from 'qs';
//ToDo
//const {SERVER_URL} = process.env;
const SERVER_URL = 'http://10.0.2.2:4000';
const instance = axios.create({
  baseURL: `${SERVER_URL}`,
  paramsSerializer(params) {
    return qs.stringify(params, {indices: false});
  },
});

instance.interceptors.request.use(
  config => {
    const accessToken = '';
    config.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer' + accessToken,
    };

    return config;
  },
  error => Promise.reject(error),
);

export const configuredAxios = instance;

export default configuredAxios;

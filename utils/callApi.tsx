import axios, { HeadersDefaults } from 'axios';
import { getCookie } from 'cookies-next';

interface CommonHeaderProperties extends HeadersDefaults {
  Authorization: string;
}

const instance = axios.create({
  baseURL: 'http://localhost:4000',
  timeout: 20000
});

instance.defaults.headers = {
  Authorization: `Bearer authToken`
} as CommonHeaderProperties;

instance.interceptors.request.use(async (config: any) => {
  const jwt = getCookie('jwt');

  if (!!jwt) {
    config.headers.Authorization = `Bearer ${jwt}`;
  }

  return config;
}, (error) => {
  console.log(error);
  return Promise.reject(error);
});

export default instance;
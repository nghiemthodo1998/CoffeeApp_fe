import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${process.env.API_URL}/api`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
});

axiosInstance.interceptors.request.use(
  async config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response && error.response.status === 401) {
    }
    console.log('error', error);
    return Promise.reject(error);
  },
);

export default axiosInstance;

import axios from 'axios';
import { API } from './BaseAPI';

export const refreshToken = async (url: string) => {
  axios.defaults.withCredentials = true;

  const transport = axios.create({
    withCredentials: true,
  });

  transport.defaults.withCredentials = true;

  try {
    const data = (await transport.post(url)).data;
    API.accessToken = data.accessToken;
    return data;
  } catch (err) {
    console.error(err.message);
    return null;
  }
};

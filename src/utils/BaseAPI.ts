import axios from 'axios';
import * as dotenv from 'dotenv';
import { refreshToken } from './refreshToken';

dotenv.config();

export class API {
  static accessToken = '';
  constructor(private APIUrl: string) {}

  protected getUrl() {
    return this.APIUrl;
  }

  protected async get(url?: string): Promise<any> {
    try {
      if (!url) {
        return (await axios.get(this.APIUrl)).data;
      } else {
        return (await axios.get(url)).data;
      }
    } catch (err) {
      console.error(err.message);
      return null;
    }
  }

  protected async post(options: any, url?: string): Promise<any> {
    try {
      if (!url) {
        return (await axios.post(this.APIUrl, options)).data;
      } else {
        return (await axios.post(url, options)).data;
      }
    } catch (err) {
      console.error(err.message);
      return null;
    }
  }

  protected async put(options: any, url?: string): Promise<any> {
    try {
      if (!url) {
        return (await axios.put(this.APIUrl, options)).data;
      }
      return await axios.put(url, options);
    } catch (err) {
      console.error(err.message);
      return null;
    }
  }

  protected async delete(options: any, url?: string): Promise<any> {
    try {
      if (!url) {
        return (await axios.delete(this.APIUrl, { data: options })).data;
      } else {
        return (await axios.delete(url, { data: options })).data;
      }
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}

axios.interceptors.request.use((req) => {
  req.headers.authorization = `Bearer ${API.accessToken}`;
  return req;
});

axios.interceptors.response.use(
  (res) => {
    // Important: response interceptors **must** return the response.

    return res;
  },
  async (err) => {
    const originalRequest = err.config;
    const refreshExpired = originalRequest.url.includes('auth/refresh_token');

    if (err.response.status === 401 && refreshExpired) {
      return Promise.reject(err);
    } else {
      originalRequest._retry = true;
      await refreshToken('http://localhost:3000/auth/refresh_token');
      return axios(originalRequest);
    }

    return Promise.reject(err);
  }
);

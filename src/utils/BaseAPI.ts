import axios from 'axios';
import * as dotenv from 'dotenv';
import { urlToHttpOptions } from 'url';
import { APIOptions } from '../types';
import { refreshToken } from './refreshToken';

dotenv.config();

enum Methods {
  Get = 'Get',
  Post = 'Post',
  Put = 'Put',
  Delete = 'Delete',
}

export class API {
  static accessToken = '';
  static options: APIOptions = { debug: false };
  constructor(private APIUrl: string) {}

  protected getUrl() {
    return this.APIUrl;
  }

  private LogCalls(url: string, type: Methods) {
    if (!API.options.debug) return;

    console.log(`Sending a ${type} Request to ${url}`);
  }

  protected async get(url?: string): Promise<any> {
    try {
      if (!url) {
        this.LogCalls(this.APIUrl, Methods.Get);
        return (await axios.get(this.APIUrl)).data;
      }

      this.LogCalls(url, Methods.Get);
      return (await axios.get(url)).data;
    } catch (err) {
      console.error(err.message);
      return null;
    }
  }

  protected async post(options: any, url?: string): Promise<any> {
    try {
      if (!url) {
        this.LogCalls(this.APIUrl, Methods.Post);
        return (await axios.post(this.APIUrl, options)).data;
      }

      this.LogCalls(url, Methods.Post);
      return (await axios.post(url, options)).data;
    } catch (err) {
      console.error(err.message);
      return null;
    }
  }

  protected async put(options: any, url?: string): Promise<any> {
    try {
      if (!url) {
        this.LogCalls(this.APIUrl, Methods.Put);
        return (await axios.put(this.APIUrl, options)).data;
      }

      this.LogCalls(url, Methods.Put);
      return await axios.put(url, options);
    } catch (err) {
      console.error(err.message);
      return null;
    }
  }

  protected async delete(options: any, url?: string): Promise<any> {
    try {
      if (!url) {
        this.LogCalls(this.APIUrl, Methods.Delete);
        return (await axios.delete(this.APIUrl, { data: options })).data;
      }

      this.LogCalls(url, Methods.Delete);
      return (await axios.delete(url, { data: options })).data;
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
    } else if (err.response.status === 401) {
      originalRequest._retry = true;
      await refreshToken('http://localhost:3000/auth/refresh_token');
      return axios(originalRequest);
    }

    return Promise.reject(err);
  }
);

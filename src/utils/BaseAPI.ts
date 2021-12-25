import axios from 'axios';
import * as dotenv from 'dotenv';
import { APIOptions } from '../types';
import { refreshToken } from './refreshToken';

dotenv.config();

enum Methods {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Delete = 'DELETE',
}

export class API {
  static accessToken = '';
  static options: APIOptions = { debug: false, logFullErr: false };
  constructor(private APIUrl: string) {}

  protected getUrl() {
    return this.APIUrl;
  }

  private LogCalls(url: string, type: Methods, options?: any) {
    if (!API.options.debug) return;

    console.log(
      `Sending a ${type} Request to ${url} with ${JSON.stringify(options)}`
    );
  }

  private LogError(err: any, type: Methods, endpoint: string) {
    console.error(`${type} ${err.message} at ${endpoint}`);
    if (!API.options.logFullErr) return;

    try {
      console.log(err.toJSON());
    } catch {
      console.log(err);
    }
  }

  protected async get(url?: string): Promise<any> {
    const endpoint = url ? url : this.APIUrl;

    try {
      this.LogCalls(endpoint, Methods.Get);
      return (await axios.get(endpoint)).data;
    } catch (err: any) {
      return this.LogError(err, Methods.Get, endpoint);
    }
  }

  protected async post(options: any, url?: string): Promise<any> {
    const endpoint = url ? url : this.APIUrl;

    try {
      this.LogCalls(endpoint, Methods.Post, options);
      return (await axios.post(endpoint, options)).data;
    } catch (err: any) {
      return this.LogError(err, Methods.Post, endpoint);
    }
  }

  protected async put(options: any, url?: string): Promise<any> {
    const endpoint = url ? url : this.APIUrl;

    try {
      this.LogCalls(endpoint, Methods.Put);
      return (await axios.put(endpoint, options)).data;
    } catch (err: any) {
      return this.LogError(err, Methods.Put, endpoint);
    }
  }

  protected async delete(options: any, url?: string): Promise<any> {
    const endpoint = url ? url : this.APIUrl;

    try {
      this.LogCalls(endpoint, Methods.Delete);
      return (await axios.delete(endpoint, { data: options })).data;
    } catch (err: any) {
      return this.LogError(err, Methods.Delete, endpoint);
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

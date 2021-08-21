import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

export class API {
  //private APIUrl = 'https://reddit-api-bot2.herokuapp.com';

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

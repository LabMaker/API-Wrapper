/* Add Main Class API-MAIN which takes options as an argument
 *  These Options can be URL, TOKEN, ETC.
 *  Make use of Args inside other API calls.
 *  Only Export API-MAIN not other Classes. */

import axios from 'axios';
import { DiscordConfigAPI } from './DiscordConfig';
import { LogAPI } from './Log';
import { RedditConfigAPI } from './RedditConfig';
import { TicketAPI } from './TicketConfig';
import { API } from './utils/BaseAPI';
import { refreshToken } from './utils/refreshToken';

export * from './types';
export { DiscordConfigAPI } from './DiscordConfig';
export { RedditConfigAPI } from './RedditConfig';
export { TicketAPI } from './TicketConfig';
export { LogAPI } from './Log';

export default class LabmakerAPI {
  // private static API = 'https://reddit-api-bot2.herokuapp.com';
  constructor(private apiURL: string) {}
  public Discord = new DiscordConfigAPI(this.apiURL);
  public Log = new LogAPI(this.apiURL);
  public Reddit = new RedditConfigAPI(this.apiURL);
  public Ticket = new TicketAPI(this.apiURL);

  public async refreshAccesToken() {
    const url = `${this.apiURL}/auth/refresh_token`;

    return await refreshToken(url);
  }

  public loginURL() {
    return `${this.apiURL}/auth/login`;
  }
}

//Testing
// (async () => {
//   const discordAPI = new DiscordConfigAPI();
//   const data = await discordAPI.getOne('863423914230546462');

//   console.log(data);
// })();

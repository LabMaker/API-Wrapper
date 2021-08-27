/* Add Main Class API-MAIN which takes options as an argument
 *  These Options can be URL, TOKEN, ETC.
 *  Make use of Args inside other API calls.
 *  Only Export API-MAIN not other Classes. */

import { DiscordConfigAPI } from './DiscordConfig';
import { LogAPI } from './Log';
import { RedditConfigAPI } from './RedditConfig';
import { TicketAPI } from './TicketConfig';
import { UserAPI } from './User';
import { API } from './utils/BaseAPI';
import { refreshToken } from './utils/refreshToken';

export * from './types';
export { DiscordConfigAPI } from './DiscordConfig';
export { RedditConfigAPI } from './RedditConfig';
export { TicketAPI } from './TicketConfig';
export { LogAPI } from './Log';

export default class LabmakerAPI {
  constructor(private apiURL: string) {}

  public Discord = new DiscordConfigAPI(this.apiURL);
  public Log = new LogAPI(this.apiURL);
  public Reddit = new RedditConfigAPI(this.apiURL);
  public Ticket = new TicketAPI(this.apiURL);
  public User = new UserAPI(this.apiURL);

  public async refreshAccesToken() {
    const url = `${this.apiURL}/auth/refresh_token`;

    return await refreshToken(url);
  }

  public loginURL() {
    return `${this.apiURL}/auth/login`;
  }

  public setAccessToken(s: string) {
    API.accessToken = s;
  }
}

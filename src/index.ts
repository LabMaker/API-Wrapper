/* Add Main Class API-MAIN which takes options as an argument
 *  These Options can be URL, TOKEN, ETC.
 *  Make use of Args inside other API calls.
 *  Only Export API-MAIN not other Classes. */

export * from './types';
export { DiscordConfigAPI } from './DiscordConfig';
export { RedditConfigAPI } from './RedditConfig';
export { TicketAPI } from './TicketConfig';
export { LogAPI } from './Log';

// export class LabmakerAPI {
//   public Discord = new DiscordConfigAPI();
//   public Log = new LogAPI();
//   public Reddit = new RedditConfigAPI();
//   public Ticket = new TicketAPI();
// }

// //Testing
// (async () => {
//   const discordAPI = new DiscordConfigAPI();
//   const data = await discordAPI.getOne('863423914230546462');

//   console.log(data);
// })();

/* Add Main Class API-MAIN which takes options as an argument
 *  These Options can be URL, TOKEN, ETC.
 *  Make use of Args inside other API calls.
 *  Only Export API-MAIN not other Classes. */

import { LogAPI } from './Log';

export { DiscordConfigAPI } from './DiscordConfig';
export { RedditConfigAPI } from './RedditConfig';
export { TicketAPI } from './TicketConfig';
export { LogAPI } from './Log';

//Testing
// (async () => {
//   const logAPI = new LogAPI();
//   const data = await logAPI.getSubmissionIds(
//     'a19050a0-adff-464f-9c10-401e5ff601cb'
//   );

//   console.log(data);
// })();

export {
  GuildConfigDto,
  RedditConfigDto,
  TicketDto,
  PaymentDto,
  LogDto,
} from './types';

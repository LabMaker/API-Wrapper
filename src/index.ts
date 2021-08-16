/* Add Main Class API-MAIN which takes options as an argument
 *  These Options can be URL, TOKEN, ETC.
 *  Make use of Args inside other API calls.
 *  Only Export API-MAIN not other Classes. */

import { LogAPI } from './Log';
import { LogDto } from './types';

export { DiscordConfigAPI } from './DiscordConfig';
export { RedditConfigAPI } from './RedditConfig';
export { TicketAPI } from './TicketConfig';
export { LogAPI } from './Log';

//Testing
// (async () => {})();

export {
  GuildConfigDto,
  RedditConfigDto,
  TicketDto,
  PaymentDto,
  LogDto,
} from './types';

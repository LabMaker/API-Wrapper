import { API } from './utils/BaseAPI';
import { Guild, LogDto, RedditConfigDto } from './types';

export class GuildsAPI extends API {
  constructor(apiUrl: string) {
    super(`${apiUrl}/discord/guilds`);
  }

  async Guilds(): Promise<Guild[]> {
    return await this.get();
  }
}

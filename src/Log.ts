import { API } from './utils/BaseAPI';
import { LogDto, RedditConfigDto } from './types';

export class LogAPI extends API {
  constructor() {
    super('reddit/log');
  }

  async getLogs(nodeId: string): Promise<LogDto> {
    const url = this.getUrl() + nodeId;

    return await this.get(url);
  }

  async create(createLogDto: LogDto): Promise<RedditConfigDto> {
    return await this.post(createLogDto);
  }
}

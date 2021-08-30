import { API } from './utils/BaseAPI';
import { RedditConfigDto } from './types';

export class RedditConfigAPI extends API {
  constructor(apiUrl: string) {
    super(`${apiUrl}/reddit/config/`);
  }

  async getOne(id: string): Promise<RedditConfigDto> {
    const url = this.getUrl() + id;

    return await this.get(url);
  }

  async getAll(): Promise<RedditConfigDto[]> {
    return await this.get();
  }

  async create(createConfigDto: RedditConfigDto): Promise<RedditConfigDto> {
    return await this.post(createConfigDto);
  }

  async update(updatedConfig: RedditConfigDto): Promise<RedditConfigDto> {
    return await this.put(updatedConfig);
  }

  async updateMessage(
    nodeId: string,
    message: string
  ): Promise<RedditConfigDto> {
    const url = this.getUrl() + nodeId;
    return await this.put({ pmBody: message }, url);
  }

  async deleteConfig(nodeId: string): Promise<any> {
    const url = this.getUrl() + nodeId;

    return await this.delete({}, url);
  }
}

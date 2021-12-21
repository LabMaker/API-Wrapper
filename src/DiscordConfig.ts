import { API } from './utils/BaseAPI';
import { GuildConfigDto, PaymentDto } from './types';

export class DiscordConfigAPI extends API {
  constructor(apiUrl: string) {
    super(`${apiUrl}/discord/config/`);
  }

  async getAll(): Promise<GuildConfigDto[]> {
    return await this.get();
  }

  async getOne(id: string): Promise<GuildConfigDto> {
    const url = this.getUrl() + id;

    return await this.get(url);
  }

  async create(_id: string): Promise<GuildConfigDto> {
    const paymentConfigId = '0';
    return await this.post({ _id, paymentConfigId });
  }

  async update(updatedConfig: GuildConfigDto): Promise<GuildConfigDto> {
    return await this.put(updatedConfig);
  }

  async getPayments(paymentId: number): Promise<PaymentDto[]> {
    const url =
      this.getUrl().substring(0, this.getUrl().length - 7) +
      `payment/${paymentId}`;

    return await this.get(url);
  }

  async createPayments(payments: PaymentDto[]): Promise<PaymentDto[] | any> {
    const url =
      this.getUrl().substring(0, this.getUrl().length - 7) + 'payment/';

    return await this.post(payments, url);
  }

  async updatePayments(payments: PaymentDto[]): Promise<PaymentDto[] | any> {
    const url =
      this.getUrl().substring(0, this.getUrl().length - 7) + 'payment/';

    return await this.put(payments, url);
  }

  async deletePayments(paymentId: number[]): Promise<PaymentDto[] | any> {
    const url =
      this.getUrl().substring(0, this.getUrl().length - 7) + 'payment/';

    return await this.delete(paymentId, url);
  }
}

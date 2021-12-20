import { CreateOrderDto } from '.';
import { API } from './utils/BaseAPI';

export class PayAPI extends API {
  constructor(apiUrl: string) {
    super(`${apiUrl}/pay/`);
  }

  async createOrder(ticketId: string, price: string): Promise<CreateOrderDto> {
    return await this.get(this.getUrl() + `create_order/${ticketId}/${price}`);
  }
}

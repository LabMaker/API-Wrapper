export type GuildConfigDto = {
  _id: string;
  name: string;
  icon: string | null;
  paymentConfigId: string;
  prefix: string;
  embedImageUrl: string;
  autoSwitcher: boolean;
  autoTicket: boolean;
  autoReact: boolean;
};

export type PaymentDto = {
  _id?: string;
  serverId: string;
  name: string;
  value: string;
  type: string;
  newPayment?: boolean;
  deletedPayment?: boolean;
};

export type CreateOrderDto = {
  /**
   * Channel ID to ticket relating to payment.
   */
  channelId: string;

  /**
   * URL to checkout.
   */
  url: string;

  /**
   * Payment breakdown (fees, gross, net profit)
   */
  breakdown: CreateOrderBreakdownDto;
};

export type CreateOrderBreakdownDto = {
  fee: CreateOrderBreakdownAmountDto;
  gross: CreateOrderBreakdownAmountDto;
  net: CreateOrderBreakdownAmountDto;
};

export type CreateOrderBreakdownAmountDto = {
  value: string;
  currencyCode: string;
};

export type TicketDto = {
  _id: string;
  ticketId: string;
  serverId: string;
  channelId: string;
  type: string;
  subject: string;
  time: string;
  level: string;
  budget: string;
  submitted: boolean;
};

export type RedditConfigDto = {
  _id: string;
  clientId: string;
  clientSecret: string;
  username: string;
  password: string;
  userAgent: string;
  title: string;
  pmBody: string;
  delay: number;
  subreddits: string[];
  forbiddenWords: string[];
  blockedUsers: string[];
};

export type LogDto = {
  _id: string;
  nodeId: string;
  message: string;
  subId: string;
  username: string;
  subreddit: string;
  createdAt?: string;
  pm: boolean;
};

export type UserDto = {
  _id: string;
  username: string;
  discriminator: string;
  avatar: string | null;
  nodes: string[];
};

export type Guild = {
  id: string;
  name: string;
  icon: string;
  owner: boolean;
  permissions: string;
  features: string[];
  joined: boolean;
};

export type APIOptions = {
  debug?: boolean;
};

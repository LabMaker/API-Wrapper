export class GuildConfigDto {
  _id: string;
  paymentConfigId: Number;
  prefix: string;
  embedImageUrl: string;
  autoSwitcher: Boolean;
  autoTicket: Boolean;
  autoReact: Boolean;
}

export class PaymentDto {
  _id: string;
  nodeId: Number;
  name: string;
  value: string;
  type: string;
}

export class TicketDto {
  _id: string;
  ticketId: Number;
  serverId: string;
  channelId: string;
  type: string;
  subject: string;
  time: string;
  level: string;
  budget: string;
  submitted: Boolean;
}

export class RedditConfigDto {
  _id: string;
  clientId: string;
  clientSecret: string;
  username: string;
  password: string;
  userAgent: string;
  title: string;
  pmBody: string;
  subreddits: string[];
  forbiddenWords: string[];
}

export class LogDto {
  _id: string;
  nodeId: Number;
  message: string;
  subId: string;
  username: string;
  subreddit: string;
  time: string;
  pm: Boolean;
}

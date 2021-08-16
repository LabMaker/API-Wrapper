export type GuildConfigDto = {
  _id: string;
  paymentConfigId: string;
  prefix: string;
  embedImageUrl: string;
  autoSwitcher: Boolean;
  autoTicket: Boolean;
  autoReact: Boolean;
};

export type PaymentDto = {
  _id: string;
  nodeId: string;
  name: string;
  value: string;
  type: string;
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
  submitted: Boolean;
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
};

export type LogDto = {
  _id: string;
  nodeId: string;
  message: string;
  subId: string;
  username: string;
  subreddit: string;
  pm: Boolean;
};

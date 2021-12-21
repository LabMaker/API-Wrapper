export type GuildConfigDto = {
  id: string;
  name: string;
  icon: string | null;
  prefix: string;
  embedImageUrl: string;
  autoSwitcher: boolean;
  autoTicket: boolean;
  autoReact: boolean;
  paymentConfigId: string;
  tickets: TicketDto[] | null;
};

export type PaymentDto = {
  id?: number;
  name: string;
  value: string;
  type: string;
  serverId: string;
  newPayment?: boolean;
  deletedPayment?: boolean;
};

export type TicketDto = {
  id: number;
  ticketId: number;
  serverId: string;
  channelId: string;
  type: string;
  subject: string;
  time: string;
  level: string;
  budget: string;
  submitted: boolean;
  discordConfig?: GuildConfigDto;
};

export type RedditConfigDto = {
  id: number;
  clientId: string;
  clientSecret: string;
  username: string;
  password: string;
  userAgent: string;
  title: string;
  pmBody: string;
  subreddits: string[];
  forbiddenWords: string[];
  blockedUsers: string[];
  userId: string;
  creator?: UserDto;
  delay: number;
};

export type LogDto = {
  id: number;
  nodeId: number;
  message: string;
  subId: string;
  username: string;
  subreddit: string;
  createdAt?: string;
  pm: boolean;
  redditConfig?: RedditConfigDto[];
};

export type UserDto = {
  id: string;
  username: string;
  discriminator: string;
  avatar?: string;
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

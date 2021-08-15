import { DiscordConfigAPI } from './DiscordConfig';

const discordConfig = new DiscordConfigAPI();

(async () => {
  const data = await discordConfig.getAll();
  console.log(data);
})();

export { DiscordConfigAPI };

export type Snowflake = string

export interface BotObject {
  /**
   * The cdn hash of the bot's avatar if the bot has none
   */
  defAvatar: string
  /**
   * The custom bot invite url of the bot
   */
  invite?: string
  /**
   * The website url of the bot
   */
  website?: string
  /**
   * The link to the github repo of the bot
   */
  github?: string
  /**
   * The long description of the bot. Can contain HTML and/or Markdown
   */
  longdesc?: string
  /**
   * The short description of the bot
   */
  shortdesc: string
  /**
   * The prefix of the bot
   */
  prefix: string
  /**
   * The library of the bot
   * @deprecated
   */
  lib: string
  /**
   * The Snowflake clientId of the bot
   */
  clientid: Snowflake
  /**
   * The avatar hash of the bot's avatar
   */
  avatar?: string
  /**
   * The Snowflake id of the bot
   */
  id: Snowflake
  /**
   * The discriminator of the bot
   */
  discriminator: string
  /**
   * The username of the bot
   */
  username: string
  /**
   * The date when the bot was approved (datestring)
   */
  date: string
  /**
   * Array the of the guilds featured on the bot page as Snowflakes
   */
  guilds?: Array<Snowflake>
  /**
   * Amount of servers the bot is in per shard.
   */
  shards?: Array<number> | null
  /**
   * The amount of upvotes the bot has this month
   */
  monthlyPoints: number
  /**
   * The amount of upvotes the bot has
   */
  points: number
  /**
   * The certified status of the bot
   */
  certifiedBot: boolean
  /**
   * Array the of the bot owners Snowflakes. First one in the array is the main owner
   */
  owners: Array<Snowflake>
  /**
   * The tags of the bot
   */
  tags: Array<string>
  /**
   * The amount of servers the bot has according to posted stats
   */
  server_count?: number
  /**
   * The support server invite code of the bot
   */
  support?: string
  /**
   * The amount of shards the bot has according to posted stats
   */
  shard_count?: number
  /**
   * The full URL to the banner of the bot
   */
  bannerUrl?: string | null
  /**
   * The vanity url of the bot
   */
  vanity?: string
  /**
   * The guild id for the donatebot setup
   */
  donatebotguildid?: string
}

export interface BotPostStatsObject {
  /**
   * Amount of servers the bot is in. If an Array, it acts like shards
   */
  server_count: number | Array<number>
  /**
   * Amount of servers the bot is in per shard
   */
  shards?: Array<number>
  /**
   * The zero-indexed id of the shard posting. Makes server_count set the shard specific server count
   */
  shard_id?: number
  /**
   * The amount of shards the bot has
   */
  shard_count?: number
}

export interface UserVotedObject {
  /**
   * Returns a number if user has voted, otherwise returns 0
   */
  voted: number
}

export interface BotStatsObject {
  /**
   * The amount of servers the bot is in
   */
  server_count?: number
  /**
   * The amount of servers the bot is in per shard
   */
  shards: Array<number>
  /**
   * The amount of shards a bot has
   */
  shard_count?: number
}

export interface BotVotesObject {
  /**
   * The username of the user
   */
  username: string
  /**
   * The Snowflake id of the user
   */
  id: Snowflake
  /**
   * The avatar hash of the user's avatar
   */
  avatar: string
}

export interface BotsSearchQuery {
  /**
   * The amount of bots to return. Max. 500
   */
  limit?: number
  /**
   * Amount of bots to skip
   */
  offset?: number
  /**
   * A search string in the format of field: value field2: value2
   */
  search?: string
  /**
   * The field to sort by. Prefix with - to reverse the order
   */
  sort?: string
  /**
   * A comma separated list of fields to show
   */
  fields?: string
}

export interface BotsSearchResponse {
  /**
   * The matching bots
   */
  results: Array<BotObject>
  /**
   * The limit used
   */
  limit: number
  /**
   * The offset used
   */
  offset: number
  /**
   * The length of the results array
   */
  count: number
  /**
   * The total number of bots matching your search
   */
  total: number
}

export interface UserObject {
  /**
   * The discriminator of the user
   */
  discriminator: string
  /**
   * The avatar hash of the user's avatar
   */
  avatar?: string | null
  /**
   * The Snowflake id of the user
   */
  id: Snowflake
  /**
   * The username of the user
   */
  username: string
  /**
   * The cdn hash of the user's avatar if the user has none
   */
  defAvatar: string
  /**
   * The banner image url of the user
   */
  banner?: string
  /**
   * The bio of the user
   */
  bio?: string
  /**
   * The custom hex color of the user (not guaranteed to be valid hex)
   */
  color?: string
  /**
   * The admin status of the user
   */
  admin: boolean
  /**
   * The website moderator status of the user
   */
  webMod: boolean
  /**
   * The mod status of the user
   */
  mod: boolean
  /**
   * The certified status of the user
   */
  certifiedDev: boolean
  /**
   * The supporter status of the user
   */
  supporter: boolean
  /**
   * The social usernames of the user
   */
  social?: UserSocials
}

export interface UserSocials {
  /**
   * The github username of the user
   */
  github: string
  /**
   * The instagram username of the user
   */
  instagram: string
  /**
   * The reddit username of the user
   */
  reddit: string
  /**
   * The twitter username of the user
   */
  twitter: string
  /**
   * The youtube channel id of the user
   */
  youtube: string
}

export interface BotWebhook {
  /**
   * Discord Snowflake of the user who voted
   */
  user: Snowflake
  /**
   * The type of the vote (should always be "upvote" except when using the test button it's "test")
   */
  type: 'upvote' | 'test'
  /**
   * Discord Snowflake of the bot that received a vote
   */
  bot: Snowflake
  /**
   * Whether the weekend multiplier is in effect, meaning users votes count as two
   */
  isWeekend?: boolean
  /**
   * Query string params found on the /bot/:ID/vote page. Example: ?a=1&b=2
   */
  query?: string
}

export interface ServerWebhook {
  /**
   * Discord Snowflake of the user who voted
   */
  user: Snowflake
  /**
   * The type of the vote (should always be "upvote" except when using the test button it's "test")
   */
  type: 'upvote' | 'test'
  /**
   * Discord Snowflake of the guild that received a vote
   */
  guild: Snowflake
  /**
   * Query string params found on the /servers/:ID/vote page. Example: ?a=1&b=2.
   */
  query?: string
}

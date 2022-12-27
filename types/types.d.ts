export type ErrorCode = 
    "-1"    | 
    "-2"    | 
    "-12"

export type GDResponse = string

export type GDSearchParams = 
    { secret: string } & Record<string, string>

export type FormattedResponse =  Record<`${number}`, string>

export enum SocialBaseUrl {
    twitch = "twitch.tv",
    twitter = "twiiter.com",
    youtube =  "youtube.com"
}

export type SocialLink
    <T extends SocialBaseUrl> = `https://${T}/${string}`

export enum UserListType {
    Friends = '0',
    Blocked = '1'
}
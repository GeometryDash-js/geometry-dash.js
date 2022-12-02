import { SocialBaseUrl, SocialLink } from "./types"

    // [ User ] \\
    
export interface UserAccountData {
    username: string
    accountID: string
    playerID: string
}
export interface UserStatData {
    globalRank: string | null
    stars: string
    diamonds: string
    coins: string
    userCoins: string
    demons: string
    creatorPoints: string
}

export interface UserSocialData {
    twitch: SocialLink<SocialBaseUrl.twitch> | null
    twitter: SocialLink<SocialBaseUrl.twitter> | null
    youtube: SocialLink<SocialBaseUrl.youtube> | null
}
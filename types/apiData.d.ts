import { SocialBaseUrl, SocialLink } from "./types"

    // [ User ] \\
    
export interface UserStatData {
    globalRank: number | null
    stars: number
    diamonds: number
    coins: number
    userCoins: number
    demons: number
    creatorPoints: number
}

export interface UserSocialData {
    twitch: SocialLink<SocialBaseUrl.twitch> | null
    twitter: SocialLink<SocialBaseUrl.twitter> | null
    youtube: SocialLink<SocialBaseUrl.youtube> | null
}
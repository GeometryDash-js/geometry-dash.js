import { UserSocialData, UserStatData } from "./apiData";
import { FormattedResponse, SocialBaseUrl, SocialLink } from "./types";

export class User {
    public readonly username: string
    public readonly accountID: string
    public readonly playerID: string
    public readonly stats: UserStatData
    public readonly social: UserSocialData
    // TODO: Icons
    private static parseData(data: FormattedResponse): FormattedResponse
    constructor(data: FormattedResponse)
}

export class Comment {
    
}

export class Artist {
    public readonly name: string
    public readonly id: string | null
    public readonly youtube: SocialLink<SocialBaseUrl.youtube> | null
    private static parseData(data: FormattedResponse): FormattedResponse
    constructor(data: FormattedResponse)
}

export class Song {
    public readonly name: string
    public readonly newgroundsID: string
    public readonly author: Artist
    public readonly fileSize: `${number} mb`
    public readonly videoUrl: string | null
    public readonly isVerified: boolean
    public readonly url: string
    // public readonly songPriority: string - Not needed
    constructor(data: FormattedResponse)
}

export class Icons {
    // TODO
}
import { UserAccountData, UserSocialData, UserStatData } from "./apiData";
import { FormattedResponse, SocialBaseUrl, SocialLink } from "./types";

export class User {
    public readonly info: UserAccountData
    public readonly stats: UserStatData
    public readonly social: UserSocialData
    private static parseData(data: FormattedResponse): FormattedResponse
    constructor(data: FormattedResponse)
}

export class BaseComment {

}

export class Artist {
    name: string
    youtube: SocialLink<SocialBaseUrl.youtube> | null
}
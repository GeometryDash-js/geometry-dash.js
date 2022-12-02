import { UserAccountData, UserSocialData, UserStatData } from "../../../types/apiData";
import { FormattedResponse, SocialBaseUrl, SocialLink } from "../../../types/types";

export default class User {
    public readonly info: UserAccountData
    public readonly stats: UserStatData
    public readonly social: UserSocialData

    constructor(data: FormattedResponse) {

        data = User.parseData(data)

        this.info = {
            username: data['1'],
            accountID: data['2'],
            playerID: data['16']
        }

        this.stats = {
            globalRank: data['30'] == '0' ? null : data['30'],
            stars: data['3'],
            diamonds: data['46'],
            coins: data['13'],
            userCoins: data['17'],
            demons: data['4'],
            creatorPoints: data['8']
        }

        this.social = {
            youtube: data['20'] == '' ? null : data['20'] as SocialLink<SocialBaseUrl.youtube> | null,
            twitch: data['45'] == '' ? null : data['45'] as SocialLink<SocialBaseUrl.twitch> | null,
            twitter: data['44'] == '' ? null : data['44'] as SocialLink<SocialBaseUrl.twitter> | null,
        }
    }

    private static parseData(data: FormattedResponse): FormattedResponse {
        data['20'] = ( data['20'] == '' ? data['20'] : `https://youtube.com/channel/${data["20"]}` )
        data['45'] = ( data['45'] == '' ? data['45'] : `https://twitch.tv/${data["45"]}` )
        data['44'] = ( data['44'] == '' ? data['44'] : `https://twitter.com/${data["44"]}` )
        return data
    }
}
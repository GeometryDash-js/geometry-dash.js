import { FormattedResponse, SocialBaseUrl, SocialLink } from "../../../types/types";

export default class Artist {
    public readonly name: string
    public readonly youtube: SocialLink<SocialBaseUrl.youtube> | null

    constructor(data: FormattedResponse) {
        data = Artist.parseData(data)
        this.name = data['4'] 
        this.youtube = data['7'] == '' ? null : data['7'] as SocialLink<SocialBaseUrl.youtube> | null
    }

    private static parseData(data: FormattedResponse): FormattedResponse {
        data['7'] = ( data['7'] ? `https://youtube.com/channel/${data["7"]}` : '' )
        return data
    }
}
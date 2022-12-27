import { FormattedResponse } from "../../../types/types"
import Artist from "./Artist"

export default class Song {
    public readonly name: string
    public readonly id: string
    public readonly author: Artist
    public readonly fileSize: `${number} mb`
    public readonly videoUrl: string | null
    public readonly isVerified: boolean
    public readonly url: string
    // public readonly songPriority: string - Not needed - When you play a level with that song it will be the first in the "Saved Songs" list (user-dependent)

    constructor(data: FormattedResponse) {
        this.name = data['2']
        this.id = data['1']
        this.author = new Artist(data)
        this.fileSize = `${parseFloat(data['5'])} mb`
        this.videoUrl = data['6'] == '' ? null : data['6']
        this.isVerified = data['8'] == '1'
        this.url = data['10']
    }
}
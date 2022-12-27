import Song from "../Structures/ApiStructures/Song"
import formatResponse from "../Utils/formatResponse"
import httpClient from "../Utils/httpClient"
import params from "../Utils/params"

/**
 * @param songID The Newgounds ID of the song you want to get.
*/

export default async function getSongInfo(songID: string): Promise<Song> {
    const data = await httpClient.post('getGJSongInfo', {
        secret: params.secrets.common,
        songID: songID,
    }) as string

    const formatted = formatResponse(data, '~|~')
    return new Song(formatted)
}
import formatResponse from "../Utils/formatResponse"
import httpClient from "../Utils/httpClient"
import params from "../Utils/params"

/**
 * @param songID The Newgounds ID of the song you want to get.
*/

export default async function getSongInfo(songID: string) {
    const data = await httpClient.post('getGJSongInfo', {
        secret: params.secrets.common,
        songID: songID,
    }) as string

    console.log(data)
    const formatted = formatResponse(data, '~|~')
    console.log(formatted)
}
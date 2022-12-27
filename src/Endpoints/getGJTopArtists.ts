import Artist from "../Structures/ApiStructures/Artist"
import { getTopArtistsOptions } from "../../types/options"
import formatResponse from "../Utils/formatResponse"
import httpClient from "../Utils/httpClient"
import params from "../Utils/params"
import { Collection } from "../Structures/Collection"
import { ErrorCode } from "../../types/types"

/**
    * @param options More options for getting the artists (page)
*/

export default async function getTopArtists(options?: getTopArtistsOptions): Promise<Collection<string, Artist> | ErrorCode> {
    const data = await httpClient.post('getGJTopArtists', {
        secret: params.secrets.common,
        page: options?.page?.toString() || '0'
    })

    const dataArr = data.split(/\||#/)
    const allArtists: Collection<string, Artist> = new Collection()
    const pageInfo =  ( Array.isArray(dataArr)? dataArr.pop() as string : ( dataArr as string ).replace('#', '') ).split(':')
    if(pageInfo[0] < pageInfo[1] + allArtists.size) return '-2'

    for(const artist of dataArr) {
        const formatted = formatResponse(artist, ':')
        const artistObj = new Artist(formatted)
        
        allArtists.set(artistObj.name, artistObj)
    }

    return allArtists
}
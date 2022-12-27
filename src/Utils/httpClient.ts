import axios from 'axios'
import params from './params'
import { ErrorCode, GDSearchParams, GDResponse } from '../../types/types'
import GDAPIError from '../Structures/Errors/GDApiError'

class HttpClient {
    public constructor() { 
        axios.defaults.headers.common["User-Agent"] = ""
    }

    /**
     * 
     * @param endpoint The endpoint you want to use for the URL
     */
    private static urlGenerator(endpoint: string) {
        return new URL(`${endpoint}.php`, params.baseUrl)
    }

    /**
     * @param endpoint The server endpoint you want to get data from
     * @param urlSearchParams The url search params (object) for the endpoint 
     */
    public async post(endpoint: string, urlSearchParams: GDSearchParams): Promise<GDResponse | ErrorCode> {
        const url = HttpClient.urlGenerator(endpoint)
        const res = await axios.post(url.toString(), new URLSearchParams(urlSearchParams))
        const data = res.data.toString() as ErrorCode | string

        switch(data) {
            case '-1': throw new GDAPIError({ cause: 'not found', errorCode: data, endpoint: endpoint })
            case '-2': return '-2'
            case '-12': throw new GDAPIError({ cause: 'account banned', errorCode: data, endpoint: endpoint })
            default: return data
        }
    }
}

export default new HttpClient()
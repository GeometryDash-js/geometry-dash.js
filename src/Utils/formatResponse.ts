import { FormattedResponse, GDResponse } from "../../types/types"

/**
 * 
 * @param str The string of characters returned by a GD request
 * @param separator The char in which you want to split the string
 * @returns The string data as an object (FormattedResponse)
 */
export default function formatResponse(str: GDResponse, separator: string): FormattedResponse {
    const formatted: FormattedResponse = {}
    const keyVals = str.split(separator)
    
    for (let i = 0; i < keyVals.length; i += 2)
        formatted[keyVals[i] as `${number}`] = keyVals[i + 1]

    return formatted
}
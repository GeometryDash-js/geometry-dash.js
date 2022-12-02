import { FormattedResponse, GDResponse } from "../../types/types"

export default function formatResponse(str: GDResponse, separator: string): FormattedResponse {
    const formatted: FormattedResponse = {}
    const keyVals = str.split(separator)
    
    for (let i = 0; i < keyVals.length; i += 2)
        formatted[keyVals[i] as `${number}`] = keyVals[i + 1]

    return formatted
}
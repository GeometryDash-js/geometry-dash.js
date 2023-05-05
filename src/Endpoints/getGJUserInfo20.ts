import User from "../Structures/ApiStructures/User"
import formatResponse from "../Utils/formatResponse"
import httpClient from "../Utils/httpClient"
import params from "../Utils/params"

/**
 * @param userID The Geometry Dash account ID from the user you want to get.
*/

// TODO: check response and use all keys

export default async function getUserFromID(accountID: string): Promise<User> {
    const data = await httpClient.post('getGJUserInfo20', {
        secret: params.secrets.common,
        targetAccountID: accountID
    })

    const formatted = formatResponse(data, ':')
    console.log(formatted)
    return new User(formatted)
}
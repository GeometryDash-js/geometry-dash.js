import { FormattedResponse } from "../../../types/types"
import { Collection } from "../Collection"
import { UserListType } from "../../Utils/enums"
import httpClient from "../../Utils/httpClient"
import params from "../../Utils/params"
import formatResponse from "../../Utils/formatResponse"
import Manager from "./Manager"

export default class RelationshipsManager extends Manager {

    public blockedUsers: Collection<string, FormattedResponse> | null = null
    public friends: Collection<string, FormattedResponse> | null = null
    public friendRequests: Collection<string, FormattedResponse> | null = null

    public async blockUser(targetUserID: string) {

        await httpClient.post('blockGJUser20', {
            secret: params.secrets.common,
            accountID: this.client.accountID as string,
            gjp: this.client.gjp as string,
            targetAccountID: targetUserID,
        })

        // TODO
    }

    public async getUserList(type: UserListType): Promise<Collection<string, FormattedResponse> | null> {

        const data = await httpClient.post("getGJUserList20", {
            accountID: this.client.accountID as string,
            gjp: this.client.gjp as string,
            secret: params.secrets.common,
            type: type
        })

        if(data == '-2') 
            return type == UserListType.Friends ? 
                this.friends = null : 
                this.blockedUsers = null

        for(const obj of data) {
            const plrData = formatResponse(obj, ':')
            if(type == UserListType.Friends) {
                this.friends = new Collection()
                this.friends.set(plrData['1'], plrData)
            }

            else if(type == UserListType.Blocked) {
                this.blockedUsers = new Collection()
                this.blockedUsers.set(plrData['1'], plrData)
            }
        }

        return type == UserListType.Friends ? 
            this.friends : 
            this.blockedUsers
    }
}
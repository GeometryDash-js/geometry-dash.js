import { postCommentOptions } from "./options"
import { Collection } from "../src/Structures/Collection"
import { UserListType, FormattedResponse } from "./types"

export default class Client {
    public username: string | null
    public accountID: string | null
    public playerID: string | null
    public gjp: string | null
    public comments: CommentManager | null
    public login(username: string, password: string): Promise<Client>
}

export class CommentManager {
    public readonly client: Client
    public postComment(content: string, levelID: string, options: postCommentOptions): Promise<void>
    public postProfileComment(content: string): Promise<void>
    constructor(cli: Client)
}

export class RelationshipsManager {
    public readonly client: Client
    public getUserLIst(type: UserListType): Promise<Collection<string, FormattedResponse> | null>
    constructor(cli: Client)
}
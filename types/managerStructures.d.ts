import { postCommentOptions } from "./options"
import { Collection } from "../src/Structures/Collection"
import { UserListType, FormattedResponse } from "./types"

export class Base64 {
    public static encrypt(str: string): string
    public static decrypt(str: string): string
}

export default class XOR {
    public static base(str: string, key: number): string
    public static encrypt(str: string, key: number): string
    public static decrypt(str: string, key: number): string
}

export class Client {
    public username: string | null
    public accountID: string | null
    public playerID: string | null
    public gjp: string | null
    public comments: CommentManager | null
    public login(username: string, password: string): Promise<Client>
}

export class Manager {
    public readonly client: Client
    constructor(cli: Client)
}

export class CommentManager extends Manager {
    // Need to make Comment Class
    public postComment(content: string, levelID: string, options: postCommentOptions): Promise<void>
    public postProfileComment(content: string): Promise<void>
}

export class RelationshipsManager extends Manager {
    public getUserLIst(type: UserListType): Promise<Collection<string, FormattedResponse> | null>
    public blockUser(targetUserID: string): Promise<void> // TODO
}
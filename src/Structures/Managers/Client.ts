import XOR from "../Encryptors/XOR"
import httpClient from "../../Utils/httpClient"
import params from "../../Utils/params"
import generateUUID from "../../Utils/uuid"
import CommentManager from "./CommentManager"
import RelationshipsManager from "./RelationshipManager"
import { UserListType } from "../../Utils/enums"
import formatResponse from "../../Utils/formatResponse"

export default class Client {
    public username: string | null = null
    public accountID: string | null = null
    public playerID: string | null = null
    public gjp: string | null = null

    public comments: CommentManager | null = null
    public relationships: RelationshipsManager | null = null

    /** 
        * @param username Your Geometry Dash account username
        * @param password Your Geometry Dash account password
        * @returns Client instance
    */
    public async login(username: string, password: string): Promise<Client> {

        const data = await httpClient.post('accounts/loginGJAccount', {
            secret: params.secrets.account,
            udid: generateUUID(),
            userName: username,
            password: password
        })

        const split = data.split(',')
        this.username = username
        this.accountID = split[0]
        this.playerID = split[1]
        this.gjp = XOR.encrypt(password, 37526)
        this.comments = new CommentManager(this)
        this.relationships = new RelationshipsManager(this)
        await this.relationships.getUserList(UserListType.Blocked)
        await this.relationships.getUserList(UserListType.Friends)
        await this.loadProfile()
        return this
    }

    private async loadProfile() {
        const data = await httpClient.post('getGJUserInfo20', {
            secret: params.secrets.common,
            targetAccountID: this.accountID as string,
            accountID: this.accountID as string,
            gjp: this.gjp as string
        })
    
        const formatted = formatResponse(data, ':')
        console.log(formatted)
    }
}
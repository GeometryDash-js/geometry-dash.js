import encryptor from "../../Utils/encryptor"
import httpClient from "../../Utils/httpClient"
import params from "../../Utils/params"
import generateUUID from "../../Utils/uuid"
import CommentManager from "./CommentManager"
import RelationshipsManager from "./RelationshipManager"

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
        this.gjp = encryptor.xor.encrypt(password, 37526)

        this.comments = new CommentManager(this)

        return this
    }

}
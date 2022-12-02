import Client from "./Client"
import { postCommentOptions } from '../../../types/options'
import GDPostError from "../Errors/GDPostError"
import encryptor from "../../Utils/encryptor"
import httpClient from "../../Utils/httpClient"
import params from "../../Utils/params"

export default class CommentManager {

    public readonly client: Client

    /**
     * @param content The comment you want to post
     * @param levelID The ID of the level in which you want to post the comment
     * @param options More options for posting the comment (percent)
     */

    public async postComment(content: string, levelID: string, options: postCommentOptions): Promise<void> {
        if(content.includes('\n')) throw new GDPostError('Comments can\'t include line breaks.', 'uploadGJComment21')
        if(content == '') throw new GDPostError('You can\'t send empty comments.', 'uploadGJComment21')
        if(!options) options = { percent: 0 }
        if(!options.percent) options.percent = 0
        if(options.percent > 100 || options.percent < 0) throw new GDPostError('Level percent can\'t be lower than 0 nor higher than 100.', 'uploadGJComment21')
        for(const char of content) {
            if(char.charCodeAt(0) > 255) throw new GDPostError('Comments can only contain ASCII characters between 0 and 255.', 'uploadGJComment21')
        }

        const comment64 = encryptor.base64.encrypt(content)
        const chk = encryptor.chk(this.client.username + comment64 + levelID + options.percent.toString(), '0xPT6iUrtws0J', 29481)

        await httpClient.post('uploadGJComment21', {
           secret: params.secrets.common,
           accountID: this.client.accountID as string,
           gjp: this.client.gjp as string,
           userName: this.client.username as string,
           comment: comment64,
           levelID: levelID,
           percent: options.percent.toString(),
           chk: chk
        })
    }

    /**
     * @param content The comment you want to post
    */

    public async postProfileComment(content: string): Promise<void> {
        if(content.includes('\n')) throw new GDPostError('Comments can\'t include line breaks.', 'uploadGJComment21')
        if(content == '') throw new GDPostError('You can\'t send empty comments.', 'uploadGJComment21')
        for(const char of content) {
            if(char.charCodeAt(0) > 255) throw new GDPostError('Comments can only contain ASCII characters between 0 and 255.', 'uploadGJComment21')
        }

        const comment64 = encryptor.base64.encrypt(content)

        await httpClient.post('uploadGJAccComment20', {
           secret: params.secrets.common,
           accountID: this.client.accountID as string,
           gjp: this.client.gjp as string,
           userName: this.client.username as string,
           comment: comment64,
        })
    }

    constructor(cli: Client) {
        this.client = cli
    }
}
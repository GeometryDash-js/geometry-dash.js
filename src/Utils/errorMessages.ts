import { GDSearchParams } from "../../types/types"

export default class ErrorMessage {
    private params: GDSearchParams
    public errorMessages: Record<string, Record<string, string>>
    constructor(params: GDSearchParams) {
        this.params = params
        this.errorMessages = this.getErrorMessages()
    }

    private getErrorMessages() {
        return {
            'getGJAccountComments': {
                '-1': `Couldn't get profile comments from player ID "${this.params["userID"]}". This can either mean that the player stated doesn't or that they have no comments in their profile.`
            },
            'getGJUserInfo20': {
                '-1': `User ID "${this.params['targetAccountID']}" doesn't exist.`
            },
            'accounts/loginGJAccount': {
                '-1': 'Invalid login credentials! Check that your username and password are correct.',
                '-12': 'This account is banned from the Geometry Dash servers.'
            },
            'uploadGJComment21': {
                '-1': 'That levelID doesn\'t exist.'
            },
            'getGJFriendRequests20': {
                '-2': 'Client has no friend requests.'
            },
            'getGJUserList20': {
                '-2': this.params['type'] == "0" ?
                    `Client "${this.params['accountID']}" doesn't have any friends.` : 
                    `Client "${this.params['accountID']}" hasn't blocked any users.`
            },
            'blockGJUser20': {
                '-1': `You can't block user "${this.params['targetAccountID']}" as they don't exist.`
            },
            'getGJCommentHistory': {
                '-1': `Couldn't get comments from player ID "${this.params["userID"]}". This can either mean that the player stated doesn't or that they have no comments in their profile.`
            },
            'getGJAccountComments20': {
                '-1': `Couldn't get profile comments from user ID "${this.params["accountID"]}" as it doesn't exist.`
            },
            'getGJSongInfo': {
                '-1': `Couldn't get song info for song ID "${this.params["songID"]}" as it doesn't exist.`,
                '-2': `Couldn't get song info for song ID "${this.params["songID"]}" as it is not allowed to be used in Geometry Dash.`
            }
        }
    }
}
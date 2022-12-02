export default class GDPostError extends Error {

    private readonly endpoint: string

    constructor(msg: string, endpoint: string) {

        super()
        this.name = 'GDPostError'
        this.endpoint = endpoint
        this.message = `${endpoint}: ${msg}`

    }

}
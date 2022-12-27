export default class GDPostError extends Error {
    constructor(msg: string, endpoint: string) {
        super()
        this.name = 'GDPostError'
        this.message = `${endpoint}: ${msg}`
    }
}
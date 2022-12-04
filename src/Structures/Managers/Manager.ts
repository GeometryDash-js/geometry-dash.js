import Client from "./Client"

export default class Manager {
    public readonly client: Client
    constructor(cli: Client) {
        this.client = cli
    }
}
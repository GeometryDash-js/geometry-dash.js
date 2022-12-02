import { format } from "util" 
import { ErrorCode, GDSearchParams } from "../../../types/types"
import ErrorMessage from "../../Utils/errorMessages"

export default class GDAPIError extends Error {

    private readonly errorCode: ErrorCode
    private readonly endpoint: string

    constructor({ cause, errorCode, endpoint }: { cause: string, errorCode: ErrorCode, endpoint: string }) {

        super()
        this.name = 'GDAPIError'
        this.errorCode = errorCode
        this.endpoint = endpoint
        this.message = `${endpoint}.php: Got Response ${errorCode} (${cause}). `

    }

    private getMessage(params: GDSearchParams) {

        this.message += `${new ErrorMessage(params).errorMessages[this.endpoint][this.errorCode]}`
        this.message = format(this.message, params)

    }

}
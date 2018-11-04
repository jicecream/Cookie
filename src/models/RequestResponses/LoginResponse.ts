import {RequestResponse} from "@/models/RequestResponse"
import {User} from "@/models/User"

export class LoginResponse extends RequestResponse {
    user: User
    token: string

    constructor(data: any) {
        super(data.statusCode, data.message)
        //@ts-ignore
        this.user = Object.assign(new User, data.data.user)
        this.token = data.data.token
    }
}
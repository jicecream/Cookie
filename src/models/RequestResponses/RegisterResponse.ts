import {RequestResponse} from "@/models/RequestResponse"
import {User} from "@/models/User"

export class RegisterResponse extends RequestResponse {

    user: User

    constructor(data: any) {
        super(data.statusCode, data.message)
        //@ts-ignore
        this.user =  Object.assign(new User, data.data.user)
    }
}
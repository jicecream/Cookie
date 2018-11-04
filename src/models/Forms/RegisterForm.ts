import {Gender} from "@/models/User"

export class RegisterForm {
    username: string
    password: string
    retypePassword: string
    name: string
    email: string
    gender: Gender
    age: number

    constructor(username: string,
                password: string,
                retypePassword: string,
                name: string,
                email: string,
                gender: Gender,
                age: number) {
        this.username = username
        this.password = password
        this.retypePassword = retypePassword
        this.name = name
        this.email = email
        this.gender = gender
        this.age = age
    }

    isValid(): boolean {
        return this.username.length > 0 &&
            this.password.length > 0 &&
            this.retypePassword.length > 0 &&
            this.name.length > 0 &&
            this.email.length > 0 &&
            this.retypePassword == this.password
    }
}
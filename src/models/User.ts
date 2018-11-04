export enum Gender {
    MALE = 0,
    FEMALE = 1
}

export class User {
    userId: number
    username: string
    name: string
    email: string
    isVerified: number
    gender: Gender
    age: number

    constructor(userId: number, username: string, name: string, email: string, isVerified: number, gender: Gender, age: number) {
        this.userId = userId
        this.username = username
        this.name = name
        this.email = email
        this.isVerified = isVerified
        this.gender = gender
        this.age = age
    }
}


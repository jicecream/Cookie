import {nowEpochMillis} from "@/utils/misc/Misc"

export class IotCategory {
    LIGHTS = "Lights"
}


export class Iot {
    iotId: number
    iotIP: string
    name: string
    category: IotCategory
    location: string
    description: string
    serialNo: string
    userId: number
    createdAt: number
    deletedAt: number | null

    static fromJSON(json: object): Iot {
        //@ts-ignore
        return Object.assign(new Iot, json)
    }

    constructor(iotId: number = 0,
                iotIP: string,
                name: string,
                category: IotCategory,
                location: string,
                description: string,
                serialNo: string,
                userId: number,
                createdAt: number = nowEpochMillis(),
                deletedAt: number | null = null) {
        this.iotId = iotId
        this.iotIP = iotIP
        this.name = name
        this.category = category
        this.location = location
        this.description = description
        this.serialNo = serialNo
        this.userId = userId
        this.createdAt = createdAt
        this.deletedAt = deletedAt
    }
}
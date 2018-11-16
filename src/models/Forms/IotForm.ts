import {Iot, IotCategory} from "@/models/Iot"

export class IotForm {
    name: string
    category: IotCategory
    location: string
    desc: string
    ip: string
    serialNo: string

    constructor(name: string, category: IotCategory, location: string, desc: string, ip: string, serialNo: string) {
        this.name = name
        this.category = category
        this.location = location
        this.desc = desc
        this.ip = ip
        this.serialNo = serialNo
    }

    get isValid() {
        return this.name.length > 0
            && this.name.length < 60
            && this.ip.length > 0
            && this.ip.length < 15
            && this.location.length > 0
            && this.location.length < 100
            && this.desc.length < 200
            && this.serialNo.length > 0
            && this.serialNo.length < 20
    }

    toIot(userId: number, id: number = 0) {
        return new Iot(
            id,
            this.ip,
            this.name,
            this.category,
            this.location,
            this.desc,
            this.serialNo,
            userId
        )
    }
}
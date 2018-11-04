import {LoginResponse} from "@/models/RequestResponses/LoginResponse"
import store from "../../store"
import {RegisterResponse} from "@/models/RequestResponses/RegisterResponse"

export function processLogin(res: any) {
    // store token data in localStorage
    // store data in Vuex as well
    const response: LoginResponse = new LoginResponse(res)
    localStorage.setItem(`token`, response.token)
    store.commit(`loginUser`)
    store.commit(`setUser`, response.user)
}

export function processRegister(res: any) {
    const response: RegisterResponse = new RegisterResponse(res)
}
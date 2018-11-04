import axios from 'axios'
import {LoginForm} from "@/models/Forms/LoginForm"
import {RegisterForm} from "@/models/Forms/RegisterForm"

axios.defaults.baseURL = `http://localhost:8080/api/v1`

const route = `auth`

function login(loginForm: LoginForm) {
    return axios.post(`${route}/login`, JSON.parse(JSON.stringify(loginForm)))
}

function register(registerForm: RegisterForm) {
    return axios.post(`${route}/login`, JSON.parse(JSON.stringify(registerForm)))
}

export const AuthService = {
    login,
    register
}


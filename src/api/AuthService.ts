import axios from 'axios'
import {LoginForm} from "../models/Forms/LoginForm"
import {RegisterForm} from "../models/Forms/RegisterForm"

axios.defaults.baseURL = `localhost:8081/api/v1`

const route = `auth`

/**
 *
 * @param {LoginForm} loginForm
 * @returns {AxiosPromise<*>}
 */
function login(loginForm: LoginForm) {
    const formData = new FormData()
    formData.append(`username`, loginForm.username)
    formData.append(`password`, loginForm.password)

    return axios.post(`${route}/login`, formData)
}

/**
 *
 * @param {RegisterForm} registerForm
 * @returns {AxiosPromise<*>}
 */
function register(registerForm: RegisterForm) {
    const formData = new FormData()
    formData.append(`username`, registerForm.username)
    formData.append(`password`, registerForm.password)
    formData.append(`retypePassword`, registerForm.password)
    formData.append(`name`, registerForm.name)
    formData.append(`email`, registerForm.email)
    formData.append(`gender`, registerForm.gender.valueOf().toString())
    formData.append(`age`, registerForm.age.toString())

    return axios.post(`${route}/login`, formData)
}


export const AuthService = {
    login,
    register
}


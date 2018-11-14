import axios from "axios"
import {Iot} from "@/models/Iot"

axios.defaults.baseURL = `http://localhost:8080/api/v1`

const route = `iot`

function config() {
    return {
        'headers': {'Authorization': `Bearer ${localStorage.getItem('token')}`}
    }
}

function getIots() {
    return axios.get(`/${route}`, config())
}

function getIotById(id: number) {
    return axios.get(`/${route}`, config())
}

function createIot(iot: Iot) {
    return axios.post(`/${route}`, JSON.parse(JSON.stringify(iot)), config())
}

function updateIot(iot: Iot) {
    return axios.put(`/${route}`, JSON.parse(JSON.stringify(iot)), config())
}

function deleteIot(id: number) {
    return axios.delete(`/${route}/${id}`, config())
}

export const IotService = {
    getIots,
    getIotById,
    createIot,
    updateIot,
    deleteIot
}
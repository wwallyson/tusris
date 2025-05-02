import axios from "axios"

const api = axios.create({
    baseURL: 'http://10.19.14.111:8001/api/', //substitular pelo IP real no dispositivo fisico
    timeout:10000,
})

export default api


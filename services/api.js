import axios from 'axios'

const api = axios.create({
    baseURL: 'http://10.99.99.37:3333'
})

export default api
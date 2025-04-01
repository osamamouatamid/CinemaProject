import axios from 'axios'

// Change to HTTP instead of HTTPS for local development
const API_URL = 'http://localhost:5000/api'

const api = axios.create({
    baseURL: API_URL,
    headers: {
        "content-type": "application/json"
    }
})

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

export const authService = {
    login: async (email, password) => {
        const response = await api.post("/auth/login", {email, password})
        if (response.data.token) {
            localStorage.setItem("token", response.data.token)
        }
        return response.data
    },
    logout: () => {localStorage.removeItem("token")},
    register: async (email, password) => {
        return await api.post('/auth/register', {email, password})
    }
}

export const testService = {
    getalltests: () => api.get('/test').then(res => res.data),
    gettest: (id) => api.get(`/test/${id}`).then(res => res.data),
    posttest: (username, age) => api.post('/test', { username, age }).then(res => res.data),
    deletetest: (id) => api.delete(`/test/${id}`).then(res => res.data),
    updated: (id,data) => api.put(`/test/${id}`, data).then(res => res.data),
}
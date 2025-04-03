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

export const userService = {
    getallusers: () => api.get('/user').then(res => res.data),
    getuser: (id) => api.get(`/user/${id}`).then(res => res.data),
    postuser: (username, age) => api.post('/user', { username, age }).then(res => res.data),
    deleteuser: (id) => api.delete(`/user/${id}`).then(res => res.data),
    updateduser: (id,data) => api.put(`/user/${id}`, data).then(res => res.data),
    deleteallusers : () => api.delete(`/user`).then(res => res.data )
}
export const seasonService = {
    getallseasons: () => api.get('/season').then(res => res.data),
    getseason: (id) => api.get(`/season/${id}`).then(res => res.data),
    postseason: (username, age) => api.post('/season', { username, age }).then(res => res.data),
    deleteseason: (id) => api.delete(`/season/${id}`).then(res => res.data),
    updatedseason: (id,data) => api.put(`/season/${id}`, data).then(res => res.data),
    deleteallseasons : () => api.delete(`/season`).then(res => res.data )
}
export const showService = {
    getallshows: () => api.get('/show').then(res => res.data),
    getshow: (id) => api.get(`/show/${id}`).then(res => res.data),
    postshow: (username, age) => api.post('/show', { username, age }).then(res => res.data),
    deleteshow: (id) => api.delete(`/show/${id}`).then(res => res.data),
    updatedshow: (id,data) => api.put(`/show/${id}`, data).then(res => res.data),
    deleteallshows : () => api.delete(`/show`).then(res => res.data )
}
export const watchlistService = {
    getallwatchlists: () => api.get('/watchlist').then(res => res.data),
    getwatchlist: (id) => api.get(`/watchlist/${id}`).then(res => res.data),
    postwatchlist: (username, age) => api.post('/watchlist', { username, age }).then(res => res.data),
    deletewatchlist: (id) => api.delete(`/watchlist/${id}`).then(res => res.data),
    updatedwatchlist: (id,data) => api.put(`/watchlist/${id}`, data).then(res => res.data),
    deleteallwatchlists : () => api.delete(`/watchlist`).then(res => res.data )
}
export const movieService = {
    getallmovies: () => api.get('/movie').then(res => res.data),
    getmovie: (id) => api.get(`/movie/${id}`).then(res => res.data),
    postmovie: (username, age) => api.post('/movie', { username, age }).then(res => res.data),
    deletemovie: (id) => api.delete(`/movie/${id}`).then(res => res.data),
    updatedmovie: (id,data) => api.put(`/movie/${id}`, data).then(res => res.data),
    deleteallmovies : () => api.delete(`/movie`).then(res => res.data )
}

export const genreService = {
    getallgenres: () => api.get('/genre').then(res => res.data),
    getgenre: (id) => api.get(`/genre/${id}`).then(res => res.data),
    postgenre: (username, age) => api.post('/genre', { username, age }).then(res => res.data),
    deletegenre: (id) => api.delete(`/genre/${id}`).then(res => res.data),
    updatedgenre: (id,data) => api.put(`/genre/${id}`, data).then(res => res.data),
    deleteallgenres : () => api.delete(`/genre`).then(res => res.data )
}

export const episodeService = {
    getallepisodes: () => api.get('/episode').then(res => res.data),
    getepisode: (id) => api.get(`/episode/${id}`).then(res => res.data),
    postepisode: (username, age) => api.post('/episode', { username, age }).then(res => res.data),
    deleteepisode: (id) => api.delete(`/episode/${id}`).then(res => res.data),
    updatedepisode: (id,data) => api.put(`/episode/${id}`, data).then(res => res.data),
    deleteallepisodes : () => api.delete(`/episode`).then(res => res.data )
}
export const sectionService = {
    getallsections: () => api.get('/section').then(res => res.data),
    getsection: (id) => api.get(`/section/${id}`).then(res => res.data),
    postsection: (username, age) => api.post('/section', { username, age }).then(res => res.data),
    deletesection: (id) => api.delete(`/section/${id}`).then(res => res.data),
    updatedsection: (id,data) => api.put(`/section/${id}`, data).then(res => res.data),
    deleteallsections : () => api.delete(`/section`).then(res => res.data )
}
export const historyService = {
    getallhistorys: () => api.get('/history').then(res => res.data),
    gethistory: (id) => api.get(`/history/${id}`).then(res => res.data),
    posthistory: (username, age) => api.post('/history', { username, age }).then(res => res.data),
    deletehistory: (id) => api.delete(`/history/${id}`).then(res => res.data),
    updatedhistory: (id,data) => api.put(`/history/${id}`, data).then(res => res.data),
    deleteallhistorys : () => api.delete(`/history`).then(res => res.data )
}

export const testService = {
    getalltests: () => api.get('/test').then(res => res.data),
    gettest: (id) => api.get(`/test/${id}`).then(res => res.data),
    posttest: (username, age) => api.post('/test', { username, age }).then(res => res.data),
    deletetest: (id) => api.delete(`/test/${id}`).then(res => res.data),
    updated: (id,data) => api.put(`/test/${id}`, data).then(res => res.data),
    deletealltests : () => api.delete(`/test`).then(res => res.data )
}
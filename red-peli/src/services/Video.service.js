import { api} from './api'

export const getVideos = async () => {
    const { data } = await api.get('/photos')
    return data
}

export const getVideo = async (id) => {
    const { data } = await api.get(`/photos/${id}`)
    return data
}



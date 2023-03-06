import axios from 'axios'

export const getAllCollectionOf = async (language) => {
    try {
        const request = await axios.get(`/story/${language}`)
        const response = request.data
        return response.data
    } catch (error) {
        console.log(`Error on getAllCollectionOf ${language}: ${error}`)
        return 0
    }
}

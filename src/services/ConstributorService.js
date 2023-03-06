import axios from 'axios'

export const getAllContributors = async () => {
    try {
        const request = await axios.get('/contributors')
        const response = request.data
        return response.data
    } catch (error) {
        console.log(`Error on getAllContributors: ${error}`)
        return 0
    }
}

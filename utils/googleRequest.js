import axios from 'axios'
const googleRequest = axios.create({ credentials: true })

googleRequest.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    console.error('axios err' + error) // for debug
    return Promise.reject(error)
  }
)
export default googleRequest

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
console.log('created gapi')
export default googleRequest

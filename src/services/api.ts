import axios from 'axios'

const api = axios.create({
  // baseURL: 'http://192.168.0.15:3001',
  baseURL: 'https://happy-nlw3-app.herokuapp.com',
})

export default api

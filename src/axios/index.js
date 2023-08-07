import axios from 'axios'
const instanceAxios = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1"
})
export default instanceAxios


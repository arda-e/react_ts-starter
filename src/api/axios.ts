import axios from 'axios'

export default axios.create({
  baseURL: 'https://supportapi.visiumlabs.com/api/v1',
})

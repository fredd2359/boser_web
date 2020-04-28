import axios from 'axios'

export default () => {
  return axios.create({
    baseUrl: `http://localhost:5000/`,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*'
    }
  })
}

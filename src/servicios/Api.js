import axios from 'axios'

export default () => {
  return axios.create({
    baseUrl: '',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      // 'Access-Control-Allow-Origin': '*'
    }
  })
}

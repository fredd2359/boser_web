import Api from './Api'

export default {
  login (credenciales) {
    // const credenciales2 = JSON.stringify(credenciales)
    return Api().post('http://localhost:5000/user/login', credenciales)
      .then(res => {
        console.log('respuesta: ' + res)
        return {
          status: 201,
          data: res.data
        }
      })
      .catch(err => {
        console.log('Error: ' + err)
        return {
          status: 401,
          data: err
        }
      })
  }
}

import Api from './Api'

export default {
  login (credenciales) {
    // const credenciales2 = JSON.stringify(credenciales)
    Api().post('/user/login', credenciales)
      .then(res => {
        console.log('respuesta: ' + res)
      })
      .catch(err => {
        console.log('Error: ' + err)
      })
  }
}

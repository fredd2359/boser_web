import Api from './Api'

export default {
  login (credenciales) {
    console.log('entra a login', credenciales)
    const credenciales2 = JSON.stringify(credenciales)
    console.log(credenciales2)
    Api().post('/user/login', credenciales2)
      .then(res => {
        console.log('respuesta: ' + res)
      })
      .catch(err => {
        console.log('Error: ' + err)
      })
  }
}

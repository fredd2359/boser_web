import Api from './Api'

export default {
  register (credenciales) {
    console.log('entra a register', credenciales)
    return Api().post('user/login', credenciales)
  }
}

import Api from './Api'

export default {
  login (credenciales) {
    // const credenciales2 = JSON.stringify(credenciales)
    return Api().post(process.env.VUE_APP_SERVER + '/user/login', credenciales)
      .then(res => {
        return {
          status: 201,
          data: res.data
        }
      })
      .catch(err => {
        return {
          status: 401,
          data: err
        }
      })
  }
}

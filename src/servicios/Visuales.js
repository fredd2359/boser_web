import Api from './Api'

export default {
  CarouselImgs () {
    return Api().get(process.env.VUE_APP_SERVER + '/api/imagenes')
      .then(res => {
        console.log(res)
        return {
          success: true,
          data: res.data
        }
      })
      .catch(err => {
        return {
          err: err,
          success: false,
          data: null
        }
      })
  },

  ObtenerLinks () {
    // return Api().get(process.env.VUE_APP_SERVER + 'api/links')
    return Api().get(process.env.VUE_APP_SERVER + '/api/links')
      .then(res => {
        console.log(res)
        return {
          success: true,
          message: 'todobin',
          data: res.data
        }
      })
      .catch(err => {
        console.log(err)
        return {
          err: err,
          success: false,
          data: null
        }
      })
  },

  borrarImagen (idImagen) {
    return Api().delete(process.env.server + '/api/imagenes/' + idImagen)
    // asd
  }
}

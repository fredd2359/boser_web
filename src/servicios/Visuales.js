import Api from './Api'

export default {
  CarouselImgs () {
    // const config = {
    //   method: 'get',
    //   url: 'imagenes'
    // }
    //   let res = await Api(config)
    //   console.log(res.status)
    //   return res.status
    return Api().get(process.env.VUE_APP_SERVER + 'api/imagenes')
  },

  ObtenerLinks () {
    return Api().get('http://localhost:5000/api/links')
  },

  borrarImagen (idImagen) {
    return Api().delete(process.env.server + '/api/imagenes/' + idImagen)
    // asd
  }
}

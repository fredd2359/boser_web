import Api from './Api'
// var path = require('path')

export default {
  ObtenerProducto (slug) {
    var cadena = 'object/' + slug + '?read_key=' + process.env.COSMIC_READ_KEY + '&props=slug,title,content,metadata'
    return Api().get(process.env.COSMIC_SERVER + cadena)
      .then(res => {
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

  ObtenerProductos () {
    // return Api().get(process.env.VUE_APP_SERVER + 'api/links')
    var limit = 15
    var cadena = 'objects?hide_metafields=false&type=productos&read_key=' + process.env.COSMIC_READ_KEY + '&limit=' + limit + '&props=slug,title,content,metadata,_id'
    return Api().get(process.env.COSMIC_SERVER + cadena)
      .then(res => {
        return {
          success: true,
          data: res.data
        }
      })
      .catch(err => {
        // console.log(err)
        return {
          err: err,
          success: false,
          data: null
        }
      })
  }
}

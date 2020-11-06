import Api from './Api'
var path = require('path')

export default {
  ObtenerArticulo (slug) {
    var cadena = 'object/' + slug + '?read_key=' + process.env.COSMIC_READ_KEY + '&props=slug,title,content,metadata'
    return Api().get(path.join(process.env.COSMIC_SERVER + cadena))
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

  ObtenerArticulosPrincipal () {
    // return Api().get(process.env.VUE_APP_SERVER + 'api/links')
    var limit = process.env.COSMIC_LIMIT
    var cadena = '/objects?hide_metafields=false&type=articulos&read_key=' + process.env.COSMIC_READ_KEY + '&limit=' + limit + '&props=slug,title,content,metadata,_id'
    return Api().get(path.join(process.env.COSMIC_SERVER, cadena))
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

  ObtenerArticulos () {
    // return Api().get(process.env.VUE_APP_SERVER + 'api/links')
    var limit = 15
    var cadena = '/objects?hide_metafields=false&type=articulos&read_key=' + process.env.COSMIC_READ_KEY + '&limit=' + limit + '&props=slug,title,content,metadata,_id'
    return Api().get(path.join(process.env.COSMIC_SERVER, cadena))
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
  }
}

import Api from './Api'

export default {
  editarLink (link, token) {
    return Api().post(
      // Ruta
      process.env.VUE_APP_SERVER + '/api/links/editarLink',
      // process.env.VUE_APP_SERVER + 'api/links/editarLink',
      // Body
      link,
      // Headers
      {
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json'
        }
      }
    ).then(res => {
      return {
        success: true,
        data: res.data
      }
    }).catch(err => {
      return {
        success: false,
        data: null,
        err
      }
    })
  },

  subirImagen (imagen, token) {
    let formData = new FormData()
    formData.append('memeImagen', imagen)
    return Api().post(
      // Ruta
      // process.env.VUE_APP_SERVER + 'api/imagenes',
      process.env.VUE_APP_SERVER + '/api/imagenes',
      // Body
      formData,
      // Headers
      {
        headers: {
          'Authorization': token,
          'Content-Type': 'multipart/form-data'
        }
      }
    )
      .then(res => {
        return {
          success: true,
          data: res.data
        }
      })
      .catch(err => {
        return {
          err,
          success: false,
          data: null
        }
      })
  },

  eliminarImagen (linkId, token) {
    // return Api().delete(process.env.VUE_APP_SERVER + 'api/imagenes/' + linkId, {
    return Api().delete(process.env.VUE_APP_SERVER + '/api/imagenes/' + linkId, {
      headers: {
        Authorization: token
      }
    })
      .then(res => {
        return res
      })
      .catch(err => {
        // TODO: Implementar algo con los errores
        return err
      })
  }
}

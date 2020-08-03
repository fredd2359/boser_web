import Api from './Api'

export default {
  editarLink (link) {
    const linkParsed = JSON.stringify(link)
    return Api().post(process.env.VUE_APP_SERVER + 'api/links/editar', linkParsed)
      .then(res => {
        return res
      })
      .catch(err => {
        return err
      })
  },

  subirImagen (imagen, token) {
    let formData = new FormData()
    formData.append('memeImagen', imagen)
    return Api().post(
      // Ruta
      process.env.VUE_APP_SERVER + 'api/imagenes',
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
    return Api().delete(process.env.VUE_APP_SERVER + 'api/imagenes/' + linkId, {
      headers: {
        Authorization: token
      }
    })
      .then(res => {
        return res
      })
      .catch(err => {
        console.log(err)
        return err
      })
  }
}

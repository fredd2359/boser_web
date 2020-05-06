import Api from './Api'

export default {
  editarLink (link) {
    console.log('entra a editarLink', link)
    const linkParsed = JSON.stringify(link)
    console.log(linkParsed)
    Api().post('/api/links/editar', linkParsed)
      .then(res => {
        console.log('respuesta: ' + res)
        return res
      })
      .catch(err => {
        console.log('Error: ' + err)
        return err
      })
  },

  subirImagen (imagen) {
    console.log(imagen)
    Api().post('/api/imagenes/', {memeImagen: imagen})
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  },

  eliminarImagen (linkId) {
    console.log(linkId)
    Api().delete('/api/imegenes/' + linkId)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }
}

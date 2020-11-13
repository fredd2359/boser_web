import Api from './Api'
// var path = require('path')

export default {
  TAccess () {
    var fbApp = process.env.FACEBOOK_APP
    var fbGraph = process.env.FB_GRAPH_Link
    // var fbSecret = process.env.FB_SECRET_APP
    var fbGrant = process.env.FB_GRANT_TYPE
    // var cadena = '?client_id=' + fbApp + '&client_secret=' + process.env.FB_SECRET_APP + '&grant_type=' + fbGrant
    // return Api().get(path.join(process.env.COSMIC_SERVER + cadena))
    return Api().get(fbGraph, {
      client_id: fbApp,
      client_secret: process.env.FB_SECRET_APP,
      grant_type: fbGrant
    })
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

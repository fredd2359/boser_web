import Api from './Api'
var path = require('path')

export default {
  TAccess () {
    var fbApp = process.env.FACEBOOK_APP
    var fbGraph = process.env.FB_GRAPH_Link
    var fbSecret = process.env.FB_SECRET_APP
    var fbGrant = process.env.FB_GRANT_TYPE
    var cadena = '?client_id=' + fbApp + '&client_secret=' + fbSecret + '&grant_type=' + fbGrant
    // return Api().get(path.join(process.env.COSMIC_SERVER + cadena))
    return Api().get(path.join(fbGraph + cadena))
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

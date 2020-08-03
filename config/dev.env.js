'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  host: '"192.168.0.34"', // TODO: Cambiar
  // VUE_APP_SERVER: '"https://salseofutbolero-server.herokuapp.com/"'
  VUE_APP_SERVER: '"http://localhost:5000/"'
})

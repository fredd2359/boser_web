'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  host: '"192.168.1.66"', // TODO: Cambiar
  VUE_APP_SERVER: '"https://salseofutbolero-server.herokuapp.com/"',
  COSMIC_SERVER: '"https://api.cosmicjs.com/v1/boser-web/"',
  COSMIC_READ_KEY: '"EQLso59EH3QsFHAOZs7y68nfEvh0xeKXzgNBaI7GKg6rjEePSv"',
  COSMIC_LIMIT: '"7"'
  //VUE_APP_SERVER: '"http://localhost:5000/"'
})

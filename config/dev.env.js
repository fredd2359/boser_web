'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  PORT: '"8081"',
  host: '"192.168.0.21"', // TODO: Cambiar
  VUE_APP_SERVER: '"https://salseofutbolero-server.herokuapp.com"',
  FACEBOOK_APP: '"2824909654304731"',
  FB_GRAPH_Link: '"https://graph.facebook.com/oauth/access_token"',
  FB_SECRET_APP: '"64d0b1eef45c94bcfa721731110e0d69"',
  FB_GRANT_TYPE: '"client_credentials"',
  // Cuenta Freddy
  // COSMIC_SERVER: '"https://api.cosmicjs.com/v1/boser-web-prueba/"',
  // COSMIC_READ_KEY: '"EQLso59EH3QsFHAOZs7y68nfEvh0xeKXzgNBaI7GKg6rjEePSv"',
  // Cuenta boser
  COSMIC_SERVER: '"https://api.cosmicjs.com/v1/boser-web/"',
  COSMIC_READ_KEY: '"htMBbdNc0fPQ9naFGU53BPfvEWM9VufFVDGJQJMvyLeqw69Y91"',
  COSMIC_LIMIT: '"7"'
  //VUE_APP_SERVER: '"http://localhost:5000/"'
})

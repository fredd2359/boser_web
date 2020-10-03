module.exports = {
    // options...
    devServer: {
        headers: {
        'X-Frame-Options': 'sameorigin'
        },
          port: '5000',
          proxy: 'http://localhost/',
      }
  }
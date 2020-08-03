var express = require('express');
var path = require('path');
// var serveStatic = require('serve-static');
app = express();
app.use(express.static(__dirname + "/dist"));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
  });
var port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('Server started on port: ' + port);
});
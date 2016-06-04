var express = require('express');
var app = express();
var rest = require('./rest');
require('./db.js')

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})


app.get('/listaUsuarios', rest.listaUsuarios);

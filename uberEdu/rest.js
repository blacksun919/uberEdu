require('./db.js')
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var rsUsuario = require('./rest/usuario.js');

//configure app to use bodyParser()
//this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

//ROUTES FOR OUR API
//=============================================================================
var router = express.Router();              // get an instance of the express Router

//test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
 res.json({ message: 'hooray! welcome to our api!' });   
});


//REGISTER OUR ROUTES -------------------------------
//all of our routes will be prefixed with /api
app.use('/api', router);

//START THE SERVER
//=============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);


//*****************

app.get('/listaUsuarios', function (req, res) {
	rsUsuario.listaUsuarios(req, res);
});
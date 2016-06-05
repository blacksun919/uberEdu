// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

//Acceso a BD
var mongoose   = require('mongoose');
//BD de prueba en mLab.com
//mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o'); // connect to our database
//mongoose.connect('mongodb://uberedu:uberedu@ds021943.mlab.com:21943/test_uber_edu'); // connect to our database
//					mongodb://uberedu:uberedu@ds021943.mlab.com:21943/test_uber_edu
mongoose.connect( 'mongodb://localhost/uberEdu' );

//BD de usuario
var Usuario = require('./models/usuario');


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

//middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// more routes for our API will happen here

router.route('/usuarios')

	// create a bear (accessed at POST http://localhost:8080/api/usuarios)
	.post(function(req, res) {
	    console.log('Ingreso de Usuario');
	    var usuario = new Usuario();   // create a new instance of the Usuario model
	    usuario.name = req.body.name;  // set the usuario name (comes from the request)
	
	    // save the usuario and check for errors
	    usuario.save(function(err) {
	        if (err){
	            res.send(err);
	        }
	        res.json({ message: 'Usuario creado!' });
	    });
	})

	// get all the bears (accessed at GET http://localhost:8080/api/bears)
	.get(function(req, res) {
		console.log('Listado de usuarios');
	    Usuario.find(function(err, usuarios) {
	        if (err){
	        	res.send(err);
	        }
	        res.json(usuarios);
	    });
	});

router.route('/usuarios/:idUsuario')
	
	// get the usuario with that id (accessed at GET http://localhost:8080/api/usuarios/:idUsuario)
	.get(function(req, res) {
		console.log('Busqueda de usuario ['+req.params.idUsuario+']');
	    Usuario.findById(req.params.idUsuario, function(err, usuario) {
	        if (err){
	            res.send(err);
	        }
	        res.json(usuario);
	    });
	})

// update the usuario with this id (accessed at PUT http://localhost:8080/api/usuarios/:idUsuario)
	.put(function(req, res) {
		console.log('Actualizando Usuario ['+req.params.idUsuario+'] Nombre ['+req.body.name+']');
	    // use our bear model to find the bear we want
	    Usuario.findById(req.params.idUsuario, function(err, usuario) {
	        if (err){
	            res.send(err);
	        }
	        usuario.name = req.body.name;  // update the bears info
	        // save the bear
	        usuario.save(function(err) {
	            if (err){
	                res.send(err);
	            }
	            res.json({ message: 'Usuario actualizado!' });
	        });
	
	    });
	})
	
	// delete the bear with this id (accessed at DELETE http://localhost:8080/api/bears/:bear_id)
	.delete(function(req, res) {
	    Usuario.remove({
	        _id: req.params.idUsuario
	    }, function(err, usuario) {
	        if (err){
	        	 res.send(err);
	        }
	        res.json({ message: 'Successfully deleted' });
	    });
	});

	

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
//pone el router en /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
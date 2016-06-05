
	var mongoose = require( 'mongoose' );
	var BdUsuario = mongoose.model( 'Usuario' );

	exports.listaUsuarios = function ( req, res ){
	  console.log("Listado de usuarios");
	  BdUsuario.
		find().
		exec( function ( err, data ){
		  console.log(data);
		  if(data.length == 0){
			  console.log("Sin usuarios")
			  data = "Sin Usuarios";
			  res.end(data);
		  }else{
			  res.end(JSON.stringify(data));
//			  var resultado = "";
//			  data.forEach(function(usuario) {
//			  	resultado += JSON.stringify(usuario);
//			  	resultado += '\n';
//			  })
//			  res.end(resultado);
		  }
		});
	};

	exports.crearUsuario = function ( req, res ){
	  console.log("Ingreso de usuarios");
	  new BdUsuario({
	    email   : req.body.mail,
	    pass    : req.body.pass,
	    nombre  : req.body.nombre,
	    fechaActualizacion : Date.now()
	    
	  }).save( function( err, usuario, count ){
	    if( err ){
	    	res.end(JSON.stringify(err));
	    }
	    res.end(JSON.stringify(usuario));
	  });
	};
	
	
	
//	exports.create = function ( req, res, next ){
//		  new Todo({
//		    user_id    : req.cookies.user_id,
//		    content    : req.body.content,
//		    updated_at : Date.now()
//		  }).save( function( err, todo, count ){
//		    if( err ) return next( err );
//		    res.redirect( '/' );
//		  });
//		};

	
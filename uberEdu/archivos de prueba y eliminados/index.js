//var utils    = require( '../utils' );
var mongoose = require( 'mongoose' );
var BdUsuario = mongoose.model( 'Usuario' );
var rsUsuario = require('../rest/usuario.js');

exports.create = function ( req, res, next ){
	rsUsuario.crearUsuario(req, res);
};

exports.index = function ( req, res, next ){
    res.render( 'index', {
        title : 'Ingreso de usuarios',
    });
};
	
//
//// remove todo item by its id
//exports.destroy = function ( req, res, next ){
//  Todo.findById( req.params.id, function ( err, todo ){
//    var user_id = req.cookies ? req.cookies.user_id : undefined;
//    if( todo.user_id !== req.cookies.user_id ){
//      return utils.forbidden( res );
//    }
//
//    todo.remove( function ( err, todo ){
//      res.redirect( '/' );
//    });
//  });
//};
//
////Carga la lista para edicion
//exports.edit = function ( req, res, next ){
//  var user_id = req.cookies ? req.cookies.user_id : undefined;
//  Todo.
//    find({ user_id : user_id }).
//    sort( '-updated_at' ).
//    exec(function ( err, todos ){
//    res.render( 'edit', {
//        title   : 'Express Todo Example',
//        todos   : todos,
//        current : req.params.id
//    });
//  });
//};
//
////edita un elemento
//exports.update = function ( req, res, next ){
//  Todo.findById( req.params.id, function ( err, todo ){
//    var user_id = req.cookies ? req.cookies.user_id : undefined;
//    if( todo.user_id !== user_id ){
//      return utils.forbidden( res );
//    }
//    todo.content    = req.body.content;
//    todo.updated_at = Date.now();
//    todo.save( function ( err, todo, count ){
//      if( err ) return next( err );
//      res.redirect( '/' );
//    });
//  });
//};
//

//
//// ** express turns the cookie key to lowercase **
//exports.current_user = function ( req, res, next ){
//  var user_id = req.cookies ? req.cookies.user_id : undefined;
//  if( !user_id ){
//    res.cookie( 'user_id', utils.uid( 32 ));
//  }
//  next();
//};

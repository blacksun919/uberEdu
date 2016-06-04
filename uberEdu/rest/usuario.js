
var mongoose = require( 'mongoose' );
var bdUsuario = mongoose.model( 'Usuario' );


exports.listaUsuarios = function ( req, res ){
  console.log("Listado de usuarios");
  bdUsuario.
    find().
    //sort( '-updated_at' ).
    exec( function ( err, data ){
      console.console.log(data);
      res.end(data);
    });
};

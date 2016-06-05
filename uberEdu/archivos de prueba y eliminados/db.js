var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var Usuario = new Schema({
    email   : String,
    pass    : String,
    nombre  : String,
    fechaActualizacion : Date
});

mongoose.model( 'Usuario', Usuario );
mongoose.connect( 'mongodb://localhost/uberEdu' );

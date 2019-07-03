
var mongoose = require( 'mongoose' );

var managerSchema = new mongoose.Schema({
  name: String,
  uniform: Number,
  hobby: String,
  comment: String,
});
module.exports = mongoose.model( 'Manager', managerSchema );

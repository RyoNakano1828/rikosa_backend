
var mongoose = require( 'mongoose' );

var managerSchema = new mongoose.Schema({
  name: String,
  uniform: Number,
  univ: String,
  hobby: String,
  comment: String,
  generation: Number,
});
module.exports = mongoose.model( 'Manager', managerSchema );

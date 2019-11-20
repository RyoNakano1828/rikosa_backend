// Modelでもmongooseを読み込みます
var mongoose = require( 'mongoose' );

// スキーマの定義とPlayerモデルの作成
var playerSchema = new mongoose.Schema({
  name: String,
  position: String,
  uniform: Number,
  from: String,
  belong: String,
  hobby: String,
  comment: String,
  height: Number,
  generation: Number,
});
module.exports = mongoose.model( "Player", playerSchema );
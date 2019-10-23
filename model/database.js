// Modelでもmongooseを読み込みます
var mongoose = require( 'mongoose' );

// スキーマの定義とPlayerモデルの作成
var playerSchema = new mongoose.Schema({
  name: String,
  position: String,
  uniform: String,
  from: String,
  belong: String,
  hobby: String,
  comment: String,
  height: String,
  generation: String,
});
module.exports = mongoose.model( "Player", playerSchema );
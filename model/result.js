// Modelでもmongooseを読み込みます
var mongoose = require( 'mongoose' );

// スキーマの定義とPlayerモデルの作成
var resultSchema = new mongoose.Schema({
  year: String,
  day: String,
  competition: String,
  us: String,
  you: String,
  stage: String,
  ourscore: Number,
  yourscore: Number,
  comment: String,
  result: String,
});
module.exports = mongoose.model( "Result", resultSchema );
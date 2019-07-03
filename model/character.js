var mongoose = require( 'mongoose' );

mongoose.Promise = global.Promise

//  スキーマの作成
//  今回保存したいドキュメントはname(String)とage(Number)の２つのフィールドを持つ
const CharacterSchema = new mongoose.Schema({
  name: String,
  age: Number,
})

// モデルの作成
// mongoose.modelの第一引数の複数形の名前（今回だと'characters'）のコレクションが生成される
module.exports = mongoose.model('Character', CharacterSchema)


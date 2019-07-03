var mongoose = require( 'mongoose' );
var Player = mongoose.model( 'Player' );

// Getリクエスト用
exports.generate = function(req, res){
  res.render('engineer-form', {
    title: 'プレイヤー登録フォーム',
    buttonName: "登録"
 });
};

// Postリクエスト用
exports.postGenerate = function(req, res){
  Player.create({
    name: req.body.Name,
  }, function( error, player ){
    if(error){
      console.log(error);
    }else{
      console.log("Player saved: " + player);
      res.redirect( '/' );
    }
  });
};
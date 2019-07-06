var express = require('express');
var app = express();
var http = require('http');
var bodyParser = require('body-parser');
//modelの読み込み
var Player = require('./model/database')
var Manager = require('./model/manager')
var Character = require('./model/database') // モデルをimport
//mongooseの読み込み 
var mongoose = require('mongoose');

// MongoDBに接続
var mURI = 'mongodb://localhost/rikosa';
mongoose.connect(mURI);

// 接続イベントを利用してログ出力
mongoose.connection.on('connected', function () {
  console.log('mongoose URI locates ' + mURI);
});

//bodyPaeserの設定
app.use(bodyParser.urlencoded({
	extended: true
}));

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

//４、port番号の宣言、appへのport番号のセット
var port = normalizePort(process.env.PORT || '4000');
app.set('port', port);
var server = http.createServer(app);
server.listen(port,() => {
  console.log('起動しました','http://localhost:',port)
});

//データを全部取ってくるだけのapiをひとまず書いています。
//APIはのちに専用のフォルダーに移動したい
/*app.get('/api/players', (request, response) => {
    Player.find({}, (err, playerArray) => {
      if (err) response.status(500).send()
      else response.status(200).send(playerArray)
    })
  })

app.get('/api/managers', (request, response) => {
    Manager.find({}, (err, managerArray) => {
      if (err) response.status(500).send()
      else response.status(200).send(managerArray)
    })
  })
  */

 app.post('/api/players', (request, response) => {
    const { name, position } = request.body

    new Player({
      name,
      position,
    }).save(err => {
      if (err) response.status(500)
        else {
         Player.find({}, (findErr, playerArray) => {
           if (findErr) response.status(500).send()
          else response.status(200).send(playerArray)
         })
       }
    })
  })

  app.get('/api/players', (request, response) => {
    Player.find({}, (err, playerArray) => {
      if (err) response.status(500).send()
      else response.status(200).send(playerArray)
    })
  })

  app.put('/api/players', (request, response) => {
    const { id } = request.body
    Player.findByIdAndUpdate(id, { $inc: {"position": 1} }, err => {
      if (err) response.status(500).send()
      else {
        Player.find({}, (findErr, playerArray) => {
          if (findErr) response.status(500).send()
          else response.status(200).send(playerArray)
        })
      }
    })
  })

 app.delete('/api/players', (request, response) => {
     const { id } = request.body
     Player.findByIdAndRemove(id, err => {
       if (err) response.status(500).send()
       else {
         Player.find({}, (findErr, playerArray) => {
           if (findErr) response.status(500).send()
           else response.status(200).send(playerArray)
         })
       }
     })
   })
 
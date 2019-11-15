var express = require('express');
var app = express();
var http = require('http');
var bodyParser = require('body-parser');

//認証用のやつ
var jwt = require('jsonwebtoken');
var morgan = require('morgan');
var cors = require('cors');
var config = require('./config');
var VerifyToken = require('./app/middlewares/VerifyToken');

app.use(morgan('dev'));
app.use(cors());
const { check, validationResult } = require('express-validator/check');

//画像登録用のやつ
const aws = require('aws-sdk');
const AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY;
const AWS_SECRET_KEY = process.env.AWS_SECRET_KEY;
const AWS_S3_REGION = process.env.AWS_S3_REGION;

aws.config.update({
  accessKeyId: AWS_ACCESS_KEY,
  secretAccessKey: AWS_SECRET_KEY,
  region: AWS_S3_REGION,
});

app.get('/upload', (req, res) => {
  upload(req.query).then(url => {
    res.json({url: url});
  }).catch(e => {
    console.log(e);
  });
});

function upload(file) {
  const s3 = new aws.S3();
  const params = {
    Bucket: "rikosa2",
    Key: file.filename,
    Expires: 60,
    ContentType: file.filetype
  };

  return new Promise((resolve, reject) => {
    s3.getSignedUrl('putObject', params, (err, url) => {
      if (err) {
        reject(err);
      }
      resolve(url);
    });
  });
}

app.get('/getimage', (req, res) => {
  getimage().then(keyList => {
    res.json({keyList: keyList});
  }).catch(e => {
    console.log(e);
  });
});

async function getimage(){
  const s3 = new aws.S3();
  // 全てのオブジェクトキーを走査してキーリストを作る
  let keyList = [];
  for (let continuationToken = null;;) {
    // パラメータ作成
    const params = {
      Bucket: 'rikosa2',  // バケット名
    };
    if (continuationToken) {
      // 読み込み開始位置 (ContinuationToken) がある場合はパラメータに追加
      params.ContinuationToken = continuationToken;
    }
    
    // オブジェクトのリストを取得
    const res = await s3.listObjectsV2(params).promise();
    
    // オブジェクトキー (Key属性) だけ取り出してキーリストに追加
    res.Contents.map(v => v.Key).forEach(v => {
      keyList.push(v);
    });
    
    // listObjectsV2 が一度に取得できるのは1000件まで
    // リストが切り詰められている場合は IsTruncated がtrueになる
    if (!res.IsTruncated) {
      break;
    }
    
    // 次の読み込み開始位置を保存
    continuationToken = res.NextContinuationToken;
  }
  // console.log(keyList);
  return keyList
}
  


//modelの読み込み
var Player = require('./model/database')
var Manager = require('./model/manager')
var Result = require('./model/result')
//mongooseの読み込み 
var mongoose = require('mongoose');

// MongoDBに接続
var mURI = 'mongodb://localhost/rikosa';
mongoose.connect(mURI);

// 接続イベントを利用してログ出力
mongoose.connection.on('connected', function () {
  console.log('mongoose URI locates: ' + mURI);
});

//bodyPaeserの設定
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json())

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

//プレーヤー用API
 app.post('/api/players', (request, response) => {
    const { name, position,uniform,from,belong,hobby,height,comment,generation } = request.body
    new Player({
      name,
      position,
      uniform,
      from,
      belong,
      hobby,
      comment,
      height,
      generation,
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

  app.get('/api/people', (request, response) => {
    const { id } = request.query
    Player.findById(id, (err, peopleArray) => {
      if (err) response.status(500).send()
      else response.status(200).send(peopleArray)
    })
  })

  app.put('/api/players', (request, response) => {
    console.log(request.body);
    // console.log(request.query);
    // const { id } = request.query
    const { id,name, position,uniform,from,belong,hobby,height,comment,generation } = request.body
    console.log(id);
    Player.findByIdAndUpdate(id, 
        {$set:
          {
            name,
            position,
            uniform,
            from,
            belong,
            hobby,
            comment,
            height,
            generation,
          }
      }, {new: false}, err => {
      if (err) {
        response.status(500).send();
        //エラーメッセージを表示させることはとても有効な手段です！！
        console.log(err);
      }
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

//マネージャー用API
app.post('/api/managers', (request, response) => {
  const { name,uniform,univ,hobby,comment,generation } = request.body
  new Manager({
    name,
    uniform,
    univ,
    hobby,
    comment,
    generation,
  }).save(err => {
    if (err) response.status(500)
      else {
       Manager.find({}, (findErr, managersArray) => {
         if (findErr) response.status(500).send()
        else response.status(200).send(managersArray)
       })
     }
  })
})

app.get('/api/managers', (request, response) => {
  Manager.find({}, (err, managersArray) => {
    if (err) response.status(500).send()
    else response.status(200).send(managersArray)
  })
})

app.get('/api/manager', (request, response) => {
  const { id } = request.query
  Manager.findById(id, (err, manegerArray) => {
    if (err) response.status(500).send()
    else response.status(200).send(manegerArray)
  })
})

app.put('/api/managers', (request, response) => {
  console.log(request.body);
  // console.log(request.query);
  // const { id } = request.query
  const { id,name,uniform,univ,hobby,comment,generation } = request.body
  console.log(id);
  Manager.findByIdAndUpdate(id, 
      {$set:
        {
          name,
          uniform,
          univ,
          hobby,
          comment,
          generation,
        }
    }, {new: false}, err => {
    if (err) {
      response.status(500).send();
      //エラーメッセージを表示させることはとても有効な手段です！！
      console.log(err);
    }
    else {
      Manager.find({}, (findErr, managersArray) => {
        if (findErr) response.status(500).send()
        else response.status(200).send(managersArray)
      })
    }
  })
})

app.delete('/api/managers', (request, response) => {
   const { id } = request.body
   Manager.findByIdAndRemove(id, err => {
     if (err) response.status(500).send()
     else {
       Manager.find({}, (findErr, managersArray) => {
         if (findErr) response.status(500).send()
         else response.status(200).send(managersArray)
       })
     }
   })
 })
 
//試合結果用API
app.post('/api/results', (request, response) => {
    const { year,day,competition,us,you,stage,ourscore,yourscore,comment,result } = request.body
    new Result({
      year,
      day,
      competition,
      us,
      you,
      stage,
      ourscore,
      yourscore,
      comment,
      result,
    }).save(err => {
      if (err) response.status(500)
        else {
         Result.find({}, (findErr, resultArray) => {
           if (findErr) response.status(500).send()
          else response.status(200).send(resultArray)
         })
       }
    })
  })

  app.get('/api/results', (request, response) => {
    Result.find({}, (err, resultArray) => {
      if (err) response.status(500).send()
      else response.status(200).send(resultArray)
    })
  })

  app.delete('/api/results', (request, response) => {
    const { id } = request.body
    Result.findByIdAndRemove(id, err => {
      if (err) response.status(500).send()
      else {
        Result.find({}, (findErr, resultArray) => {
          if (findErr) response.status(500).send()
          else response.status(200).send(resultArray)
        })
      }
    })
  })

  app.get('/api/game', (request, response) => {
  const { id } = request.query
  Result.findById(id, (err, gameArray) => {
      if (err) response.status(500).send()
      else response.status(200).send(gameArray)
    })
  })

  app.put('/api/results', (request, response) => {
    const { id } = request.body
    Result.findByIdAndUpdate(id, { $inc: {"position": 1} }, err => {
      if (err) response.status(500).send()
      else {
        Result.find({}, (findErr, resultArray) => {
          if (findErr) response.status(500).send()
          else response.status(200).send(resultArray)
        })
      }
    })
  })

 app.delete('/api/results', (request, response) => {
     const { id } = request.body
     Result.findByIdAndRemove(id, err => {
       if (err) response.status(500).send()
       else {
         Result.find({}, (findErr, resultArray) => {
           if (findErr) response.status(500).send()
           else response.status(200).send(resultArray)
         })
       }
     })
   })



//認証用API
 var apiRoutes = express.Router();
app.use('/api', apiRoutes);

apiRoutes.get('/healthcheck', function(req, res){
  res.send('hello world!');
});

apiRoutes.post('/authenticate', [
  check('name').isLength({min: 1}),
  check('password').isLength({ min: 5 })
], function(req, res) {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const users = require('./userDB');
  const result = users.filter(user => user.name == req.body.name);
  if(result[0] == undefined) {
    return res.status(404).send('指定された名前のユーザは存在しません。');
  }
  const user = result[0];
  if(user.password != req.body.password) {
    return res.status(403).send('名前またはパスワードが違います。');
  } else {
    const payload = {
      name: user.name,
      nickname: user.nickname
    }
    var token = jwt.sign(payload, config.secret);
    res.json({
      token: token
    });
  }
});

apiRoutes.get('/me', VerifyToken, function(req, res, next) {
  const users = require('./userDB');
  const user = users.filter(user => user.name == req.decoded.name);

  if (user[0] == undefined) return res.status(404).send("ユーザが見つかりません。");
  const u = user[0];
  const payload = {
    id: u.id,
    name: u.name,
    nickname: u.nickname
  }
  res.status(200).send(payload);
});
//ここまで認証用
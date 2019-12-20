import React, {Component} from 'react'
import RikosaHeader from './rikosaHeader';

function ResultTable (props) {
  var year = props.displayyear
  return(
    <div>
      <h3>新歓合宿</h3>
      <ResultCompetition
        resultArray={props.resultArray}
        handleFetchGame={props.handleFetchGame}
        year={year}
        comp={"新歓合宿"}
      />
      <h3>稲穂カップ</h3>
      <ResultCompetition
        resultArray={props.resultArray}
        handleFetchGame={props.handleFetchGame}
        year={year}
        comp={"稲穂カップ"}
      />
      <h3>スプリングカップ</h3>
      <ResultCompetition
        resultArray={props.resultArray}
        handleFetchGame={props.handleFetchGame}
        year={year}
        comp={"スプリングカップ"}
      />
      <h3>学年合宿１年生</h3>
      <ResultCompetition
        resultArray={props.resultArray}
        handleFetchGame={props.handleFetchGame}
        year={year}
        comp={"学年合宿１年生"}
      />
      <h3>学年合宿２年生</h3>
      <ResultCompetition
        resultArray={props.resultArray}
        handleFetchGame={props.handleFetchGame}
        year={year}
        comp={"学年合宿２年生"}
      />
      <h3>夏の陣</h3>
      <ResultCompetition
        resultArray={props.resultArray}
        handleFetchGame={props.handleFetchGame}
        year={year}
        comp={"夏の陣"}
      />
      <h3>マガジン杯</h3>
      <ResultCompetition
        resultArray={props.resultArray}
        handleFetchGame={props.handleFetchGame}
        year={year}
        comp={"マガジン杯"}
      />
      <h3>理工系リーグ</h3>
      <ResultCompetition
        resultArray={props.resultArray}
        handleFetchGame={props.handleFetchGame}
        year={year}
        comp={"理工系リーグ"}
      />
      <h3>理工系カップ</h3>
      <ResultCompetition
        resultArray={props.resultArray}
        handleFetchGame={props.handleFetchGame}
        year={year}
        comp={"理工系カップ"}
      />
      <h3>新関東カップ</h3>
      <ResultCompetition
        resultArray={props.resultArray}
        handleFetchGame={props.handleFetchGame}
        year={year}
        comp={"新関東カップ"}
      />
      <h3>新関東リーグ</h3>
      <ResultCompetition
        resultArray={props.resultArray}
        handleFetchGame={props.handleFetchGame}
        year={year}
        comp={"新関東リーグ"}
      />
      <h3>クリスマスカップ</h3>
      <ResultCompetition
        resultArray={props.resultArray}
        handleFetchGame={props.handleFetchGame}
        year={year}
        comp={"クリスマスカップ"}
      />
      <h3>学内戦</h3>
      <ResultCompetition
        resultArray={props.resultArray}
        handleFetchGame={props.handleFetchGame}
        year={year}
        comp={"学内戦"}
      />
      <h3>練習試合</h3>
      <ResultCompetition
        resultArray={props.resultArray}
        handleFetchGame={props.handleFetchGame}
        year={year}
        comp={"練習試合"}
      />
      <h3>その他</h3>
      <ResultCompetition
        resultArray={props.resultArray}
        handleFetchGame={props.handleFetchGame}
        year={year}
        comp={"その他"}
      />
    </div>
  );
}

function ResultCompetition (props){
  var info = []
  var year = props.year
  var comp = props.comp
  var comment = ""
  for(var key in props.resultArray){
    if((props.resultArray[key].year == year)&&(props.resultArray[key].competition == comp)){
      info.push(
        props.resultArray[key]
      ) 
    }
  }
  if(info.length == 0){
    var comment = "試合結果はありません"
  }
  return(
    <ul>
      <p>{comment}</p>
      {info.map(result => (
        <li key={result._id}>
          {`${result.stage}(vs${result.you})`}
          <button　onClick={() => props.handleFetchGame(result._id)}>⚽詳細</button>
          <button onClick={() => this.handleDeleteGame(result._id)}>delete</button>
        </li>
      ))}
    </ul>
  );
}

class RikosaResult extends Component{

  constructor(props){
    super(props);
    var date = new Date()
    this.state = {
      flag: false,
      year: date.getFullYear()
    }
    this.handleFetchData = this.handleFetchData.bind(this);
    this.handleFetchGame = this.handleFetchGame.bind(this);
    this.handleDeleteGame = this.handleDeleteGame.bind(this);
  }

  handleFetchData(e){
    this.props.fetchResult();
    // console.log('クリック')
  }

  handleFetchGame(id){
    this.setState({
      flag: true,
    });
    this.props.fetchGame(id);
  }

  componentWillMount(){
    this.handleFetchData();
  }

  fetchYear(year){
    this.setState({
      year: year,
    })
  }

  handleDeleteGame(id){
    if(window.confirm('本当に消しますか？')){
      this.props.deleteGame(id);
      window.alert('削除しました');
    }else{
      window.alert('キャンセルされました');
    }
  }
  render(){
    const { isFetching, resultArray, gameArray } = this.props
    console.log(this.props.resultArray)
    console.log(this.props.gameArray)
    return(
      <div>
        <RikosaHeader menu="対戦成績編集・削除"/>
        <div style={{display: 'flex'}}>
          <div style={{width: '50%'}}>
            <div className='resultBack'>
              <button onClick={() => this.fetchYear(2019)}>2019年</button>
              <button onClick={() => this.fetchYear(2020)}>2020年</button>
              <h2>＜{this.state.year}年度結果＞</h2>
            </div>
            <div style={{width: '100%',height: '400px',overflow: 'auto', marginTop: '110px',padding: 5}}>
              <ResultTable
                resultArray={resultArray}
                handleFetchGame={this.handleFetchGame}
                displayyear={this.state.year}
              />
            </div>
          </div>
          <div style={{left: '50%', padding: '1%', position:'fixed' ,width: '50%'}}>
            {
              this.state.flag &&
              <div>

                <div style={{display: 'flex' ,padding: '5px', height:'40px'}}>
                  <h2>★{gameArray.competition}</h2>
                  <h2>（{gameArray.stage}）</h2>
                </div>
                <div style={{display: 'flex', textAlign: 'center',padding: '10px', height:'150px'}}>
                  <div style={{width:'40%',border:'solid'}}>
                    <h2 style={{height:'70px'}}>{gameArray.us}</h2>
                    <h2>{gameArray.ourscore}</h2>
                  </div>
                  <div style={{width:'20%'}}>
                    <h1>-</h1>
                  </div>
                  <div style={{width:'40%',border:'solid'}}>
                    <h2 style={{height:'70px'}}>{gameArray.you}</h2>
                    <h2>{gameArray.yourscore}</h2>
                  </div>
                </div>
                <div style={{display:'flex', textAlign:'center',padding: 5}}>
                  <div style={{width: '50%'}}>
                    <h2>{gameArray.result}</h2>
                    <h2>{gameArray.day}</h2>
                  </div>
                  <div style={{width:'50%'}}>
                    <h2>{gameArray.comment}</h2>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    )
  }
}


export default RikosaResult

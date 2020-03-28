import React, {Component} from 'react'
import Header from './Header';
import Footer from './footer';

function ResultTable (props) {
  var year = props.displayyear
  return(
    <div className='result_table_title'>
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
    var comment = "※試合結果はありません"
  }
  return(
    <ul className='result_table_inner'>
      <p className='commentSize'>{comment}</p>
      {info.map(result => (
        <li className='result_font' style={{listStyle: 'none'}} key={result._id}>
          {`vs${result.you}(${result.stage})`}
          <button　onClick={() => props.handleFetchGame(result._id)}>⚽詳細</button>
        </li>
      ))}
    </ul>
  );
}

class Result extends Component{

  constructor(props){
    var date = new Date()
    super(props);
    this.state = {
      flag: false,
      year: date.getFullYear()
    }
    this.handleFetchData = this.handleFetchData.bind(this);
    this.handleFetchGame = this.handleFetchGame.bind(this);
  }

  handleFetchData(){
    this.props.fetchResult();
  }

  handleFetchGame(id){
    this.setState({
      flag: true,
    });
    this.props.fetchGame(id);
  }

  fetchYear(year){
    this.setState({
      year: year,
    })
  }

  componentWillMount(){
    this.handleFetchData();
  }

  render(){
    const { isFetching, resultArray, gameArray } = this.props
    console.log(this.props.resultArray)
    console.log(this.props.gameArray)
    return(
      <div>
        <Header menu="対戦成績"/>
        <div style={{display: 'flex'}}>
          <div className='resultMenu'>
            <div className='resultBack'>
              <button onClick={() => this.fetchYear(2019)}>2019年</button>
              <button onClick={() => this.fetchYear(2020)}>2020年</button>
              <h2 className='titleSize'>＜{this.state.year}年度結果＞</h2>
            </div>
            <div className='result_table'> 
              <ResultTable
                resultArray={resultArray}
                handleFetchGame={this.handleFetchGame}
                displayyear={this.state.year}
              />
            </div>
          </div>
          <div className='resultInfo'>
            {
              this.state.flag &&
              <div>

                <div className='resultDetail'>
                  <h2 className='titleSize'>★{gameArray.competition}</h2>
                  <h2 className='titleSize'>（{gameArray.stage}）</h2>
                </div>
                <div style={{display: 'flex', textAlign: 'center',padding: '10px', height:'auto'}}>
                  <div style={{width:'40%',border:'solid'}}>
                    <h2 className='titleSize2' style={{}}>{gameArray.us}</h2>
                    <h2 className='titleSize'>{gameArray.ourscore}</h2>
                  </div>
                  <div style={{width:'20%'}}>
                    <h1>-</h1>
                  </div>
                  <div style={{width:'40%',border:'solid'}}>
                    <h2 className='titleSize2' style={{}}>{gameArray.you}</h2>
                    <h2 className='titleSize'>{gameArray.yourscore}</h2>
                  </div>
                </div>
                <div style={{textAlign:'left',padding: 5}}>
                  <div style={{width: '100%'}}>
                    <h2 className='titleSize'>日付：{gameArray.day}</h2>
                    <h2 className='titleSize'>会場：{gameArray.result}</h2>
                    <h3 className='titleSize'>＜コメント＞</h3>
                    <h2 style={{whiteSpace: 'pre-line'}} className='titleSize'>{gameArray.comment}</h2>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}


export default Result

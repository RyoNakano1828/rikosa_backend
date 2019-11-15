import React, {Component} from 'react'
import Header from './Header';

class Result extends Component{

  constructor(props){
    super(props);
    this.handleFetchData = this.handleFetchData.bind(this);
  }

  handleFetchData(e){
    this.props.fetchResult();
    // console.log('クリック')
  }

  handleFetchGame(id){
    this.props.fetchGame(id);
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
          {/* <button type='submit' onClick={this.handleFetchData}>試合結果を取得</button>*/}
          <div style={{width: 300}}>
          <ul>
            {resultArray.map(result => (
              <li key={result._id}>
                {`${result.us}vs${result.you}`}
                <button　onClick={() => this.handleFetchGame(result._id)}>詳細を見る</button>
              </li>
            ))}
          </ul>
          </div>
          <div style={{flex: 1, padding: '10%'}}>
            <h1>試合結果</h1>
            <h2>{gameArray.ourscore}-{gameArray.yourscore}</h2>
          </div>
        </div>
      </div>
    )
  }
}


export default Result

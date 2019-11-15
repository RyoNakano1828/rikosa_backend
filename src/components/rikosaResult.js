import React, {Component} from 'react'
import RikosaHeader from './rikosaHeader';

class RikosaResult extends Component{

  constructor(props){
    super(props);
    this.handleFetchData = this.handleFetchData.bind(this);
    this.handleDeleteGame = this.handleDeleteGame.bind(this);
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
          {/* <button type='submit' onClick={this.handleFetchData}>試合結果を取得</button>*/}
          <div style={{width: 500}}>
          <ul>
            {resultArray.map(result => (
              <li key={result._id}>
                {`${result.us}vs${result.you}`}
                <button　onClick={() => this.handleFetchGame(result._id)}>詳細を見る</button>
                <button onClick={() => this.handleDeleteGame(result._id)}>delete</button>
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


export default RikosaResult

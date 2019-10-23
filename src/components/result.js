import React, {Component} from 'react'

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
        <div>
          <div><br /><a href={'/home'}>戻る</a></div>
          {/* <button type='submit' onClick={this.handleFetchData}>試合結果を取得</button>*/}
          <ul>
            {resultArray.map(result => (
              <li key={result._id}>
                {`${result.us}vs${result.you}`}
                <button　onClick={() => this.handleFetchGame(result._id)}>詳細を見る</button>
              </li>
            ))}
          </ul>
          <div>
            <p>{gameArray.ourscore}</p>
            <p>ー</p>
            <p>{gameArray.yourscore}</p>
          </div>
        </div>
      </div>
    )
  }
}


export default Result

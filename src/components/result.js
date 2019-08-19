import React, {Component} from 'react'

class Result extends Component{

  constructor(props){
    super(props);
    this.handleFetchData = this.handleFetchData.bind(this);
  }

  handleFetchData(e){
    this.props.fetchResult();
    console.log('クリック')
  }

  handleFetchGame(id){
    this.props.fetchGame(id);
  }

  render(){
    const { isFetching, resultArray, gameArray } = this.props
    console.log(this.props.resultArray)
    console.log(this.props.gameArray)
    return(
      <div>
        {
          isFetching
            ? <h2>Now Loading...</h2>
            : <div>
                <button type='submit' onClick={this.handleFetchData}>試合結果を取得</button>
                <ul>
                  {resultArray.map(result => (
                    <li key={result._id}>
                      {`${result.id}`}
                      <button　onClick={() => this.handleFetchGame(result._id)}>詳細を見る</button>
                    </li>
                  ))}
                </ul>
                <div>
                  <h2>{gameArray.scoreUs}</h2>
                  <h3>{gameArray.scoreYou}</h3>
                </div>
              </div>
        }
      </div>
    )
  }
}


export default Result

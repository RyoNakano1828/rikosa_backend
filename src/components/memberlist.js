import React, {Component} from 'react'

class MemberList extends Component{

  constructor(props){
    super(props);
    this.handleFetchData = this.handleFetchData.bind(this);
  }

  handleFetchData(e){
    this.props.fetchMember();
    console.log('クリック')
  }

  handleFetchPeople(id){
    this.props.fetchPeople(id);
  }

  componentWillMount(){
    this.handleFetchData();
  }

  render(){
    const { isFetching, playerArray, peopleArray } = this.props
    console.log(this.props.peopleArray)
    console.log(this.props.playerArray)
    return(
      <div>
        <div>
          <div><br /><a href={'/home'}>戻る</a></div>
          {/*<button type='submit' onClick={this.handleFetchData}>fetch data</button>*/}
          <ul>
            {playerArray.map(player => (
              <li key={player._id}>
                {`${player.name} (${player.position})`}
                <button　onClick={() => this.handleFetchPeople(player._id)}>詳細を見る</button>
              </li>
            ))}
          </ul>
          <div>
            <h2>{peopleArray.name}</h2>
            <h3>{peopleArray.position}</h3>
          </div>
        </div>
      </div>
    )
  }
}


export default MemberList

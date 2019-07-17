import React, {Component} from 'react'

class MemberList extends Component{

  constructor(props){
    super(props);
    this.state = {
      peopleId: '',
    }
    this.handleFetchPeople = this.handleFetchPeople.bind(this);
    this.handleFetchData = this.handleFetchData.bind(this);
  }

  handleFetchData(e){
    e.preventDefault();
    this.props.fetchMember();
  }

  handleFetchPeople(e){
    const { name, value} = e.target;
    this.setState({ [name]: value });
    //stateに保持したいIDを入れる
    const { peopleId } = this.state;
    console.log(peopleId);
    this.props.fetchPeople(peopleId);
  }

  render(){
    const { isFetching, playerArray, peopleArray } = this.props
    console.log(this.props.peopleArray)
    console.log(this.props.playerArray)
    return(
      <div>
        {
          isFetching
            ? <h2>Now Loading...</h2>
            : <div>
                <button type='submit' onClick={this.handleFetchData}>fetch data</button>
                <ul>
                  {playerArray.map(player => (
                    <li key={player._id}>
                      {`${player.name} (${player.position})`}
                      <button tpye='submit' name="peopleId" value="player.key" onClick={this.handleFetchPeople}>詳細を見る</button>
                    </li>
                  ))}
                </ul>
              </div>
        }
      </div>
    )
  }
}


export default MemberList

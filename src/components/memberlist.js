import React, {Component} from 'react'

class MemberList extends Component{

  constructor(props){
    super(props);
    this.state = {
      pure: false,
      mane: false,
    }
    this.handleFetchData = this.handleFetchData.bind(this);
  }

  handleFetchData(e){
    this.props.fetchMember();
    this.props.fetchManagers();
    console.log('クリック')
  }

  handleFetchPeople(id){
    this.setState({
      pure: true,
      mane: false,
    });
    this.props.fetchPeople(id);
  }
  
  handleFetchManager(id){
    this.setState({
      mane: true,
      pure: false,
    });
    this.props.fetchManager(id);
  }

  componentWillMount(){
    this.handleFetchData();
  }

  render(){
    const { isFetching, playerArray, managersArray, peopleArray, managerArray } = this.props
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
          <ul>
            {managersArray.map(manager => (
              <li key={manager._id}>
                {`${manager.name} (${manager.uniform})`}
                <button　onClick={() => this.handleFetchManager(manager._id)}>詳細を見る</button>
              </li>
            ))}
          </ul>
          {
            this.state.pure &&
          <div>
            <h2>{peopleArray.name}</h2>
            <h3>{peopleArray.position}</h3>
          </div>
          }
          {
            this.state.mane &&
          <div>
            <h2>{managerArray.name}</h2>
            <h3>{managerArray.uniform}</h3>
          </div>
          }
        </div>
      </div>
    )
  }
}


export default MemberList

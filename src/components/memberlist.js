import React, {Component} from 'react'
import Header from './Header';

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
        <Header menu="メンバー一覧"/>
        <div>
          {/*<button type='submit' onClick={this.handleFetchData}>fetch data</button>*/}
          <h2>プレーヤー一覧</h2>
          <ul>
            {playerArray.map(player => (
              <li key={player._id}>
                {`${player.name} (${player.position})`}
                <button　onClick={() => this.handleFetchPeople(player._id)}>詳細を見る</button>
              </li>
            ))}
          </ul>
          <h2>マネージャー一覧</h2>
          <ul>
            {managersArray.map(manager => (
              <li key={manager._id}>
                {`${manager.name} (${manager.uniform})`}
                <button　onClick={() => this.handleFetchManager(manager._id)}>詳細を見る</button>
              </li>
            ))}
          </ul>
          <h2>詳細はこちら↓</h2>
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

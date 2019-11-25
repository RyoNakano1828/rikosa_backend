import React, {Component} from 'react'
import Header from './Header';
import axios from 'axios';

function PlayerTable (props){
  var info = [];
  var now   = new Date();
  var year  = now.getFullYear();
  var rikosa = 1959;
  for(var key in props.playerArray){ 
    // console.log(props.playerArray[key].generation);
    if(props.playerArray[key].generation == (year-rikosa-props.th)){
    info.push(
      props.playerArray[key]
      )
    }
  }
  // console.log(info);
  return( 
  <ul>
    {info.map(player => (
      <li key={player._id}>
        {`${player.name} ${player.position} (${player.generation})`}
        <button　onClick={() => props.handleFetchPeople(player._id)}>詳細を見る</button>
      </li>
    ))}
  </ul>
  );
}

function ManagerTable(props){
  var info = [];
  var now   = new Date();
  var year  = now.getFullYear();
  var rikosa = 1959;
  for(var key in props.managersArray){ 
    // console.log(playerArray[key].generation);
    if(props.managersArray[key].generation == (year-rikosa-props.th)){
    info.push(
      props.managersArray[key]
      )
    }
  }
  // console.log(info);
  return(
  <ul>
    {info.map(manager => (
      <li key={manager._id}>
        {`${manager.name} (${manager.generation})`}
        <button　onClick={() => props.handleFetchManager(manager._id)}>詳細を見る</button>
      </li>
    ))}
  </ul>
  );
}

class MemberList extends Component{

  constructor(props){
    super(props);
    this.state = {
      pure: false,
      mane: false,
      th: Number,
      images: [],
      imagename: ""
    }
    this.handleFetchData = this.handleFetchData.bind(this);
    this.handleFetchPeople = this.handleFetchPeople.bind(this);
    this.handleFetchManager = this.handleFetchManager.bind(this);
  }

  handleFetchData(e){
    this.props.fetchMember();
    this.props.fetchManagers();
  }

  handleFetchPeople(id){
    this.setState({
      pure: true,
      mane: false,
      images: [],
    });
    this.props.fetchPeople(id);
    return axios.get('/getimage',{

    }).then(keylist => {
        for(let v of Object.keys(keylist.data.keyList)) {
          var images = {};
          if(keylist.data.keyList[v] == this.props.peopleArray.name){
            images.name = keylist.data.keyList[v];
            images.url = `https://rikosa2.s3.amazonaws.com/${keylist.data.keyList[v]}`
            console.log(images);
            
            this.setState({
                images: this.state.images.concat(images)
              });
          }
        }
    }).catch(e => console.log(e));
  }
  
  handleFetchManager(id){
    this.setState({
      mane: true,
      pure: false,
      images: [],
    });
    this.props.fetchManager(id);
    return axios.get('/getimage',{

    }).then(keylist => {
        for(let v of Object.keys(keylist.data.keyList)) {
          var images = {};
          if(keylist.data.keyList[v] == this.props.managerArray.name){
            images.name = keylist.data.keyList[v];
            images.url = `https://rikosa2.s3.amazonaws.com/${keylist.data.keyList[v]}`
            console.log(images);
            
            this.setState({
                images: this.state.images.concat(images)
              });
          }
        }
    }).catch(e => console.log(e));
  }

  componentWillMount(){
    this.handleFetchData();
  }

   

  render(){
    const { playerArray, managersArray, peopleArray, managerArray } = this.props
    // const divStyle = {
    //   width: 400,
    //   height: 200,
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   borderWidth: 2,
    //   borderColor: '#666',
    //   borderStyle: 'solid',
    //   borderRadius: 5
    // };

    return(
      <div>
        <Header menu="メンバー一覧"/>
        <div style={{display: 'flex'}}>
          <div style={{width: 400}}>
            <h2>1年生</h2>
              <h3>プレーヤー</h3>
              <PlayerTable
                playerArray={playerArray}
                handleFetchPeople={this.handleFetchPeople}
                th={0}
              />
              <h3>マネージャー</h3>
              <ManagerTable
                managersArray={managersArray}
                handleFetchManager={this.handleFetchManager}
                th={0}
              />
            <h2>2年生</h2>
            <h3>プレーヤー</h3>
              <PlayerTable
                playerArray={playerArray}
                handleFetchPeople={this.handleFetchPeople}
                th={1}
              />
              <h3>マネージャー</h3>
              <ManagerTable
                managersArray={managersArray}
                handleFetchManager={this.handleFetchManager}
                th={1}
              />
            <h2>3年生</h2>
            <h3>プレーヤー</h3>
              <PlayerTable
                playerArray={playerArray}
                handleFetchPeople={this.handleFetchPeople}
                th={2}
              />
              <h3>マネージャー</h3>
              <ManagerTable
                managersArray={managersArray}
                handleFetchManager={this.handleFetchManager}
                th={2}
              />
          </div>
          
          <div style={{flex: 1}}>
            {
              this.state.pure &&
              <div>
                <h2>選手情報</h2>
                <h2>{peopleArray.name}</h2>
                <h3>{peopleArray.position}</h3>
                <h3>{peopleArray.uniform}</h3>
                <h3>{peopleArray.from}</h3>
                <h3>{peopleArray.belong}</h3>
                <h3>{peopleArray.hobby}</h3>
                <h3>{peopleArray.comment}</h3>
                <h3>{peopleArray.height}</h3>
                <h3>{peopleArray.generation}</h3>
              </div>
            }
            {
              this.state.mane &&
              <div>
                <h2>マネージャー情報</h2>
                <h2>{managerArray.name}</h2>
                <h3>{managerArray.uniform}</h3>
                <h3>{managerArray.univ}</h3>
                <h3>{managerArray.hobby}</h3>
                <h3>{managerArray.comment}</h3>
                <h3>{managerArray.generation}</h3>
              </div>
            }
            {this.state.images.length > 0 &&
              <div style={{margin: 30}}>
                {this.state.images.map(({name, url}) =>
                  <img key={name} src={url} style={{width: 200, height: 200}}/>)}
              </div>
            }
          </div>
        </div>
      </div>
    )
  }
}


export default MemberList

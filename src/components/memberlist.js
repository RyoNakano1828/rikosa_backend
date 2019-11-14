import React, {Component} from 'react'
import Header from './Header';
import axios from 'axios';
import Dropzone from 'react-dropzone';


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
    const { isFetching, playerArray, managersArray, peopleArray, managerArray } = this.props
    const divStyle = {
      width: 400,
      height: 200,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: '#666',
      borderStyle: 'solid',
      borderRadius: 5
    };

    const activeStyle = {
      opacity: 0.5,
      backgroundColor: '#eee'
    };

    const rejectStyle = {
      backgroundColor: '#ffdddd'
    };
    const flexStyle = {
      flex: 1,
      flexDirection: 'row'
    }
    // console.log(this.props.peopleArray)
    // console.log(this.props.playerArray)
    return(
      <div>
        <Header menu="メンバー一覧"/>
        <div style={{display: 'flex'}}>
          <div style={{width: 400}}>
            <h2>1年生</h2>
              <h3>プレーヤー</h3>
              {
                (() => {
                  var info = [];
                  var now   = new Date();
                  var year  = now.getFullYear();
                  var rikosa = 1959;
                  for(var key in playerArray){ 
                    // console.log(playerArray[key].generation);
                    if(playerArray[key].generation == (year-rikosa)){
                    info.push(
                      playerArray[key]
                      )
                    }
                  }
                  // console.log(info);
                  return <ul>
                    {info.map(player => (
                      <li key={player._id}>
                        {`${player.name} ${player.position} (${player.generation})`}
                        <button　onClick={() => this.handleFetchPeople(player._id)}>詳細を見る</button>
                      </li>
                    ))}
                  </ul>
                })()
              }
              <h3>マネージャー</h3>
              {
                (() => {
                  var info = [];
                  var now   = new Date();
                  var year  = now.getFullYear();
                  var rikosa = 1959;
                  for(var key in managersArray){ 
                    // console.log(playerArray[key].generation);
                    if(managersArray[key].generation == (year-rikosa)){
                    info.push(
                      managersArray[key]
                      )
                    }
                  }
                  // console.log(info);
                  return <ul>
                    {info.map(manager => (
                      <li key={manager._id}>
                        {`${manager.name} (${manager.generation})`}
                        <button　onClick={() => this.handleFetchManager(manager._id)}>詳細を見る</button>
                      </li>
                    ))}
                  </ul>
                })()
              }
      
            <h2>2年生</h2>
              <h3>プレーヤー</h3>            
              {
                (() => {
                  var info = [];
                  var now   = new Date();
                  var year  = now.getFullYear();
                  var rikosa = 1959;
                  for(var key in playerArray){ 
                    // console.log(playerArray[key].generation);
                    if(playerArray[key].generation == (year-rikosa-1)){
                    info.push(
                      playerArray[key]
                      )
                    }
                  }
                  // console.log(info);
                  return <ul>
                    {info.map(player => (
                      <li key={player._id}>
                        {`${player.name} ${player.position} (${player.generation})`}
                        <button　onClick={() => this.handleFetchPeople(player._id)}>詳細を見る</button>
                      </li>
                    ))}
                  </ul>
                })()
              }
              <h3>マネージャー</h3>
              {
                (() => {
                  var info = [];
                  var now   = new Date();
                  var year  = now.getFullYear();
                  var rikosa = 1959;
                  for(var key in managersArray){ 
                    // console.log(playerArray[key].generation);
                    if(managersArray[key].generation == (year-rikosa-1)){
                    info.push(
                      managersArray[key]
                      )
                    }
                  }
                  // console.log(info);
                  return <ul>
                    {info.map(manager => (
                      <li key={manager._id}>
                        {`${manager.name} (${manager.generation})`}
                        <button　onClick={() => this.handleFetchManager(manager._id)}>詳細を見る</button>
                      </li>
                    ))}
                  </ul>
                })()
              }

            <h2>3年生</h2>
              <h3>プレーヤー</h3>
              {
                (() => {
                  var info = [];
                  var now   = new Date();
                  var year  = now.getFullYear();
                  var rikosa = 1959;
                  for(var key in playerArray){ 
                    if(playerArray[key].generation == (year-rikosa-2)){
                    info.push(
                      playerArray[key]
                      )
                    }
                  }
                  // console.log(info);
                  return <ul>
                    {info.map(player => (
                      <li key={player._id}>
                        {`${player.name} ${player.position} (${player.generation})`}
                        <button　onClick={() => this.handleFetchPeople(player._id)}>詳細を見る</button>
                      </li>
                    ))}
                  </ul>
                })()
              }
              <h3>マネージャー</h3>
              {
                (() => {
                  var info = [];
                  var now   = new Date();
                  var year  = now.getFullYear();
                  var rikosa = 1959;
                  for(var key in managersArray){ 
                    // console.log(playerArray[key].generation);
                    if(managersArray[key].generation == (year-rikosa-2)){
                    info.push(
                      managersArray[key]
                      )
                    }
                  }
                  // console.log(info);
                  return <ul>
                    {info.map(manager => (
                      <li key={manager._id}>
                        {`${manager.name} (${manager.generation})`}
                        <button　onClick={() => this.handleFetchManager(manager._id)}>詳細を見る</button>
                      </li>
                    ))}
                  </ul>
                })()
              }
            </div>
          {/* <h2>プレーヤー一覧</h2>
          <ul>
            {playerArray.map(player => (
              <li key={player._id}>
                {`${player.name} ${player.position} (${player.generation})`}
                <button　onClick={() => this.handleFetchPeople(player._id)}>詳細を見る</button>
              </li>
            ))}
          </ul>
          <h2>マネージャー一覧</h2>
          <ul>
            {managersArray.map(manager => (
              <li key={manager._id}>
                {`${manager.name} ${manager.uniform} (${manager.generation})`}
                <button　onClick={() => this.handleFetchManager(manager._id)}>詳細を見る</button>
              </li>
            ))}
          </ul> */}
          <div style={{flex: 1}}>
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
          {this.state.images.length > 0 &&
            <div style={{margin: 30}}>
              {this.state.images.map(({name, url}) =>
                <img key={name} src={url} style={{width: 200, height: 200}}/>)}
            </div>}
        </div>
        </div>
      </div>
    )
  }
}


export default MemberList

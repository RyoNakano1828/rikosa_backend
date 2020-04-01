import React, {Component} from 'react'
import Header from './Header';
import Footer from './footer';
import axios from 'axios';

function PlayerTable (props){
  var info = [];
  var now   = new Date();
  var year  = now.getFullYear();
  var rikosa = 1959;
  var todo = '';

  for(var key in props.playerArray){ 
    // console.log(props.playerArray[key].generation);
    if(props.playerArray[key].generation == (year-rikosa-props.th)){
    info.push(
      props.playerArray[key]
      )
    }
  }
  if (info == ''){
    todo = 'お待ちしております！';
  }
  console.log(todo);
  console.log(info);
  
  // console.log(info);
  return( 
  <ul>
    <p className='wait_new'>{todo}</p>
    {info.map(player => (
      <li style={{listStyle: 'none'}} key={player._id}>
        {`${player.name}(#${player.uniform})`}
        <button　onClick={() => props.handleFetchPeople(player._id)}>👦詳細</button>
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
  var todo = "";
  for(var key in props.managersArray){ 
    // console.log(playerArray[key].generation);
    if(props.managersArray[key].generation == (year-rikosa-props.th)){
    info.push(
      props.managersArray[key]
      )
    }
  }
  if( info == ''){
    todo = 'お待ちしております！';
  }
  // console.log(info);
  return(
  <ul>
    <p className='wait_new'>{todo}</p>
    {info.map(manager => (
      <li style={{listStyle: 'none'}} key={manager._id}>
        {`${manager.name}(#${manager.uniform})`}
        <button　onClick={() => props.handleFetchManager(manager._id)}>👧詳細</button>
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
      th: 0,
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
   
    }).then( keylist => {
        for(let v of Object.keys(keylist.data.keyList)) {
          var images = {};
          console.log(this.props.peopleArray.name);
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

  sampleResolve(value) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(value * 2);
        }, 2000);
    })
  }
  
  async handleFetchManager(id){
    this.setState({
      mane: true,
      pure: false,
      images: [],
    });
    this.props.fetchManager(id);
    const result = await this.sampleResolve(5);
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

  fetchTH(th){
    this.setState({
      th: th,
    })
  }

  componentWillMount(){
    this.handleFetchData();
  }

   

  render(){
    const { playerArray, managersArray, peopleArray, managerArray } = this.props
    
    return(
      <div>
        <Header menu="メンバー一覧"/>
        <div className='member_flame' style={{display: 'flex'}}>
          <div style={{width: '40%'}}>
            <div className='memberBack'>
              <button className='memberButton'onClick={() => this.fetchTH(0)}>1年</button>
              <button className='memberButton'onClick={() => this.fetchTH(1)}>2年</button>
              <button className='memberButton'onClick={() => this.fetchTH(2)}>3年</button>
              <button className='memberButton'onClick={() => this.fetchTH(3)}>OB</button>
              <h2>{this.state.th+1}年生</h2>
              <h3>プレーヤー</h3>
              <PlayerTable
                playerArray={playerArray}
                handleFetchPeople={this.handleFetchPeople}
                th={this.state.th}
              />
              <h3>マネージャー</h3>
              <ManagerTable
                managersArray={managersArray}
                handleFetchManager={this.handleFetchManager}
                th={this.state.th}
              />
            </div>
          </div>
          
          <div style={{left: '40%', padding: '1%', position:'fixed' ,width: '60%'}}>
            {
              this.state.pure &&
              <div>
                <h1>{peopleArray.name}</h1>
                <div className='memberInfo'>
                  <div className='imageWidth'>
                  {this.state.images.map(({name, url}) =>
                    <img key={name} src={url} className='imageSize'/>)}
                  
                  </div>
                  <div className='introduce'>
                  <table border='1'>
                    <tr><th>背番号</th><th>{peopleArray.uniform}</th></tr>
                    <tr><th>ポジション</th><th>{peopleArray.position}</th></tr>
                    <tr><th>身長</th><th>{peopleArray.height}</th></tr>
                    <tr><th>出身校</th><th>{peopleArray.from}</th></tr>
                    <tr><th>学部</th><th>{peopleArray.belong}</th></tr>
                    <tr><th>趣味</th><th>{peopleArray.hobby}</th></tr>
                    <tr><th>ひとこと</th><th>{peopleArray.comment}</th></tr>
                  </table>
                  </div>
                </div>
                
              </div>
            }
            {
              this.state.mane &&
              <div>
                <h1>{managerArray.name}</h1>
                <div className='memberInfo'>
                  <div className='imageWidth'>
                  {this.state.images.map(({name, url}) =>
                    <img key={name} src={url} className='imageSize'/>)}
                  </div>
                  <div className='introduce'>
                  <table border='1'>
                    <tr><th>背番号</th><th>{managerArray.uniform}</th></tr>
                    <tr><th>大学</th><th>{managerArray.univ}</th></tr>
                    <tr><th>趣味</th><th>{managerArray.hobby}</th></tr>
                    <tr><th>ひとこと</th><th>{managerArray.comment}</th></tr>
                  </table>
                  </div>
                </div>
                
              </div>
            }
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}


export default MemberList

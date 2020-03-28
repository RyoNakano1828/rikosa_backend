import React, {Component} from 'react'
import RikosaHeader from './rikosaHeader';

class RikosaMemberList extends Component{

  constructor(props){
    super(props);
    this.state = {
      flagpure: false,
      flagmane: false,
    };
    this.handleFetchData = this.handleFetchData.bind(this);
    this.elements = null;
  }
   handleFetchData(e){
    this.props.fetchMember();
    this.props.fetchManagers();
    console.log('データかもんぬ')
  }

  handleFetchPeople(id){
    this.setState({
      flagpure: true,
      flagmane: false,
    });
    this.componentDidUpdate(id)
    // const params = {
    //   name: this.elements["name"]["defaultValue"],
    //   namevalue: this.elements["name"]["value"],
    //   position: this.elements["position"]["defaultValue"],
    //   hobby: this.elements[5]["defaultValue"],
    // };
    // console.log(params);
    // console.log(this.elements);
  }

  handleFetchManager(id){
    this.setState({
      flagmane: true,
      flagpure: false,
    });
    this.componentDidUpdate(id)
  }

  handleUpdatePlayer(id,name,position,uniform,from,belong,hobby,height,comment,generation){
    // e.preventDefault();
    if(window.confirm('この内容で登録しますか？')){
      this.props.updatePeople(id,name,position,uniform,from,belong,hobby,height,comment,generation);
      alert("登録しました");
    }else{
      alert("キャンセルしました");
    }
  }

  handleUpdateManager(id,name,uniform,univ,hobby,comment,generation){
    // e.preventDefault();
    if(window.confirm('この内容で登録しますか？')){
      this.props.updateManager(id,name,uniform,univ,hobby,comment,generation);
      alert("登録しました");
    }else{
      alert("キャンセルしました");
    }
  }

  handleDeletePlayer(id){
    if(window.confirm('本当に消しますか？')){
      this.props.deletePeople(id);
      window.alert('削除しました');
    }else{
      window.alert('キャンセルされました');
    }
  }

  handleDeleteManager(id){
    if(window.confirm('本当に消しますか？')){
      this.props.deleteManager(id);
      window.alert('削除しました');
    }else{
      window.alert('キャンセルされました');
    }
  }

  componentWillMount(){
    this.handleFetchData();
  }
  componentDidUpdate(id){
    
    this.props.fetchPeople(id);
    
    this.props.fetchManager(id);
    
    console.log('ああああ')
  }


  render(){
    const {isFetching, playerArray, peopleArray, managersArray, managerArray} = this.props
    return (
    <div>
      <RikosaHeader menu="メンバー編集・削除"/>
      {
        <div style={{display:'flex'}}>
          <div style={{width:'50%'}} >
          <ul>
            {playerArray.map(player => (
              <li key={player._id}>  
                {`${player.name} ${player.position} ${player.uniform}`}
                <button onClick={() => this.handleFetchPeople(player._id)}>編集する</button>
                <button onClick={() => this.handleDeletePlayer(player._id)}>delete</button>
              </li>
            ))}
          </ul>
          <ul>
            {managersArray.map(manager => (
              <li key={manager._id}>  
                {`${manager.name} ${manager.uniform}`}
                <button onClick={() => this.handleFetchManager(manager._id)}>編集する</button>
                <button onClick={() => this.handleDeleteManager(manager._id)}>delete</button>
              </li>
            ))}
          </ul>
          </div>
          
          <div style={{left: '50%',position:'fixed',width:'50%'}} >{
            this.state.flagpure &&
            <form onSubmit={() => this.handleUpdatePlayer(peopleArray._id,
                                                          this.elements["name"]["value"],
                                                          this.elements["position"]["value"],
                                                          this.elements["uniform"]["value"],
                                                          this.elements["from"]["value"],
                                                          this.elements["belong"]["value"],
                                                          this.elements["hobby"]["value"],
                                                          this.elements["height"]["value"],
                                                          this.elements["comment"]["value"],
                                                          this.elements["generation"]["value"],
                                                          )} ref={el => this.elements = el && el.elements}>
              <ul>
              <li>
                名前:
                <input type="text" name="name" defaultValue={peopleArray.name}/>
              </li>
              <li>
                背番号:
                <input type="text" name="uniform" ref="inputText" defaultValue={peopleArray.uniform}/>
              </li>
              <li>
                ポジション:
                <input type="text" name="position" ref="inputText" defaultValue={peopleArray.position}/>
              </li>
              <li>
                出身:
                <input type="text" name="from" ref="inputText" defaultValue={peopleArray.from}/>
              </li>
              <li>
                学部学科:
                <input type="text" name="belong" ref="inputText" defaultValue={peopleArray.belong}/>
              </li>
              <li>
                趣味・特技:
                <input type="text" name="hobby" ref="inputText" defaultValue={peopleArray.hobby}/>
              </li>
              <li>
                身長:
                <input type="text" name="height" ref="inputText" defaultValue={peopleArray.height}/>
              </li>
              <li>
                コメント:
                <input type="text" name="comment" ref="inputText" defaultValue={peopleArray.comment}/>
              </li>
              <li>
                何期？:
                <input type="text" name="generation" ref="inputText" defaultValue={peopleArray.generation}/>
              </li>
            </ul>
              <button type="submit">submit</button>
            </form>
          }
          </div>
          <div>{
            this.state.flagmane &&
            <form onSubmit={() => this.handleUpdateManager(managerArray._id,
                                                          this.elements["name"]["value"],
                                                          this.elements["uniform"]["value"],
                                                          this.elements["univ"]["value"],
                                                          this.elements["hobby"]["value"],
                                                          this.elements["comment"]["value"],
                                                          this.elements["generation"]["value"],
                                                          )} ref={el => this.elements = el && el.elements}>
              <ul>
              <li>
                名前:
                <input type="text" name="name" defaultValue={managerArray.name}/>
              </li>
              <li>
                背番号:
                <input type="text" name="uniform" ref="inputText" defaultValue={managerArray.uniform}/>
              </li>
              <li>
                大学:
                <input type="text" name="univ" ref="inputText" defaultValue={managerArray.univ}/>
              </li>
              <li>
                趣味・特技:
                <input type="text" name="hobby" ref="inputText" defaultValue={managerArray.hobby}/>
              </li>
              <li>
                コメント:
                <input type="text" name="comment" ref="inputText" defaultValue={managerArray.comment}/>
              </li>
              <li>
                何期？:
                <input type="text" name="generation" ref="inputText" defaultValue={managerArray.generation}/>
              </li>
            </ul>
              <button type="submit">submit</button>
            </form>
          }
          </div>
        </div>
      }
    </div>
    )
  }
}
  


export default RikosaMemberList

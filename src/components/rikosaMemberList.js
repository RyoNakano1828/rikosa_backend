import React, {Component} from 'react'

class RikosaMemberList extends Component{

  constructor(props){
    super(props);
    this.state = {
      flag: false,
    };
    this.handleFetchData = this.handleFetchData.bind(this);
    this.elements = null;
  }
   handleFetchData(e){
    this.props.fetchMember();
    console.log('データかもんぬ')
  }

  handleFetchPeople(id){
    this.setState({
      flag: true
    });
    this.props.fetchPeople(id);
    // const params = {
    //   name: this.elements["name"]["defaultValue"],
    //   namevalue: this.elements["name"]["value"],
    //   position: this.elements["position"]["defaultValue"],
    //   hobby: this.elements[5]["defaultValue"],
    // };
    // console.log(params);
    // console.log(this.elements);
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

  handleDeletePlayer(id){
    if(window.confirm('本当に消しますか？')){
      this.props.deletePeople(id);
      window.alert('削除しました');
    }else{
      window.alert('キャンセルされました');
    }
  }

  componentWillMount(){
    this.handleFetchData();
  }
  componentWillUpdate(){
    console.log('ああああ')
  }


  render(){
    const {isFetching, playerArray, peopleArray} = this.props

    // const params = {
    //   name: this.elements[name],
    // };
    console.log(this.elements);
    console.log(this.props.peopleArray);
    console.log(this.props.playerArray);
    return (
    <div>
      {
        <div>
          <div><br /><a href={'/rikosahome'}>戻る</a></div>
          <ul>
            {playerArray.map(player => (
              <li key={player._id}>  
                {`${player.name} ${player.position} ${player.uniform}`}
                <button onClick={() => this.handleFetchPeople(player._id)}>編集する</button>
                <button onClick={() => this.handleDeletePlayer(player._id)}>delete</button>
              </li>
            ))}
          </ul>
          <div>{
            this.state.flag &&
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
        </div>
      }
    </div>
    )
  }
}
  


export default RikosaMemberList

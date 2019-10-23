import React, {Component} from 'react'

class ManagerForm extends Component {

  postManager(name,uniform,univ,hobby,comment,generation){
    if(window.confirm('この内容で登録しますか？')){
      this.props.postManager(name,uniform,univ,hobby,comment,generation);
      alert("登録しました");
    }else{
      alert("キャンセルしました");
    }
  }

  changeName(name){
    this.props.changeName(name);
  }
  changeUniform(uniform){
    this.props.changeUniform(uniform);
  }
  changeUniv(univ){
    this.props.changeUniv(univ);
  }
  changeHobby(hobby){
    this.props.changeHobby(hobby);
  }
  changeComment(comment){
    this.props.changeComment(comment);
  }
  changeGeneration(generation){
    this.props.changeGeneration(generation);
  }

  render(){
    const {name,uniform,univ,hobby,comment,generation} = this.props
    return (
      <div>
        <div><br /><a href={'/rikosahome'}>戻る</a></div>
        <form onSubmit={() => this.postManager(name,uniform,univ,hobby,comment,generation)}>
          <ul>
          <li>
            名前:
            <input value={name} onChange={e => this.changeName(e.target.value)} />
          </li>
          <li>
            背番号:
            <input value={uniform} onChange={e => this.changeUniform(e.target.value)} />
          </li>
          <li>
            大学:
            <input value={univ} onChange={e => this.changeUniv(e.target.value)} />
          </li>
          <li>
            趣味・特技:
            <input value={hobby} onChange={e => this.changeHobby(e.target.value)} />
          </li>
          <li>
            コメント:
            <input value={comment} onChange={e => this.changeComment(e.target.value)} />
          </li>
          <li>
            何期？:
            <input value={generation} onChange={e => this.changeGeneration(e.target.value)} />
          </li>
        </ul>
          <button type="submit">submit</button>
        </form>
      </div>
    )
  }
}

export default ManagerForm
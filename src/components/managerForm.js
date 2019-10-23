import React, {Component} from 'react'

class PlayerForm extends Component {

  postPlayer(name,position,uniform,from,belong,hobby,height,comment,generation){
    this.props.postPlayer(name,position,uniform,from,belong,hobby,height,comment,generation);
  }

  changeName(name){

    this.props.changeName(name);
  }

  changePosition(position){
    this.props.changePosition(position);
  }

  changeUniform(uniform){
    this.props.changeUniform(uniform);
  }

  changeFrom(from){
    this.props.changeFrom(from);
  }

  changeBelong(belong){
    this.props.changeBelong(belong);
  }

  changeHobby(hobby){
    this.props.changeHobby(hobby);
  }

  changeHeight(height){
    this.props.changeHeight(height);
  }

  changeComment(comment){
    this.props.changeComment(comment);
  }

  changeGeneration(generation){
    this.props.changeGeneration(generation);
  }

  render(){
    const {name,position,uniform,from,belong,hobby,height,comment,generation} = this.props
    return (
      <div>
        <div><br /><a href={'/rikosahome'}>戻る</a></div>
        <form onSubmit={() => this.postPlayer(name,position,uniform,from,belong,hobby,height,comment,generation)}>
          <label>
            名前:
            <input value={name} onChange={e => this.changeName(e.target.value)} />
          </label>
          <label>
            背番号:
            <input value={uniform} onChange={e => this.changeUniform(e.target.value)} />
          </label>
          <label>
            ポジション:
            <input value={position} onChange={e => this.changePosition(e.target.value)} />
          </label>
          <label>
            出身:
            <input value={from} onChange={e => this.changeFrom(e.target.value)} />
          </label>
          <label>
            学部学科:
            <input value={belong} onChange={e => this.changeBelong(e.target.value)} />
          </label>
          <label>
            趣味・特技:
            <input value={hobby} onChange={e => this.changeHobby(e.target.value)} />
          </label>
          <label>
            身長:
            <input value={height} onChange={e => this.changeHeight(e.target.value)} />
          </label>
          <label>
            コメント:
            <input value={comment} onChange={e => this.changeComment(e.target.value)} />
          </label>
          <label>
            何期？:
            <input value={generation} onChange={e => this.changeGeneration(e.target.value)} />
          </label>
          <button type="submit">submit</button>
        </form>
      </div>
    )
  }
}

export default PlayerForm
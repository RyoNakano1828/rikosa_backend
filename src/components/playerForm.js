import React, {Component} from 'react'

class PlayerForm extends Component {

  postPlayer(name, position){
    this.props.postPlayer(name,position);
  }

  changeName(name){
    
    this.props.changeName(name);
  }

  changePosition(position){
    this.props.changePosition(position);
  }

  render(){
    const {name, position} = this.props
    return (
      <div>
        <form onSubmit={() => this.postPlayer(name,position)}>
          <label>
            名前:
            <input value={name} onChange={(e) => this.changeName(e.target.value)} />
          </label>
          <label>
            ポジション:
            <input value={position} onChange={(e) => this.changePosition(e.target.value)} />
          </label>
          <button type="submit">submit</button>
        </form>
      </div>
    )
  }
}

export default PlayerForm
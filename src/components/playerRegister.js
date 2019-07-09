import React, {Component} from 'react'
import axios from 'axios'
import { 
  changeName, changePosition, initializeForm,
  requestData, receiveDataSuccess, receiveDataFailed  
} from '../actions/actionTypes'

class Playerregister extends Component {
  state = {
    name:"",
    position:"",
  };
  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <label>
          名前:
          <input value={name} onChange={e => store.dispatch(changeName(e.target.value))} />
        </label>
        <label>
          ポジション:
          <input value={position} onChange={e => store.dispatch(changePosition(e.target.value))} />
        </label>
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default Playerregister
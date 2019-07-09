import React from 'react'
import axios from 'axios'
import { 
  changeName, changePosition, initializeForm,
  requestData, receiveDataSuccess, receiveDataFailed  
} from '../actions/actionTypes'

const PlayerRegister = ({ store }) => {
  const { name, position } = store.getState().form

  const handleSubmit = e => {
    e.preventDefault()

    store.dispatch(requestData()) 
    axios.post('/api/players', {
      name,
      position,
    })
    .then(response => {
      store.dispatch(initializeForm())
      const playerArray = response.data
      store.dispatch(receiveDataSuccess(playerArray))
    })
    .catch(err => {
      console.error(new Error(err))
      store.dispatch(receiveDataFailed())
    })
  }

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

export default PlayerRegister
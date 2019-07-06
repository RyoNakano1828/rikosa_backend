import React from 'react'
import axios from 'axios'
import { requestData, receiveDataSuccess, receiveDataFailed } from '../actions/actionTypes'

const Playerlist = ({ store }) => {
  const { isFetching, playerArray } = store.getState().players

  const handleFetchData = () => {
    store.dispatch(requestData())
    axios.get('/api/players')
    .then(response => {
      const _playerArray = response.data
      store.dispatch(receiveDataSuccess(_playerArray))  
    })
    .catch(err => {
      console.error(new Error(err))
      store.dispatch(receiveDataFailed())
    })
  }

  /*const handleUpdateCharacter = id => {
    store.dispatch(requestData())
    axios.put('/api/characters', {
      id,
    })
    .then(response => {
      const _characterArray = response.data
      store.dispatch(receiveDataSuccess(_characterArray))
    })
    .catch(err => {
      console.error(new Error(err))
      store.dispatch(receiveDataFailed())
    })
  }

  const handleDeleteCharacter = id => {
    store.dispatch(requestData())
    axios({
      method: 'delete',
      url: '/api/characters',
      data: {
        id,
      }
    })
    .then(response => {
      const _characterArray = response.data
      store.dispatch(receiveDataSuccess(_characterArray))
    })
    .catch(err => {
      console.error(new Error(err))
      store.dispatch(receiveDataFailed())
    })
  }
*/
  return (
    <div>
      {
        isFetching
          ? <h2>Now Loading...</h2>
          : <div>
              <button onClick={() => handleFetchData()}>fetch data</button>
              <ul>
                {playerArray.map(player => (
                  <li key={player._id}>  
                    {`${player.name} (${player.position})`}
                    {/*<button onClick={() => handleUpdateCharacter(character._id)}>+1</button>
                    <button onClick={() => handleDeleteCharacter(character._id)}>delete</button>*/}
                  </li>
                ))}
              </ul>
            </div>
      }
    </div>
  )
}

export default Playerlist

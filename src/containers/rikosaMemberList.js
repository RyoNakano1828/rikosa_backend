import React, {Component} from 'react'
import axios from 'axios'
import { requestData, receiveDataSuccess, receiveDataFailed } from '../actions/actionTypes'

const RikosaMemberList = ({ store }) => {
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

  const handleUpdatePlayer = id => {
    store.dispatch(requestData())
    axios.put('/api/players', {
      id,
    })
    .then(response => {
      const _playerArray = response.data
      store.dispatch(receiveDataSuccess(_playerArray))
    })
    .catch(err => {
      console.error(new Error(err))
      store.dispatch(receiveDataFailed())
    })
  }

  const handleDeletePlayer = id => {
    store.dispatch(requestData())
    axios({
      method: 'delete',
      url: '/api/players',
      data: {
        id,
      }
    })
    .then(response => {
      const _playerArray = response.data
      store.dispatch(receiveDataSuccess(_playerArray))
    })
    .catch(err => {
      console.error(new Error(err))
      store.dispatch(receiveDataFailed())
    })
  }

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
                    <button onClick={() => handleUpdatePlayer(player._id)}>+1</button>
                    <button onClick={() => handleDeletePlayer(player._id)}>delete</button>
                  </li>
                ))}
              </ul>
            </div>
      }
    </div>
  )
}


export default RikosaMemberList

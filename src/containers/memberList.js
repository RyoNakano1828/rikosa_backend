import React, {Component} from 'react'
import axios from 'axios'
import { requestData, receiveDataSuccess, receiveDataFailed } from '../actions/actionTypes'

const MemberList = ({ store }) => {
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
                  </li>
                ))}
              </ul>
            </div>
      }
    </div>
  )
}


export default MemberList

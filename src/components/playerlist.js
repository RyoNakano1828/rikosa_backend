import React, {Component} from 'react'
import axios from 'axios'
import { requestData, receiveDataSuccess, receiveDataFailed } from '../actions/actionTypes'

class Playerlist extends Component{
render(
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
  )
}


export default Playerlist

import {resultConstants} from '../constants';
import axios from 'axios'

export const fetchResult = () => {
  return dispatch => {
    dispatch(requestData());
    axios.get('/api/results')
    .then(response => {
        console.log(response.data)
        const _resultArray = response.data;
        console.log(_resultArray)
        dispatch(receiveResultSuccess(_resultArray));  
      })
    .catch(err => {
      console.error(new Error(err))
      dispatch(receiveDataFailed())
    })
  }
}

export const fetchGame = id => {
  return dispatch => {
    dispatch(requestData());
    axios.get('/api/game', {
      params:{
        id
      }
    })
    .then(response => {
      const _gameArray = response.data
      console.log(response.data)
      console.log(id)
      dispatch(receiveGameSuccess(_gameArray))
    })
    .catch(err => {
      console.error(new Error(err))
      dispatch(receiveDataFailed())
    })
  }
}

export const deleteGame = id => {
  return dispatch => {
    dispatch(requestData());
    axios({
      method: 'delete',
      url: '/api/results',
      data: {
        id,
      }
    })
    .then(response => {
      const _resultArray = response.data
      dispatch(receiveResultSuccess(_resultArray))
    })
    .catch(err => {
      console.error(new Error(err))
      dispatch(receiveDataFailed())
    })
  }
}


const requestData = () => ({
  type: resultConstants.REQUEST_DATA,
});
const receiveResultSuccess = (resultArray) => ({
  type: resultConstants.RECEIVE_RESULT_SUCCESS,
  payload: resultArray
});
const receiveDataFailed = () => ({
  type: resultConstants.RECEIVE_DATA_FAILED,
});

const receiveGameSuccess = (gameArray) => ({
  type: resultConstants.RECEIVE_GAME_SUCCESS,
  payload: gameArray
});
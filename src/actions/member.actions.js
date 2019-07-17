import {memberConstants} from '../constants';
import axios from 'axios'

export const fetchMember = () => {
  return dispatch => {
    dispatch(requestData());
    axios.get('/api/players')
    .then(response => {
        console.log(response.data)
        const _playerArray = response.data;
        console.log(_playerArray)
        dispatch(receiveDataSuccess(_playerArray));  
      })
    .catch(err => {
      console.error(new Error(err))
      dispatch(receiveDataFailed())
    })
  }
}


const requestData = () => ({
  type: memberConstants.REQUEST_DATA,
});
const receiveDataSuccess = (playerArray) => ({
  type: memberConstants.RECEIVE_DATA_SUCCESS,
  payload: playerArray
});
const receiveDataFailed = () => ({
  type: memberConstants.RECEIVE_DATA_FAILED,
});
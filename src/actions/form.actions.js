import {formConstants, memberConstants} from '../constants';
import axios from 'axios'

export const postPlayer = (name,position) => {
  return dispatch => {
    dispatch(requestData()) 
    axios.post('/api/players', {
      name,
      position,
    })
    .then(response => {
      dispatch(initializeForm())
      const _playerArray = response.data
      dispatch(receiveDataSuccess(_playerArray))
    })
    .catch(err => {
      console.error(new Error(err))
      dispatch(receiveDataFailed())
    })
  }
}

export const changeName = (name) => {
  return dispatch => {
    dispatch(ChangeName(name))
  }
}

export const changePosition = (position) => {
  return dispatch => {
    dispatch(ChangePosition(position))
  }
}


const ChangeName = name => ({
  type: formConstants.CHANGE_NAME,
  payload: name
})
const ChangePosition = position => ({
  type: formConstants.CHANGE_POSITION,
  payload: position
})

  const initializeForm = () => ({
    type: formConstants.INITIALIZE_FORM,
  });

  const requestData = () => ({
  type: memberConstants.REQUEST_DATA,
});

  const receiveDataSuccess = (playerArray) => ({
    type: memberConstants.RECEIVE_DATA_SUCSESS,
    payload: playerArray
  })

  const receiveDataFailed = () => ({
  type: memberConstants.RECEIVE_DATA_FAILED,
});

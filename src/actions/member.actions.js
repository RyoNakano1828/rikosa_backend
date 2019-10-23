import { memberConstants } from '../constants';
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

export const fetchPeople = id => {
  return dispatch => {
    dispatch(requestData());
    axios.get('/api/people', {
      params:{
        id
      }
    })
    .then(response => {
      const _peopleArray = response.data
      console.log(response.data)
      console.log(id)
      dispatch(receivePeopleSuccess(_peopleArray))
    })
    .catch(err => {
      console.error(new Error(err))
      dispatch(receiveDataFailed())
    })
  }
}

export const deletePeople = id => {
  return dispatch => {
    dispatch(requestData());
    axios({
      method: 'delete',
      url: '/api/players',
      data: {
        id,
      }
    })
    .then(response => {
      const _playerArray = response.data
      dispatch(receiveDataSuccess(_playerArray))
    })
    .catch(err => {
      console.error(new Error(err))
      dispatch(receiveDataFailed())
    })
  }
}

export const updatePeople = (id,name,position,uniform,from,belong,hobby,height,comment,generation) => {
  return dispatch => {
    dispatch(requestData());
    alert('あっぷでーと');
    axios.put('/api/players', {
        id,
        name,
        position,
        uniform,
        from,
        belong,
        hobby,
        comment,
        height,
        generation,
    })
    .then(response => {
      const _playerArray = response.data
      dispatch(receiveDataSuccess(_playerArray))
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

const receivePeopleSuccess = (peopleArray) => ({
  type: memberConstants.RECEIVE_PEOPLE_SUCCESS,
  payload: peopleArray
});
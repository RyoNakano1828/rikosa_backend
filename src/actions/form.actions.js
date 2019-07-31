import {formConstants, memberConstants} from '../constants';
import axios from 'axios'

export const postPlayer = (name,position,uniform,from,belong,hobby,height,comment,generation) => {
  return dispatch => {
    dispatch(requestData()) 
    axios.post('/api/players', {
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

export const changeUniform = (uniform) => {
  return dispatch => {
    dispatch(ChangeUniform(uniform))
  }
}

export const changeFrom = (from) => {
  return dispatch => {
    dispatch(ChangeFrom(from))
  }
}
export const changeBelong = (belong) => {
  return dispatch => {
    dispatch(ChangeBelong(belong))
  }
}
export const changeHobby = (hobby) => {
  return dispatch => {
    dispatch(ChangeHobby(hobby))
  }
}
export const changeComment = (comment) => {
  return dispatch => {
    dispatch(ChangeComment(comment))
  }
}
export const changeHeight = (height) => {
  return dispatch => {
    dispatch(ChangeHeight(height))
  }
}
export const changeGeneration = (generation) => {
  return dispatch => {
    dispatch(ChangeGeneration(generation))
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
const ChangeUniform = uniform => ({
  type: formConstants.CHANGE_UNIFORM,
  payload: uniform
})
const ChangeFrom = from => ({
  type: formConstants.CHANGE_FROM,
  payload: from
})
const ChangeBelong = belong => ({
  type: formConstants.CHANGE_BELONG,
  payload: belong
})
const ChangeHobby = hobby => ({
  type: formConstants.CHANGE_HOBBY,
  payload: hobby
})
const ChangeComment = comment => ({
  type: formConstants.CHANGE_COMMENT,
  payload: comment
})
const ChangeHeight = height => ({
  type: formConstants.CHANGE_HEIGHT,
  payload: height
})
const ChangeGeneration = generation => ({
  type: formConstants.CHANGE_GENERATION,
  payload: generation
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

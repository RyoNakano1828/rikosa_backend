
//のちにReducerファイルに移動したいですね！！！！

import { combineReducers } from 'redux'
import { 
  CHANGE_NAME, CHANGE_POSITION, INITIALIZE_FORM,
  REQUEST_DATA, RECEIVE_DATA_SUCCESS, RECEIVE_DATA_FAILED
} from './actions/actionTypes'

const initialState = {
  form: {
    name: '',
    position: '',
  },
  players: {
    isFetching: false,
    playerArray: [],
  },
}

const formReducer = (state = initialState.form, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: action.name,
      }
    case CHANGE_POSITION:
      return {
        ...state,
        position: action.position,
      }
    case INITIALIZE_FORM:
      return initialState.form
    default:
      return state
  }
}

const playersReducer = (state = initialState.players, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        playerArray: action.playerArray,
      }
    case RECEIVE_DATA_FAILED:
      return {
        ...state,
        isFetching: false,
      }
    default:
      return state
  }
}

//まとめるやつーー
const rootReducer = combineReducers({
  form: formReducer,
  players: playersReducer,
})

export default rootReducer
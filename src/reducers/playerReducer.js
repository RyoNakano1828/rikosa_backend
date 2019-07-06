import { 
  CHANGE_NAME, CHANGE_POSITION, INITIALIZE_FORM,
  REQUEST_DATA, RECEIVE_DATA_SUCCESS, RECEIVE_DATA_FAILED
} from '../actions/actionTypes'

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

const playerReducer = (state = initialState.players, action) => {
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

export default playerReducer;
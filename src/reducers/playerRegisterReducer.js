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

export default (state = initialState.form, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: action.name,
      }
    case CHANGE_POSITION:
      return {
        ...state,
        age: action.position,
      }
    case INITIALIZE_FORM:
      return initialState.form
    default:
      return state
  }
}

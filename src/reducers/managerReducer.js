import { 
  CHANGE_NAME, CHANGE_AGE, INITIALIZE_FORM,
  REQUEST_DATA, RECEIVE_DATA_SUCCESS, RECEIVE_DATA_FAILED
} from '../actions/actionTypes'

const initialState = {
  form: {
    name: '',
    age: '',
  },
  characters: {
    isFetching: false,
    characterArray: [],
  },
}

export default (state = initialState.form, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: action.name,
      }
    case CHANGE_AGE:
      return {
        ...state,
        age: action.age,
      }
    case INITIALIZE_FORM:
      return initialState.form
    default:
      return state
  }
}

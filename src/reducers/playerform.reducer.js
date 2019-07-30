import { formConstants } from '../constants';

const initialState = {
    name: '',
    position: '',
}

export function form(state = initialState, action){
  switch (action.type) {
    case formConstants.CHANGE_NAME:
      return {
        ...state,
        name: action.payload,
      }
    case formConstants.CHANGE_POSITION:
      return {
        ...state,
        position: action.payload,
      }
    case formConstants.INITIALIZE_FORM:
      return initialState
    default:
      return state
  }
}

import { formConstants } from '../constants';

const initialState = {
    name: '',
    uniform: '',
    univ: '',
    hobby: '',
    comment: '',
    generation: '',
}

export function form(state = initialState, action){
  switch (action.type) {
    case formConstants.CHANGE_NAME:
      return {
        ...state,
        name: action.payload,
      }
    case formConstants.CHANGE_UNIFORM:
      return {
        ...state,
        uniform: action.payload,
      }
    case formConstants.CHANGE_UNIV:
      return {
        ...state,
        univ: action.payload,
      }
    case formConstants.CHANGE_HOBBY:
      return {
        ...state,
        hobby: action.payload,
      }
    case formConstants.CHANGE_COMMENT:
      return {
        ...state,
        comment: action.payload,
      }
    case formConstants.CHANGE_GENERATION:
      return {
        ...state,
        generation: action.payload,
      }
    case formConstants.INITIALIZE_FORM:
      return initialState
    default:
      return state
  }
}

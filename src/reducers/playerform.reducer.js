import { formConstants } from '../constants';

const initialState = {
    name: '',
    position: '',
    uniform: '',
    from: '',
    belong: '',
    hobby: '',
    comment: '',
    height: '',
    generation: '',
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
    case formConstants.CHANGE_UNIFORM:
      return {
        ...state,
        uniform: action.payload,
      }
    case formConstants.CHANGE_FROM:
      return {
        ...state,
        from: action.payload,
      }
    case formConstants.CHANGE_BELONG:
      return {
        ...state,
        belong: action.payload,
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
    case formConstants.CHANGE_HEIGHT:
      return {
        ...state,
        height: action.payload,
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

import { resultFormConstants } from '../constants';

const initialState = {
    year: '',
    date: '',
    competition: '',
    us: '',
    you: '',
    stage: '',
    ourscore: '',
    yourscore: '',
    comment: '',
    result: '',
}

export function form(state = initialState, action){
  switch (action.type) {
    case resultFormConstants.CHANGE_NAME:
      return {
        ...state,
        name: action.payload,
      }
    case resultFormConstants.CHANGE_POSITION:
      return {
        ...state,
        position: action.payload,
      }
    case resultFormConstants.CHANGE_UNIFORM:
      return {
        ...state,
        uniform: action.payload,
      }
    case resultFormConstants.CHANGE_FROM:
      return {
        ...state,
        from: action.payload,
      }
    case resultFormConstants.CHANGE_BELONG:
      return {
        ...state,
        belong: action.payload,
      }
    case resultFormConstants.CHANGE_HOBBY:
      return {
        ...state,
        hobby: action.payload,
      }
    case resultFormConstants.CHANGE_COMMENT:
      return {
        ...state,
        comment: action.payload,
      }
    case resultFormConstants.CHANGE_HEIGHT:
      return {
        ...state,
        height: action.payload,
      }
    case resultFormConstants.CHANGE_GENERATION:
      return {
        ...state,
        generation: action.payload,
      }
    case resultFormConstants.INITIALIZE_FORM:
      return initialState
    default:
      return state
  }
}

import { resultFormConstants } from '../constants';

const initialState = {
    year: '',
    day: '',
    competition: '',
    us: '',
    you: '',
    stage: '',
    ourscore: '',
    yourscore: '',
    comment: '',
    result: '',
}

export function resultform(state = initialState, action){
  switch (action.type) {
    case resultFormConstants.CHANGE_YEAR:
      return {
        ...state,
        year: action.payload,
      }
    case resultFormConstants.CHANGE_DAY:
      return {
        ...state,
        day: action.payload,
      }
    case resultFormConstants.CHANGE_COMPETITION:
      return {
        ...state,
        competition: action.payload,
      }
    case resultFormConstants.CHANGE_US:
      return {
        ...state,
        us: action.payload,
      }
    case resultFormConstants.CHANGE_YOU:
      return {
        ...state,
        you: action.payload,
      }
    case resultFormConstants.CHANGE_STAGE:
      return {
        ...state,
        stage: action.payload,
      }
    case resultFormConstants.CHANGE_OURSCORE:
      return {
        ...state,
        ourscore: action.payload,
      }
    case resultFormConstants.CHANGE_YOURSCORE:
      return {
        ...state,
        yourscore: action.payload,
      }
    case resultFormConstants.CHANGE_COMMENT:
      return {
        ...state,
        comment: action.payload,
      }
    case resultFormConstants.CHANGE_RESULT:
      return {
        ...state,
        result: action.payload,
      }
    case resultFormConstants.INITIALIZE_FORM:
      return initialState
    default:
      return state
  }
}

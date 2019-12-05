import { resultConstants } from '../constants';

const initialState = {
    isFetching: false,
    resultArray: [],
    gameArray: [],
}

export function result(state = initialState, action){
  switch (action.type) {
    case resultConstants.DATA_RESULTS:
      return {
        ...state,
        isFetching: true,
      }
    case  resultConstants.RECEIVE_RESULT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        resultArray: action.payload,
      }
    case resultConstants.RECEIVE_DATA_FAILED:
      return {
        ...state,
        isFetching: false,
      }
    case resultConstants.RECEIVE_GAME_SUCCESS:
      return {
        ...state,
        isFetching: false,
        gameArray: action.payload,
      }
    default:
      return state
  }
}
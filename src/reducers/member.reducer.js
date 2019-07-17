import { memberConstants } from '../constants';

const initialState = {
    isFetching: false,
    playerArray: [],
}

export function member(state = initialState, action){
  switch (action.type) {
    case memberConstants.REQUEST_DATA:
      return {
        ...state,
        isFetching: true,
      }
    case  memberConstants.RECEIVE_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        playerArray: action.payload,
      }
    case memberConstants.RECEIVE_DATA_FAILED:
      return {
        ...state,
        isFetching: false,
      }
    default:
      return state
  }
}
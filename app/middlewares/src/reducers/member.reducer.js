import { memberConstants } from '../constants';

const initialState = {
    isFetching: false,
    playerArray: [],
    peopleArray: [],
    managersArray: [],
    managerArray: [],
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
    case memberConstants.RECEIVE_PEOPLE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        peopleArray: action.payload,
      }
    case memberConstants.RECEIVE_MANAGERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        managersArray: action.payload,
      }
    case memberConstants.RECEIVE_MANAGER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        managerArray: action.payload,
      }
    default:
      return state
  }
}
/*import axios from 'axios';

export const FETCH_MESSAGES = 'FETCH_MESSAGES'
export const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS'

function requestMessages() {
  return {
    type: FETCH_MESSAGES
  }
}

function receiveMessages(json) {
  return {
    type: FETCH_MESSAGES_SUCCESS,
    messages: json
  }
}

// メッセージ取得
export function fetchMessages() {
  return dispatch => {
    dispatch(requestMessages())
    return axios.get('/messages.json').then((response) => {
        dispatch(receiveMessages(response.data))
      }).catch((response) => {
        console.log(response)
      })
  }
}
*/
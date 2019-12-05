import { resultFormConstants, resultConstants } from '../constants';
import axios from 'axios'

export const postResult = (year,day,competition,us,you,stage,ourscore,yourscore,comment,result) => {
  return dispatch => {
    dispatch(requestData()) 
    axios.post('/api/results', {
      year,
      day,
      competition,
      us,
      you,
      stage,
      ourscore,
      yourscore,
      comment,
      result,
    })
    .then(response => {
      dispatch(initializeForm())
      const _resultArray = response.data
      dispatch(receiveResultSuccess(_resultArray))
    })
    .catch(err => {
      console.error(new Error(err))
      dispatch(receiveDataFailed())
    })
  }
}

export const changeYear = (year) => {
  return dispatch => {
    dispatch(ChangeYear(year))
  }
}

export const changeDay = (day) => {
  return dispatch => {
    dispatch(ChangeDay(day))
  }
}

export const changeCompetition = (competition) => {
  return dispatch => {
    dispatch(ChangeCompetition(competition))
  }
}

export const changeUs = (us) => {
  return dispatch => {
    dispatch(ChangeUs(us))
  }
}
export const changeYou = (you) => {
  return dispatch => {
    dispatch(ChangeYou(you))
  }
}
export const changeStage = (stage) => {
  return dispatch => {
    dispatch(ChangeStage(stage))
  }
}
export const changeOurscore = (ourscore) => {
  return dispatch => {
    dispatch(ChangeOurscore(ourscore))
  }
}
export const changeYourscore = (yourscore) => {
  return dispatch => {
    dispatch(ChangeYourscore(yourscore))
  }
}
export const changeComment = (comment) => {
  return dispatch => {
    dispatch(ChangeComment(comment))
  }
}

export const changeResult = (result) => {
  return dispatch => {
    dispatch(ChangeResult(result))
  }
}

const ChangeYear = year => ({
  type: resultFormConstants.CHANGE_YEAR,
  payload: year
})
const ChangeDay = day => ({
  type: resultFormConstants.CHANGE_DAY,
  payload: day
})
const ChangeCompetition = competition => ({
  type: resultFormConstants.CHANGE_COMPETITION,
  payload: competition
})
const ChangeUs = us => ({
  type: resultFormConstants.CHANGE_US,
  payload: us
})
const ChangeYou = you => ({
  type: resultFormConstants.CHANGE_YOU,
  payload: you
})
const ChangeStage = stage => ({
  type: resultFormConstants.CHANGE_STAGE,
  payload: stage
})
const ChangeOurscore = ourscore => ({
  type: resultFormConstants.CHANGE_OURSCORE,
  payload: ourscore
})
const ChangeYourscore = yourscore => ({
  type: resultFormConstants.CHANGE_YOURSCORE,
  payload: yourscore
})
const ChangeComment = comment => ({
  type: resultFormConstants.CHANGE_COMMENT,
  payload: comment
})
const ChangeResult = result => ({
  type: resultFormConstants.CHANGE_RESULT,
  payload: result
})

const initializeForm = () => ({
  type: resultFormConstants.INITIALIZE_FORM,
});
const requestData = () => ({
  type: resultConstants.REQUEST_DATA,
});
const receiveResultSuccess = (resultArray) => ({
  type: resultConstants.RECEIVE_RESULT_SUCSESS,
  payload: resultArray
})
const receiveDataFailed = () => ({
  type: resultConstants.RECEIVE_DATA_FAILED,
});

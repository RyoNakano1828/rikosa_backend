import { connect } from 'react-redux';
import ResultForm from '../components/resultForm';
import { postResult, changeYear, changeDay, changeCompetition, changeUs, changeYou, changeStage, changeOurscore, changeYourscore, changeComment, changeResult } from '../actions/resultForm.actions';

const mapStateToProps = (state, ownProps) => ({
  year: state.resultform.year,
  day: state.resultform.day,
  competition: state.resultform.competition,
  us: state.resultform.us,
  you: state.resultform.you,
  stage: state.resultform.stage,
  ourscore: state.resultform.ourscore,
  yourscore: state.resultform.yourscore,
  comment: state.resultform.comment,
  result: state.resultform.result,
});

const mapDispatchToProps = dispatch => ({
  postResult(year,day,competition,us,you,stage,ourscore,yourscore,comment,result){
    dispatch(postResult(year,day,competition,us,you,stage,ourscore,yourscore,comment,result));
  },
  changeYear(year){
    dispatch(changeYear(year));
  },
  changeDay(day){
    dispatch(changeDay(day));
  },
  changeCompetition(competition){
    dispatch(changeCompetition(competition));
  },
  changeUs(us){
    dispatch(changeUs(us));
  },
  changeYou(you){
    dispatch(changeYou(you));
  },
  changeStage(stage){
    dispatch(changeStage(stage));
  },
  changeOurscore(ourscore){
    dispatch(changeOurscore(ourscore));
  },
  changeYourscore(yourscore){
    dispatch(changeYourscore(yourscore));
  },
  changeComment(comment){
    dispatch(changeComment(comment));
  },
  changeResult(result){
    dispatch(changeResult(result));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultForm);

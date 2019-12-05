import { connect } from 'react-redux';
import RikosaResult from '../components/rikosaResult';
import { fetchResult, fetchGame, deleteGame } from '../actions/result.actions';

const mapStateToProps = (state, ownProps) => ({
  resultArray: state.result.resultArray,
  gameArray: state.result.gameArray,
});

const mapDispatchToProps = dispatch => ({
  fetchResult() {
    dispatch(fetchResult());
  },
  fetchGame(id) {
  	dispatch(fetchGame(id));
  },
  deleteGame(id){
      dispatch(deleteGame(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(RikosaResult);

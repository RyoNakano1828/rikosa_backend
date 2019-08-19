import { connect } from 'react-redux';
import Result from '../components/result';
import { fetchResult, fetchGame } from '../actions/result.actions';

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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Result);

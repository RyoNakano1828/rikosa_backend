import { connect } from 'react-redux';
import PlayerForm from '../components/playerForm';
import { postPlayer, changeName, changePosition } from '../actions/form.actions';

const mapStateToProps = (state, ownProps) => ({
  name: state.form.name,
  position: state.form.position,
});

const mapDispatchToProps = dispatch => ({
  postPlayer(name,position){
    dispatch(postPlayer(name,position));
  },
  changeName(name){
    dispatch(changeName(name));
  },
  changePosition(position){
    dispatch(changePosition(position));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerForm);

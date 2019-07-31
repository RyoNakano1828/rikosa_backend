import { connect } from 'react-redux';
import PlayerForm from '../components/playerForm';
import { postPlayer, changeName, changePosition, changeUniform, changeFrom, changeBelong, changeBelomg, changeHobby, changeComment, changeHeight, changeGeneration } from '../actions/form.actions';

const mapStateToProps = (state, ownProps) => ({
  name: state.form.name,
  position: state.form.position,
  uniform: state.form.uniform,
  from: state.form.from,
  belong: state.form.belong,
  hobby: state.form.hobby,
  comment: state.form.comment,
  height: state.form.height,
  generation: state.form.generation,
});

const mapDispatchToProps = dispatch => ({
  postPlayer(name,position,uniform,from,belong,hobby,height,comment,generation){
    dispatch(postPlayer(name,position,uniform,from,belong,hobby,height,comment,generation));
  },
  changeName(name){
    dispatch(changeName(name));
  },
  changePosition(position){
    dispatch(changePosition(position));
  },
  changeUniform(uniform){
    dispatch(changeUniform(uniform));
  },
  changeFrom(from){
    dispatch(changeFrom(from));
  },
  changeBelong(belong){
    dispatch(changeBelong(belong));
  },
  changeHobby(hobby){
    dispatch(changeHobby(hobby));
  },
  changeComment(comment){
    dispatch(changeComment(comment));
  },
  changeHeight(height){
    dispatch(changeHeight(height));
  },
  changeGeneration(generation){
    dispatch(changeGeneration(generation));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerForm);

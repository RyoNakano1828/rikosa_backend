import { connect } from 'react-redux';
import ManagerForm from '../components/managerForm';
import { postManager, changeName, changeUniv, changeUniform, changeHobby, changeComment, changeGeneration } from '../actions/form.actions';

const mapStateToProps = (state, ownProps) => ({
  name: state.maneform.name,
  uniform: state.maneform.uniform,
  univ: state.maneform.univ,
  hobby: state.maneform.hobby,
  comment: state.maneform.comment,
  generation: state.maneform.generation,
});

const mapDispatchToProps = dispatch => ({
  postManager(name,uniform,univ,hobby,comment,generation){
    dispatch(postManager(name,uniform,univ,hobby,comment,generation));
  },
  changeName(name){
    dispatch(changeName(name));
  },
  changeUniform(uniform){
    dispatch(changeUniform(uniform));
  },
  changeUniv(univ){
    dispatch(changeUniv(univ));
  },
  changeHobby(hobby){
    dispatch(changeHobby(hobby));
  },
  changeComment(comment){
    dispatch(changeComment(comment));
  },
  changeGeneration(generation){
    dispatch(changeGeneration(generation));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ManagerForm);

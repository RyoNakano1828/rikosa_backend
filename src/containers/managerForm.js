import { connect } from 'react-redux';
import ManagerForm from '../components/managerForm';
import { postManager, changeName, changeUniv, changeUniform, changeHobby, changeComment, changeGeneration } from '../actions/form.actions';

const mapStateToProps = (state, ownProps) => ({
  name: state.form.name,
  uniform: state.form.uniform,
  univ: state.form.univ,
  hobby: state.form.hobby,
  comment: state.form.comment,
  generation: state.form.generation,
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

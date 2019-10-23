import { connect } from 'react-redux';
import rikosaMemberList from '../components/rikosaMemberList';
import { fetchMember, fetchPeople, deletePeople, updatePeople, fetchManager, fetchManagers, deleteManager, updateManager } from '../actions/member.actions';

const mapStateToProps = (state, ownProps) => ({
  playerArray: state.member.playerArray,
  peopleArray: state.member.peopleArray,
  managerArray: state.member.managerArray,
  managersArray: state.member.managersArray,
});

const mapDispatchToProps = dispatch => ({
  fetchMember() {
    dispatch(fetchMember());
  },
  fetchPeople(id) {
    dispatch(fetchPeople(id));
  },
  deletePeople(id) {
    dispatch(deletePeople(id));
  },
  updatePeople(id,name,position,uniform,from,belong,hobby,height,comment,generation){
    dispatch(updatePeople(id,name,position,uniform,from,belong,hobby,height,comment,generation));
  },
  fetchManagers() {
    dispatch(fetchManagers());
  },
  fetchManager(id) {
    dispatch(fetchManager(id));
  },
  deleteManager(id) {
    dispatch(deleteManager(id));
  },
  updateManager(id,name,uniform,univ,hobby,comment,generation){
    dispatch(updateManager(id,name,uniform,univ,hobby,comment,generation));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(rikosaMemberList);

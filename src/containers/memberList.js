import { connect } from 'react-redux';
import MemberList from '../components/memberlist';
import { fetchMember, fetchPeople, fetchManager, fetchManagers } from '../actions/member.actions';

const mapStateToProps = (state, ownProps) => ({
  playerArray: state.member.playerArray,
  peopleArray: state.member.peopleArray,
  managersArray: state.member.managersArray,
  managerArray: state.member.managerArray,
});

const mapDispatchToProps = dispatch => ({
  fetchMember() {
    dispatch(fetchMember());
  },
  fetchPeople(id) {
  	dispatch(fetchPeople(id));
  },
  fetchManagers() {
    dispatch(fetchManagers());
  },
  fetchManager(id) {
  	dispatch(fetchManager(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MemberList);

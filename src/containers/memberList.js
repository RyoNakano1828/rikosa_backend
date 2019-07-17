import { connect } from 'react-redux';
import MemberList from '../components/memberlist';
import { fetchMember, fetchPeople } from '../actions/member.actions';

const mapStateToProps = (state, ownProps) => ({
  playerArray: state.member.playerArray,
  peopleArray: state.member.peopleArray,
});

const mapDispatchToProps = dispatch => ({
  fetchMember() {
    dispatch(fetchMember());
  },
  fetchPeople(peopleId) {
  	dispatch(fetchPeople(peopleId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MemberList);

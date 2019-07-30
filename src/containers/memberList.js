import { connect } from 'react-redux';
import MemberList from '../components/memberList';
import { fetchMember, fetchPeople } from '../actions/member.actions';

const mapStateToProps = (state, ownProps) => ({
  playerArray: state.member.playerArray,
  peopleArray: state.member.peopleArray,
});

const mapDispatchToProps = dispatch => ({
  fetchMember() {
    dispatch(fetchMember());
  },
  fetchPeople(id) {
  	dispatch(fetchPeople(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MemberList);

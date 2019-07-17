import { connect } from 'react-redux';
import MemberList from '../components/memberlist';
import { fetchMember } from '../actions/member.actions';

const mapStateToProps = (state, ownProps) => ({
  playerArray: state.member.playerArray,
});

const mapDispatchToProps = dispatch => ({
  fetchMember() {
    dispatch(fetchMember());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MemberList);

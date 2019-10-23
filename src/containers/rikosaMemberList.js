import { connect } from 'react-redux';
import rikosaMemberList from '../components/rikosaMemberList';
import { fetchMember, fetchPeople, deletePeople, updatePeople } from '../actions/member.actions';

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
  },
  deletePeople(id) {
    dispatch(deletePeople(id));
  },
  updatePeople(id,name,position,uniform,from,belong,hobby,height,comment,generation){
    dispatch(updatePeople(id,name,position,uniform,from,belong,hobby,height,comment,generation));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(rikosaMemberList);

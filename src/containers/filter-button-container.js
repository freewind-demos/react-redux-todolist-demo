import {connect} from 'react-redux';
import * as actions from '../actions/index';
import FilterButton from '../components/filter-button.jsx';

function mapStateToProps(state) {
  return {
    globalFilter: state.filter
  }
}
function mapDispatchToProps(dispatch) {
  return {
    filterTodos: (filter) => dispatch(actions.filterTodos(filter))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterButton);


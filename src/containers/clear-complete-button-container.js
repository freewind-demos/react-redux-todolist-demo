import {connect} from 'react-redux';
import * as actions from '../actions/index';
import ClearCompleteButton from '../components/clear-complete-button.jsx';

function mapDispatchToProps(dispatch) {
  return {
    clearCompleteTodos: () => dispatch(actions.clearCompleteTodos())
  }
}

export default connect(state=>state, mapDispatchToProps)(ClearCompleteButton);

import {connect} from 'react-redux';
import * as actions from '../actions/index';
import TodoInput from '../components/todo-input.jsx';

function mapDispatchToProps(dispatch) {
  return {
    onNewTodo: (newTodo) => dispatch(actions.newTodo(newTodo))
  }
}

export default connect(state => state, mapDispatchToProps)(TodoInput);


"use strict";
import {connect} from 'react-redux';
import Todo from '../components/todo.jsx';
import * as actions from '../actions/index';

function mapDispatchToProps(dispatch) {
  return {
    onEditTodo: (id, newContent) => dispatch(actions.editTodo(id, newContent)),
    onToggleTodo: (id) => dispatch(actions.toggleTodo(id)),
    onDeleteTodo: (id) => dispatch(actions.deleteTodo(id))
  }
}

export default connect(state => state, mapDispatchToProps)(Todo);


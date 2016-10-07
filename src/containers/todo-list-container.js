"use strict";
import {connect} from 'react-redux';
import TodoList from '../components/todo-list.jsx';
import * as actions from '../actions/index';

function mapStateToProps(state) {
  let filteredTodos = state.todos;
  if (state.filter) {
    const active = state.filter === 'active';
    filteredTodos = state.todos.filter(todo => todo.active === active);
  }
  return {todos: filteredTodos};
}

function mapDispatchToProps(dispatch) {
  return {
    onEditTodo: (index) => (newContent) => dispatch(actions.editTodo(index, newContent)),
    onToggleTodo: (index) => () => dispatch(actions.toggleTodo(index)),
    onDeleteTodo: (index) => () => dispatch(actions.deleteTodo(index))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);


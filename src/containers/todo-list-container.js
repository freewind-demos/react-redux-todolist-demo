"use strict";
import {connect} from 'react-redux';
import TodoList from '../components/todo-list.jsx';
import * as actions from '../actions/index';
import * as filterTypes from '../constants/filter-types';

function mapStateToProps(state) {
  let filteredTodos = state.todos;
  if (state.filter !== filterTypes.ALL) {
    const active = state.filter === filterTypes.ACTIVE;
    filteredTodos = state.todos.filter(todo => todo.active === active);
  }
  return {todos: filteredTodos};
}

export default connect(mapStateToProps)(TodoList);


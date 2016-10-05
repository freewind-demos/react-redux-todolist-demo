"use strict";
import {connect} from 'react-redux';
import TodoList from '../components/todo-list.jsx';

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps)(TodoList);


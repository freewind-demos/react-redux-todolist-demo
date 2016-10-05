"use strict";
import {connect} from 'react-redux';
import TodoActiveCount from '../components/todo-active-count.jsx';

function mapStateToProps(state) {
  return {
    activeCount: state.todos.filter(todo => todo.active).length
  };
}

export default connect(mapStateToProps)(TodoActiveCount);


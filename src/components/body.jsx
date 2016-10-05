import React, {Component} from 'react';
import TodoInput from './todo-input.jsx';
import TodoList from './todo-list.jsx';

export default class Body extends Component {
  render() {
    return <div>
      <TodoInput/>
      <TodoList/>
    </div>;
  }
}

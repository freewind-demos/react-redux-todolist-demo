import React, {Component} from 'react';
import Todo from './todo.jsx';

export default class TodoList extends Component {
  render() {
    return <div>
      <Todo/>
      <Todo/>
      <Todo/>
    </div>;
  }
}

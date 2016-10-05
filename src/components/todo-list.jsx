import React, {Component} from 'react';
import Todo from './todo.jsx';

export default class TodoList extends Component {
  render() {
    const {todos, onEditTodo} = this.props;
    return <div>
      {
        todos.map((todo, index) => <Todo key={index} todo={todo} onEditTodo={onEditTodo(index)}/>)
      }
    </div>;
  }
}

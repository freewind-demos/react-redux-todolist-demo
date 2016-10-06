import React, {Component} from 'react';
import Todo from './todo.jsx';

export default class TodoList extends Component {
  render() {
    const {todos, onEditTodo, onToggleTodo} = this.props;
    return <div>
      {
        todos.map((todo, index) => <Todo key={index} todo={todo}
                                         onEditTodo={onEditTodo(index)}
                                         onToggleTodo={onToggleTodo(index)}/>)
      }
    </div>;
  }
}

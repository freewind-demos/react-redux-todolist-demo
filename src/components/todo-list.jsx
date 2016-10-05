import React, {Component} from 'react';
import Todo from './todo.jsx';

export default class TodoList extends Component {
  render() {
    const {todos} = this.props;
    console.log(todos);
    return <div>
      {
        todos.map((todo, index) => <Todo todo={todo} key={index}/>)
      }
    </div>;
  }
}

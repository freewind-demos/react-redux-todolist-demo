import React, {Component} from 'react';
import TodoContainer from '../containers/todo-container';

export default class TodoList extends Component {
  render() {
    const {todos} = this.props;
    return <div>
      {
        todos.map(todo => <TodoContainer key={todo.id} todo={todo}/>)
      }
    </div>;
  }
}

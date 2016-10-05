import React, {Component} from 'react';

export default class Todo extends Component {
  render() {
    const {todo} = this.props;
    return <div>
      <input type="checkbox"/>
      <span>{todo.content}</span>
    </div>;
  }
}

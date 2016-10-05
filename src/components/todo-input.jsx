import React, {Component} from 'react';

export default class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.onNewTodo = this.props.onNewTodo;
  }

  render() {
    return <span>
      <input id="todo-input" type="text" placeholder="What needs to be done?"
             onKeyPress={this._onInputItem.bind(this)}/>
    </span>;
  }

  _onInputItem(event) {
    if (event.charCode === 13) {
      const content = event.target.value;
      if (content) {
        event.target.value = '';
        this.onNewTodo(content);
      }
    }
  }
}

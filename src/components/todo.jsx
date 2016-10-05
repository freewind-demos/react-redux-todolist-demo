import React, {Component} from 'react';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }
  }

  render() {
    const {editing} = this.state;
    const {todo} = this.props;
    return <div>
      <input type="checkbox"/>
      { editing
        ? <input type="text" defaultValue={todo.content}
                 onKeyPress={this._onEnter.bind(this)}/>
        : <span onDoubleClick={() => this.setState({editing: true})}>{todo.content}</span>
      }
    </div>;
  }

  _onEnter(event) {
    const {onEditTodo} = this.props;
    if (event.charCode === 13) {
      const newContent = event.target.value;
      onEditTodo(newContent);
      this.setState({
        editing: false
      });
    }
  }
}

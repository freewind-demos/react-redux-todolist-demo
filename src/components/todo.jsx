import React, {Component} from 'react';
import classNames from 'classnames';
import './todo.less';

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
    const completed = !todo.active;
    const todoContentClasses = classNames({
      completed,
      content: true
    });
    return <div>
      <input className="todo-state" type="checkbox" defaultChecked={completed}
             onChange={() => this.props.onToggleTodo()}/>
      { editing
        ? <input className="edit" type="text" defaultValue={todo.content}
                 onKeyPress={this._onEnter.bind(this)}/>
        :
        <span className={todoContentClasses} onDoubleClick={() => this.setState({editing: true})}>{todo.content}</span>
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

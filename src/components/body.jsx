import React, {Component} from "react";
import TodoInputContainer from "../containers/todo-input-container";
import TodoListContainer from "../containers/todo-list-container";

export default class Body extends Component {
  render() {
    return <div>
      <TodoInputContainer />
      <TodoListContainer/>
    </div>;
  }
}

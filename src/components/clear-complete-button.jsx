import React, {Component} from 'react';

export default class ClearCompleteButton extends Component {
  render() {
    const {clearCompleteTodos} = this.props;
    return <button onClick={() =>clearCompleteTodos()}>Clear completed</button>;
  }
}

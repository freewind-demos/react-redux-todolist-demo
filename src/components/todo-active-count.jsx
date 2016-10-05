import React, {Component} from 'react';

export default class TodoActiveCount extends Component {
  render() {
    const {activeCount} = this.props;
    return <span>{activeCount} items left</span>;
  }
}

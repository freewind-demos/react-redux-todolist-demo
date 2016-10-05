import React, {Component} from 'react';

export default class TodoInput extends Component {
  render() {
    return <span>
      <input type="text" placeholder="What needs to be done?"/>
    </span>;
  }
}

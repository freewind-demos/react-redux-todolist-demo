import React, {Component} from 'react';
import AllButton from './all-button.jsx';
import ActiveButton from './active-button.jsx';
import CompletedButton from './completed-button.jsx';

export default class FilterButtons extends Component {
  render() {
    return <span>
      <AllButton />
      <ActiveButton />
      <CompletedButton />
    </span>;
  }
}

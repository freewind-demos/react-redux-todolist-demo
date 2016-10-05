import React, {Component} from 'react';
import TodoActiveCount from './todo-active-count.jsx';
import FilterButtons from './filter-buttons.jsx';
import ClearCompleteButton from './clean-complete-button.jsx';

export default class Footer extends Component {
  render() {
    return <div>
      <TodoActiveCount/>
      <FilterButtons/>
      <ClearCompleteButton/>
    </div>;
  }
}

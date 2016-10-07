import React, {Component} from 'react';
import TodoActiveCountContainer from '../containers/todo-active-count-container';
import FilterButtons from './filter-buttons.jsx';
import ClearCompleteButton from './clean-complete-button.jsx';

export default class Footer extends Component {
  render() {
    return <div className="footer">
      <TodoActiveCountContainer/>
      <FilterButtons/>
      <ClearCompleteButton/>
    </div>;
  }
}

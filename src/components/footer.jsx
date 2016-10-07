import React, {Component} from 'react';
import TodoActiveCountContainer from '../containers/todo-active-count-container';
import FilterButtons from './filter-buttons.jsx';
import ClearCompleteButtonContainer from '../containers/clear-complete-button-container';

export default class Footer extends Component {
  render() {
    const {hasCompleteTodos} = this.props;
    return <div className="footer">
      <TodoActiveCountContainer/>
      <FilterButtons/>
      { hasCompleteTodos
        ? <ClearCompleteButtonContainer/>
        : ""
      }
    </div>;
  }
}

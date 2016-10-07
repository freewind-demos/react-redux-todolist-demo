import React, {Component} from 'react';
import FilterButtonContainer from '../containers/filter-button-container';

export default class FilterButtons extends Component {

  render() {
    return <span>
      <FilterButtonContainer name="All" todoFilter=""/>
      <FilterButtonContainer name="Active" todoFilter="active"/>
      <FilterButtonContainer name="Completed" todoFilter="completed"/>
    </span>;
  }

}

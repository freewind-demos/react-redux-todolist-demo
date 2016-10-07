import React, {Component} from 'react';
import FilterButtonContainer from '../containers/filter-button-container';
import * as filterTypes from '../constants/filter-types';
import './filter-buttons.less';

export default class FilterButtons extends Component {

  render() {
    return <span className="filter-buttons">
      <FilterButtonContainer name="All" forFilter={filterTypes.ALL}/>
      <FilterButtonContainer name="Active" forFilter={filterTypes.ACTIVE}/>
      <FilterButtonContainer name="Completed" forFilter={filterTypes.COMPLETED}/>
    </span>;
  }

}

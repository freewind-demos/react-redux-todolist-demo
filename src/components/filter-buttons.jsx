import React, {Component} from 'react';
import FilterButtonContainer from '../containers/filter-button-container';
import * as filterTypes from '../constants/filter-types';

export default class FilterButtons extends Component {

  render() {
    return <span>
      <FilterButtonContainer name="All" todoFilter={filterTypes.ALL}/>
      <FilterButtonContainer name="Active" todoFilter={filterTypes.ACTIVE}/>
      <FilterButtonContainer name="Completed" todoFilter={filterTypes.COMPLETED}/>
    </span>;
  }

}

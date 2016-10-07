import React, {Component} from 'react';
import classNames from 'classnames';

export default class FilterButton extends Component {

  render() {
    const {name, forFilter, globalFilter, filterTodos} = this.props;
    var selectedClassNames = classNames({
      selected: forFilter === globalFilter
    });
    return <button className={selectedClassNames} onClick={() => filterTodos(forFilter)}>{name}</button>;
  }

}

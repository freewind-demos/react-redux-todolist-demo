import React, {Component} from 'react';

export default class FilterButton extends Component {

  render() {
    const {name, todoFilter, filterTodos} = this.props;
    return <button onClick={() => filterTodos(todoFilter)}>{name}</button>;
  }

}

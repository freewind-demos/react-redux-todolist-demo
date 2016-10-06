"use strict";

import React from "react";
import TodoList from "../../src/components/todo-list.jsx";
import chai from "chai";
import {mount} from "enzyme";

describe('<TodoList />', () => {

  it('shows todos', () => {
    const onEditTodo = chai.spy();
    const onToggleTodo = chai.spy();
    const onDeleteTodo = chai.spy();
    const todos = [
      {content: 'run1', active: true},
      {content: 'run2', active: true}
    ];

    const wrapper = mount(<TodoList todos={todos}
                                    onEditTodo={onEditTodo}
                                    onToggleTodo={onToggleTodo}
                                    onDeleteTodo={onDeleteTodo}/>);
    wrapper.should.contain.text('run1');
    wrapper.should.contain.text('run2');
  });

});

"use strict";

import React from "react";
import TodoList from "../../src/components/todo-list.jsx";
import {mount} from "enzyme";
import chai from "chai";
import {Provider} from "react-redux";

describe('<TodoList />', () => {

  it('shows todos', () => {
    const todos = [
      {id: 'uuid1', content: 'run1', active: true},
      {id: 'uuid2', content: 'run2', active: true}
    ];

    const mockStore = {
      dispatch: chai.spy(),
      getState: chai.spy(),
      subscribe: chai.spy()
    };
    const wrapper = mount(
      <Provider store={mockStore}>
        <TodoList todos={todos}/>
      </Provider>);
    wrapper.should.contain.text('run1');
    wrapper.should.contain.text('run2');
  });

});

"use strict";

import React from "react";
import TodoInput from "../../src/components/todo-input.jsx";
import sinon from 'sinon';
import {mount} from "enzyme";

describe('<TodoInput />', () => {

  let onNewTodo, wrapper, input;

  beforeEach(()=> {
    onNewTodo = sinon.spy();
    wrapper = mount(<TodoInput onNewTodo={onNewTodo}/>);
    input = wrapper.find('#todo-input');
  });

  it('adds a todo when presses enter', () => {
    input.get(0).value = "eat";
    input.simulate('keypress', {charCode: 13});
    onNewTodo.should.have.been.calledWith('eat');
  });

  it('does not add todo if value is empty when presses enter', () => {
    input.get(0).value = "";
    input.simulate('keypress', {charCode: 13});
    onNewTodo.should.not.have.been.called;
  });

});

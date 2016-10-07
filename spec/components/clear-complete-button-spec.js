"use strict";

import React from "react";
import ClearCompleteButton from "../../src/components/clear-complete-button.jsx";
import sinon from 'sinon';
import {mount} from "enzyme";

describe('<ClearCompleteButton />', () => {

  let clearCompleteTodos;

  beforeEach(()=> {
    clearCompleteTodos = sinon.spy();
  });

  it('calls clearCompleteTodos when clicked', () => {
    const wrapper = mount(<ClearCompleteButton clearCompleteTodos={clearCompleteTodos}/>);
    wrapper.find('button').simulate('click');
    clearCompleteTodos.should.have.been.called;
  });

});

"use strict";

import React from "react";
import FilterButton from "../../src/components/filter-button.jsx";
import sinon from 'sinon';
import {mount} from "enzyme";

describe('<FilterButton />', () => {

  let filterTodos;

  beforeEach(()=> {
    filterTodos = sinon.spy();
  });

  it('shows the button name', () => {
    const wrapper = mount(<FilterButton name="ALL"
                                        forFilter="active" globalFilter="active"
                                        filterTodos={filterTodos}/>);
    wrapper.should.contain.text('ALL');
  });

  it('has the .selected class if filter matched', ()=> {
    const wrapper = mount(<FilterButton name="ALL"
                                        forFilter="active" globalFilter="active"
                                        filterTodos={filterTodos}/>);
    wrapper.find('button').should.have.className('selected');
  });

  it('does not have the .selected class if filter is not matched', ()=> {
    const wrapper = mount(<FilterButton name="ALL"
                                        forFilter="active" globalFilter="differentFilter"
                                        filterTodos={filterTodos}/>);
    wrapper.find('button').should.not.have.className('selected');
  });

  it('calls filterTodos when the button is clicked', () => {
    const wrapper = mount(<FilterButton name="ALL"
                                        forFilter="active" globalFilter="completed"
                                        filterTodos={filterTodos}/>);
    wrapper.find('button').simulate('click');
    filterTodos.should.have.been.calledWith('active');
  });

});

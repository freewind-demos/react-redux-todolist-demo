"use strict";

import React from 'react';
import TodoList from '../../src/components/todo-list.jsx';
import chai from 'chai';
import spies  from 'chai-spies';
import {mount} from 'enzyme';
import jsdomGlobal from 'jsdom-global';
import chaiEnzyme from 'chai-enzyme';

jsdomGlobal();
chai.should();
chai.use(spies);
chai.use(chaiEnzyme());

describe('<TodoList />', () => {

  it('shows todos', () => {
    const onEditTodo = chai.spy();
    const todos = [
      {content: 'run1', active: true},
      {content: 'run2', active: true}
    ];

    const wrapper = mount(<TodoList todos={todos} onEditTodo={onEditTodo}/>);
    wrapper.should.contain.text('run1');
    wrapper.should.contain.text('run2');
  });

});

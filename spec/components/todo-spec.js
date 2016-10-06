"use strict";

import React from 'react';
import Todo from '../../src/components/todo.jsx';
import chai from 'chai';
import spies  from 'chai-spies';
import {mount} from 'enzyme';
import jsdomGlobal from 'jsdom-global';
import chaiEnzyme from 'chai-enzyme';

jsdomGlobal();
chai.should();
chai.use(spies);
chai.use(chaiEnzyme());

describe('<Todo />', () => {

  let onEditTodo, onToggleTodo, wrapper, input;

  beforeEach(()=> {
    onEditTodo = chai.spy();
    onToggleTodo = chai.spy();
    const todo = {content: 'test-todo', active: true};
    wrapper = mount(<Todo onEditTodo={onEditTodo} onToggleTodo={onToggleTodo} todo={todo}/>);
  });

  it('shows todo content', () => {
    wrapper.find(".content").should.contain.text('test-todo');
    wrapper.find("input.edit").should.not.present();
  });

  it('turns to text input if double-click on the todo content', ()=> {
    wrapper.find(".content").simulate('doubleClick');
    wrapper.find(".content").should.not.present();
    wrapper.find("input.edit").should.present();
    wrapper.find("input.edit").should.have.value('test-todo');
  });

  it('calls onEditTodo when press enter on the text input', ()=> {
    wrapper.find(".content").simulate('doubleClick');
    var input = wrapper.find("input.edit");
    input.get(0).value = "test-todo-2";
    input.simulate('keypress', {charCode: 13});
    onEditTodo.should.have.been.called.with('test-todo-2');
  });

  it('calls onToggleTodo when checkbox state changes', () => {
    wrapper.find('.todo-state').simulate('change', {target: {value: true}});
    onToggleTodo.should.have.been.called.once();
  })

});

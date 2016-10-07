"use strict";

import React from "react";
import Todo from "../../src/components/todo.jsx";
import chai from "chai";
import {mount} from "enzyme";

describe('<Todo />', () => {

  let onEditTodo, onToggleTodo, onDeleteTodo, wrapper, input;

  beforeEach(()=> {
    onEditTodo = chai.spy();
    onToggleTodo = chai.spy();
    onDeleteTodo = chai.spy();
    const todo = {id: 'uuid1', content: 'test-todo', active: true};
    wrapper = mount(<Todo onEditTodo={onEditTodo}
                          onToggleTodo={onToggleTodo}
                          onDeleteTodo={onDeleteTodo}
                          todo={todo}/>);
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
    onEditTodo.should.have.been.called.with('uuid1', 'test-todo-2');
  });

  it('calls onToggleTodo when checkbox state changes', () => {
    wrapper.find('.todo-state').simulate('change', {target: {value: true}});
    onToggleTodo.should.have.been.called.with('uuid1');
  });

  it('calls onDeleteTodo when click on the delete button', () => {
    wrapper.find('button.todo-delete').simulate('click');
    onDeleteTodo.should.have.been.called.with('uuid1');
  })

});

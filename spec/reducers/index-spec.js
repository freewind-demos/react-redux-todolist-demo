'use strict';
import reducer from "../../src/reducers/index";
import * as actions from "../../src/actions/index";

describe('reducer', () => {

  const initStore = {
    todos: [
      {id: 'uuid1', content: 'run1', active: true},
      {id: 'uuid2', content: 'run2', active: true}
    ]
  };

  it('adds a todo', () => {
    const newTodos = reducer({todos: []}, actions.newTodo('run'));
    newTodos.todos.should.have.length(1);
    newTodos.todos[0].id.should.be.a('string');
    newTodos.todos[0].should.contain({content: 'run', active: true});
  });

  it('edits a todo', () => {
    reducer(initStore, actions.editTodo('uuid2', 'stop')).should.deep.equal({
      todos: [
        {id: 'uuid1', content: 'run1', active: true},
        {id: 'uuid2', content: 'stop', active: true}
      ]
    })
  });

  it('toggles a todo', () => {
    reducer(initStore, actions.toggleTodo('uuid2')).should.deep.equal({
      todos: [
        {id: 'uuid1', content: 'run1', active: true},
        {id: 'uuid2', content: 'run2', active: false}
      ]
    })
  });

  it('deletes a todo', () => {
    reducer(initStore, actions.deleteTodo('uuid2')).should.deep.equal({
      todos: [
        {id: 'uuid1', content: 'run1', active: true}
      ]
    })
  })

});

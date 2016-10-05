'use strict';
import chai from 'chai';
import reducer from '../../src/reducers/index';
import * as actions from '../../src/actions/index';
chai.should();

describe('reducer', () => {

  it('adds a todo', () => {
    reducer({todos: []}, actions.newTodo('run')).should.deep.equal({
      todos: [{
        content: 'run',
        active: true
      }]
    })
  });

  it('edits a todo', () => {
    reducer({
      todos: [{
        content: 'run1',
        active: true
      }, {
        content: 'run2',
        active: true
      }]
    }, actions.editTodo(1, 'stop')).should.deep.equal({
      todos: [{
        content: 'run1',
        active: true
      }, {
        content: 'stop',
        active: true
      }]
    })
  })

});

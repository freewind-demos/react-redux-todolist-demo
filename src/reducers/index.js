"use strict";
import actionTypes from '../actions/types';
import _ from 'lodash';

const initStore = {
  todos: [{
    content: '吃饭',
    active: true
  }, {
    content: '学习',
    active: true
  }, {
    content: '睡觉',
    active: false
  }],
  filter: '' // ''|'active'|'completed'
};

function _handleNewTodo(state, action) {
  return Object.assign({}, state, {
    todos: _.concat(state.todos, {
      content: action.content,
      active: true
    })
  })
}

export default function (state = initStore, action) {
  switch (action.type) {
    case actionTypes.NEW_TODO:
      return _handleNewTodo(state, action);
    default:
      return state;
  }
};

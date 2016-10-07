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

function _handleEditTodo(state, action) {
  return Object.assign({}, state, {
    todos: state.todos.map((todo, index) => {
      if (index === action.index) {
        return Object.assign({}, todo, {
          content: action.content
        });
      } else {
        return todo;
      }
    })
  })
}

function _handleToggleTodo(state, action) {
  return Object.assign({}, state, {
    todos: state.todos.map((todo, index) => {
      if (index === action.index) {
        return Object.assign({}, todo, {
          active: !todo.active
        });
      } else {
        return todo;
      }
    })
  })
}

function _handleDeleteTodo(state, action) {
  return Object.assign({}, state, {
    todos: state.todos.filter((todo, index) => index !== action.index)
  });
}

function _handleFilterTodos(state, action) {
  return Object.assign({}, state, {
    filter: action.filter
  });
}

export default function (state = initStore, action) {
  switch (action.type) {
    case actionTypes.NEW_TODO:
      return _handleNewTodo(state, action);
    case actionTypes.EDIT_TODO:
      return _handleEditTodo(state, action);
    case actionTypes.TOGGLE_TODO:
      return _handleToggleTodo(state, action);
    case actionTypes.DELETE_TODO:
      return _handleDeleteTodo(state, action);
    case actionTypes.FILTER_TODOS:
      return _handleFilterTodos(state, action);
    default:
      return state;
  }
};

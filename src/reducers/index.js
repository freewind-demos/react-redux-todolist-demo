"use strict";
import * as actionTypes from '../constants/action-types';
import * as filterTypes from '../constants/filter-types';
import nextId from '../utils/next-id';
import _ from 'lodash';

const initStore = {
  todos: [{
    id: nextId(),
    content: '吃饭',
    active: true
  }, {
    id: nextId(),
    content: '学习',
    active: true
  }, {
    id: nextId(),
    content: '睡觉',
    active: false
  }],
  filter: filterTypes.ALL
};

function _handleNewTodo(state, action) {
  return Object.assign({}, state, {
    todos: _.concat(state.todos, {
      id: nextId(),
      content: action.content,
      active: true
    })
  })
}

function _handleEditTodo(state, action) {
  return Object.assign({}, state, {
    todos: state.todos.map(todo => {
      if (todo.id === action.id) {
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
    todos: state.todos.map(todo => {
      if (todo.id === action.id) {
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
    todos: state.todos.filter(todo => todo.id !== action.id)
  });
}

function _handleFilterTodos(state, action) {
  return Object.assign({}, state, {
    filter: action.filter
  });
}

function _handleClearCompleteTodos(state) {
  return Object.assign({}, state, {
    todos: state.todos.filter(todo=> todo.active)
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
    case actionTypes.CLEAR_COMPLETE_TODOS:
      return _handleClearCompleteTodos(state);
    default:
      return state;
  }
};

"use strict";

import * as types from '../constants/action-types';

export function newTodo(newTodo) {
  return {
    type: types.NEW_TODO,
    content: newTodo
  }
}

export function editTodo(id, newContent) {
  return {
    type: types.EDIT_TODO,
    id,
    content: newContent
  }
}

export function toggleTodo(id) {
  return {
    type: types.TOGGLE_TODO,
    id
  }
}

export function deleteTodo(id) {
  return {
    type: types.DELETE_TODO,
    id
  }
}

export function filterTodos(filter) {
  return {
    type: types.FILTER_TODOS,
    filter
  }
}

export function clearCompleteTodos() {
  return {
    type: types.CLEAR_COMPLETE_TODOS
  }
}

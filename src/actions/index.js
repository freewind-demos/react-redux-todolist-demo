"use strict";

import types from './types';

export function newTodo(newTodo) {
  return {
    type: types.NEW_TODO,
    content: newTodo
  }
}

export function editTodo(index, newContent) {
  return {
    type: types.EDIT_TODO,
    index,
    content: newContent
  }
}

export function toggleTodo(index) {
  return {
    type: types.TOGGLE_TODO,
    index
  }
}

export function deleteTodo(index) {
  return {
    type: types.DELETE_TODO,
    index
  }
}

export function filterTodos(filter) {
  return {
    type: types.FILTER_TODOS,
    filter
  }
}


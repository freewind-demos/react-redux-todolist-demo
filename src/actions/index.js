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

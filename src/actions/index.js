import types from './types';

export function newTodo(newTodo) {
  return {
    type: types.NEW_TODO,
    content: newTodo
  }
}

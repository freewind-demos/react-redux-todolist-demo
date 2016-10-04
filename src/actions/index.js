import types from './types';

export function deleteFruit(fruitName) {
  return {
    type: types.DELETE_FRUIT,
    fruitName: fruitName
  }
}

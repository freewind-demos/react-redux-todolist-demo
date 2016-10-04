import actionTypes from '../actions/types';

const initStore = {
  fruit: ['Apples', 'Oranges']
};

function _handleDelete(state, action) {
  return Object.assign({}, state, {
    fruit: state.fruit.filter(name => name !== action.fruitName)
  });
}

export default function (state = initStore, action) {
  switch (action.type) {
    case actionTypes.DELETE_FRUIT:
      return _handleDelete(state, action);
    default:
      return state;
  }
};

'use strict';
import expect from 'expect';
import reducer from '../../src/reducers/index';

describe('reducer', () => {

  it('returns init store if no state passed in', () => {
    expect(reducer(undefined, {type: 'any'})).toEqual({
      fruit: ['Apples', 'Oranges']
    })
  });

  it('deletes specified fruit', () => {
    expect(reducer(
      {fruit: ['Apples', 'Oranges']},
      {type: 'DELETE_FRUIT', fruitName: 'Apples'}
    )).toEqual({
      fruit: ['Oranges']
    })
  })

});

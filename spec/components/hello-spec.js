"use strict";

import React from 'react';
import Hello from '../../src/components/Hello.jsx';
import chai from 'chai';
import {shallow} from 'enzyme';

describe('<Hello />', () => {

  it('shows fruit names', () => {
    const wrapper = shallow(<Hello fruit={['AAA', 'BBB']}/>);
    wrapper.contains('AAA').should.be.true;
    wrapper.contains('BBB').should.be.true;
  });

  it('calls onFruitDelete if deletes a fruit', () => {
    const spy = chai.spy();
    const wrapper = shallow(<Hello fruit={['AAA', 'BBB']} onDeleteFruit={spy}/>);
    wrapper.find('button[title="delete"]').first().simulate('click');
    spy.should.have.been.called.with('AAA');
  })
});

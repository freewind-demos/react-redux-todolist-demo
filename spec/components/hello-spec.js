"use strict";

import React from 'react';
import Hello from '../../src/components/Hello.jsx';
import chai, {expect}  from 'chai';
import spies  from 'chai-spies';
import {shallow} from 'enzyme';

chai.use(spies);

describe('<Hello />', () => {

  it('shows fruit names', () => {
    const wrapper = shallow(<Hello fruit={['AAA', 'BBB']}/>);
    expect(wrapper.contains('AAA')).to.equal(true);
    expect(wrapper.contains('BBB')).to.equal(true);
  });

  it('calls onFruitDelete if deletes a fruit', () => {
    const spy = chai.spy();
    const wrapper = shallow(<Hello fruit={['AAA', 'BBB']} onDeleteFruit={spy}/>);
    wrapper.find('button[title="delete"]').first().simulate('click');
    expect(spy).to.have.been.called.with('AAA');
  })
});

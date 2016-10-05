"use strict";

import React from 'react';
import TodoActiveCount from '../../src/components/todo-active-count.jsx';
import chai from 'chai';
import spies  from 'chai-spies';
import {mount} from 'enzyme';
import jsdomGlobal from 'jsdom-global';
import chaiEnzyme from 'chai-enzyme';

jsdomGlobal();
chai.should();
chai.use(spies);
chai.use(chaiEnzyme());

describe('<TodoActiveCount />', () => {

  it('shows the active count', () => {
    const wrapper = mount(<TodoActiveCount activeCount={3}/>);
    wrapper.should.contain.text('3 items left');
  });

});

"use strict";

import React from "react";
import TodoActiveCount from "../../src/components/todo-active-count.jsx";
import {mount} from "enzyme";

describe('<TodoActiveCount />', () => {

  it('shows the active count', () => {
    const wrapper = mount(<TodoActiveCount activeCount={3}/>);
    wrapper.should.contain.text('3 items left');
  });

});

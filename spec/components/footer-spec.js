"use strict";

import React from "react";
import Footer from "../../src/components/footer.jsx";
import {mount} from "enzyme";
import {Provider} from "react-redux";
import sinon from "sinon";

describe('<Footer />', () => {

  let mockStore;

  beforeEach(()=> {
    mockStore = {
      dispatch: sinon.spy(),
      getState: ()=>({
        todos: []
      }),
      subscribe: sinon.spy()
    };
  });

  it('shows ClearCompleteButton if there is any complete todos', () => {
    const wrapper = mount(
      <Provider store={mockStore}>
        <Footer hasCompleteTodos={true}/>
      </Provider>);
    wrapper.should.contain.text("Clear completed");
  });

  it('should not show ClearCompleteButton if there no complete todos', () => {
    const wrapper = mount(<Provider store={mockStore}>
      <Footer hasCompleteTodos={false}/>
    </Provider>);
    wrapper.should.not.contain.text("Clear completed");
  });

});

'use strict';
import Hello from '../components/hello.jsx';
import {connect} from 'react-redux';
import * as actions from '../actions';

function mapStateToProps(state) {
  return {
    fruit: state.fruit
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onDeleteFruit: (name) => dispatch(actions.deleteFruit(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);

import React, {Component} from 'react';
import Header from './header.jsx';
import Body from './body.jsx';
import FooterContainer from '../containers/footer-container';

export default class App extends Component {
  render() {
    return <div>
      <Header/>
      <Body/>
      <FooterContainer/>
    </div>;
  }
}

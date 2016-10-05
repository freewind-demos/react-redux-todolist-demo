import React, {Component} from 'react';
import Header from './header.jsx';
import Body from './body.jsx';
import Footer from './footer.jsx';

export default class App extends Component {
  render() {
    return <div>
      <Header/>
      <Body/>
      <Footer/>
    </div>;
  }
}

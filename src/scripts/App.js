import React, { Component } from 'react';
import Navigation from './Navigation';
import Main from './Main';
import Footer from './Footer';
/*
  A class that combines the main components.
*/
class App extends Component {
  render() {
    return (
        <div className="wrapper">
            <Navigation />
            <Main />
            <Footer />
        </div>
    );
  }
}

export default App;

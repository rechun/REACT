import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from './header.js'
import Main from './main.js'
class App extends Component {
      static childContextTypes = {
            themeColor :PropTypes.string,
            color:PropTypes.string
      }
      constructor () {
            super()
            this.state = {
              themeColor : 'red',
              color:'yellow'
            }
      }
      getChildContext () {
            return {
              themeColor : this.state.themeColor,
              color:this.state.color
            }
          }
  render() {
    return (
      <div className="App">
            <Header/>
            <Main/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Header from './components/header.js'
import List from './components/list.js'

class App extends Component {
    state={
        userName: ''
    }
    // 将子元素的input值保存在父元素
    saveUserName = (value) => {
        this.setState(
            {userName: value }
        )
    }
    componentDidMount() {


    }
  render() {
    const {userName} =this.state;
      return (
      <div className="App">
            <Header saveUserName = {this.saveUserName}/>
            <List searchName={userName}/>
      </div>
    );
  }
}

export default App;

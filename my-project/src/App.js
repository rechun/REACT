import React, { Component } from 'react';
import Header from './components/header.js'
import { postData } from './untils'
import api from './api'
import './App.css'
class App extends Component {
    state={
        userName: ''
    }
    saveUserName = (value) => {
        console.log(value);
        this.setState(
            {saveUserName: value },()=>{
                postData(api.search,{
                    q: value
                }).then(
                    (v)=>{
                        console.log(v);
                    }
                );
            }
        )
    }
    componentDidMount() {

    }
  render() {
    return (
      <div className="App">
            <Header saveUserName = {this.saveUserName}/>
      </div>
    );
  }
}

export default App;

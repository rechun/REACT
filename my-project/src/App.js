import React, { Component } from 'react';
import Header from './components/header';
import Content from './components/content'
import Add from './components/add'
import TodoList from './components/todolist'
import './App.css';
class App extends Component {
    state = {
          info:'',
          dolist:['aaa','ccc'],
          sendDo:'',
    }
    saveName = (v) =>{
          this.setState({
                info :v
          })
    }
    dolist = (v)=> {
          console.log('dolist')

    }
    addEvent =(v) =>{
          if(v){
                this.setState({
                  dolist :[...this.state.dolist,v],
                })
          }
    }
  render() {
        const {info,dolist} = this.state;
    return (
      <div className="App">
            <Header  
            saveName =  {this.saveName}   
            />
            <Content search={info}/>

            <Add addEvent = {this.addEvent}
            />
            <TodoList  addData ={dolist} />
      </div>
    );
  }
}

export default App;

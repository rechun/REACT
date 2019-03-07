import React, { Component } from 'react';
import Header from './components/header';
import Content from './components/content'
import Add from './components/add'
import TodoList from './components/todolist'
import './App.css';
class App extends Component {
    state = {
          info:'',
          dolist:[],
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
    handleInputValue = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }
    addEvent =(v) =>{
          if(v){
                this.setState({
                  dolist :[...this.state.dolist,v],
                }, ()=>{
                    this.setState({
                        inputValue: ''
                    })
                })
          }
    }
  render() {
        const {info,dolist,inputValue} = this.state;
    return (
      <div className="App">
            <Header
            saveName =  {this.saveName}
            />
            <Content search={info}/>

            <Add addEvent = {this.addEvent} handleInputValue = {this.handleInputValue} inputValue={inputValue}/>
            <TodoList addData ={dolist} />
      </div>
    );
  }
}

export default App;

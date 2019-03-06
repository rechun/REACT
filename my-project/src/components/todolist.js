import React, { Component } from 'react';
import { List } from 'antd';
export default class TodoList extends Component{
      state = {
            list:[]
      }
      componentWillReceiveProps(nextProps){
           this.setState({
              list:nextProps.addData
           })
      }
      render(){
            const addData = this.state.list;
            return (
                  <div>
                        <List
                        size="large"
                        dataSource={addData}
                        renderItem={item => (<List.Item>{item}</List.Item>)}
                        >

                        </List>
                  </div>
            )
      }
}
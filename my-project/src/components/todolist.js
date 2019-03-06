import React, { Component } from 'react';
import { List } from 'antd';
export default class TodoList extends Component{
      state = {
            list:['R21acing car sprays burning fuel into crowd.',
            'eJapanese princess to wed commoner.',
            'Australian walks 100km after outback crash.',
            'Man charged over missing wedding girl.',
            'Los Angeles battles huge wildfires.',]
      }
      componentWillReceiveProps(next){
           this.setState({
            list:[...this.state.list,next.addData]
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
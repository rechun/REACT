import React, { Component } from 'react';
import { postData } from '../utils'
import { Table, Avatar } from 'antd';
import api from '../api';
const columns = [{
    title: '姓名',
    dataIndex: 'login',
    key: 'login',
}, {
    title: 'avator',
    dataIndex: 'avatar_url',
    key: 'avatar_url',
    render: src => <Avatar src={src}/>,
}, {
    title: 'url',
    dataIndex: 'url',
    key: 'url',
    render: a => <a href={a}>{'githup地址'}</a>,
}];
export default class Content extends Component {
    state = {
        list : '', // 页面信息
        status: 'default' // 这里定义个状态 default第一次进入页面默认展示  loading 加载中
    }
    componentWillReceiveProps(nextProps){
        if(this.props.search !== nextProps.search){
            this.setState(
                {
                    status: 'loading'
                }
            )
            postData(api.search,{
                q: nextProps.search
            }).then(
                (v)=>{
                  this.setState(
                      {
                          list: v.items
                      }
                  )
                }
            );
        }
    }
    componentDidMount() {
    }

    render() {
        const {list, status} =this.state;
        let listDiv;
        switch (status) {
            case 'default':
                listDiv= '请输入信息'
                break;
            case  'loading':
                listDiv= list ?  <Table dataSource={list} columns={columns} rowKey={record => record.url}/> :'loading'
                break;
        }

        return (
            <div className="content-page">
                {listDiv}
            </div>
        );
    }
}


import React, { Component } from 'react';
import { Input } from 'antd';
const Search = Input.Search;

export default class Header extends Component {
    componentDidMount() {

    }

    render() {
        const {saveUserName} =this.props;
        return (
            <div className="header-page">
                <Search
                    placeholder="请输入"
                    enterButton="Search"
                    size="large"
                    onSearch={value => saveUserName(value)}
                />
            </div>
        );
    }
}


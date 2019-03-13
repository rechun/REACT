import React, { Component } from 'react';
import { Input} from 'antd'
const Search = Input.Search;
class Add extends Component{

    render(){

        const {addEvent, handleInputValue, inputValue} = this.props;
        return (
           <div>
                <Search placeholder="ADD"
                enterButton="Add to do"
                size="large"
                value={inputValue}
                onSearch ={(e)=>{
                    addEvent(e)
                }}
                onChange={(e) => {
                    handleInputValue(e)
                }}
                />
           </div>
    )
  }
}
export default Add;

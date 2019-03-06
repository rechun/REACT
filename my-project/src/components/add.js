import React, { Component } from 'react';
import { Input} from 'antd'
const Search = Input.Search;
class Add extends Component{
      render(){
            const {addEvent} = this.props;
            return (
                  <div>
                        <Search placeholder="ADD"
                        enterButton="Add to do"
                        size="large"
                        onSearch ={value =>addEvent(value)}
                        >

                        </Search>
                  </div>
            )
      }
}
export default Add;
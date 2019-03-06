import React,{Component} from 'react'
import { Input } from 'antd';
const Search = Input.Search;

class Header extends Component{
      render(){
            const {saveName} = this.props;
            return(
                  <div className="header-page">
                        <Search
                        placeholder='cc' enterButton="Search"
                        size="large"
                        onSearch ={value =>saveName(value)}
                        />
                  </div>
                  
            )
      }
}


export default Header
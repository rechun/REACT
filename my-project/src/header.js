import React ,{Component} from 'react';
import PropTypes from 'prop-types';
import Title from './title'
class Header extends Component {
      static contextTypes = {
         color:PropTypes.string
      }
  render(){
        return (
              <div>
                    <h1 style={{color:this.context.color}}>HEADER HEADER</h1>
                    <Title/>
              </div>
        )
  }
}

export default Header;
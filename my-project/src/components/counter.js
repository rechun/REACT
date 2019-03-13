import React, { Component } from 'react';

class Counter extends Component{
      state ={
            num:0,
      }
      render(){
            // const {counterNum} = this.props;
            return(
                  <div>
                        <p>{this.state.num}</p>
                        <button onClick={}>COUNTER+</button>
                  </div>
            )
      }
}
export default Counter
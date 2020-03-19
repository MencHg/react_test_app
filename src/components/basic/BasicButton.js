import React ,{ Component } from 'react';
export default class Button extends Component{
  constructor(){
    super()
    this.state = {
      star:false
    }
  }
  render(){
    return(
      <button style={this.state.star ? {color:"red",fontSize:"20px"}:{color:"blue",fontSize:"20px"}} onClick={()=>this.handClick()} >{this.state.star?"star":"love"}</button>
    )
  }
  handClick(){
    this.setState({
      star:!this.state.star
    })
  }
}
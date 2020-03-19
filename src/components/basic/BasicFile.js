import React,{Component} from "react";
export default class BasicButton extends Component{
  constructor(props){
    super(props)
    this.setState = props
  }
  buttonClick(){
    this.setState({

    })
  }
  render(){
    return(
    <button style={this.props.star?{color:"red",backgroundColor:"#f66"}:{color:"black",backgroundColor:"#eee"}}>
      {this.props.star?"love":"star"}
    </button>
    )
  }
}
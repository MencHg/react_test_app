import React,{Component} from "react";
export default class BasicInput extends Component{
  constructor(props){
    super(props)
    this.setState = props
  }
  inputGroup(ev){
    console.log(ev.target.value)
  }
  handClick(){
    this.setState({

    })
  }
  render(){
    return(
      <input  type={this.props.type || "text"} placeholder={this.props.placeholder || "add full"} />
    )
  }
}
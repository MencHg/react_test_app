import React,{Component} from 'react'
import { NavLink } from 'react-router-dom'
import BasicNavigator from './BasicNavigatior'
export default class Name extends Component{
  constructor(props){
    super(props)
    this.state = {}
  }
  render(){
    return(
      <header className="app-header">
        <h2 className="header-logo">
          <img src="http://reactchina.sxlcdn.com/uploads/default/original/2X/5/5142b3dc10227cdeb8739a08ab6daa242434b953.png" alt=""/>
        </h2>
        <BasicNavigator />
        <div className="app-user">
          <NavLink to="/user">
            <span className="iconfont icon-yonghutouxiang"></span>
            <span>未登陆</span> 
          </NavLink>
        </div>
      </header>
    )
  }
}
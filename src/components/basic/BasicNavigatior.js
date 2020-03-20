import React from "react";
import { NavLink } from 'react-router-dom'
export default function () {
  let navs = [
    {
      link:"/",
      name:"首页"
    },
    {
      link:"/chaplist",
      name:"分享列表"
    },
    {
      link:"/login",
      name:"登录"
    },
    {
      link:"/detail",
      name:"文章"
    },
    {
      link:"/register",
      name:"注册"
    },
    {
      link:"/about",
      name:"关于我"
    },
  ]
  return (
    <nav id="navigator-header">
      {navs.map((item,index)=>(
         <NavLink activeClassName="nav-active" key={index} exact to={item.link}>{item.name}</NavLink>
      ))}
    </nav>
  )
}
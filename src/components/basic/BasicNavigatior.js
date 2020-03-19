import React from "react";
function BasicNavigator(props) {
  return (
    <nav className="nav-wrap">
      <div className="nav-logo">
        <img src="" alt=""/>
      </div>
      <ul className="nav-list">
        <li className="nav-item">home</li>
        <li className="nav-item">detail</li>
        <li className="nav-item">chaplist</li>
        <li className="nav-item">about</li>
      </ul>
    </nav>
  )
}
export default BasicNavigator;
import React from 'react';
import {NavLink} from 'react-router-dom'
export default function () {
  return (
    <section className="app-notfont">
      <span className="iconfont icon-40401"></span>
      <button className="notfont-btn"><NavLink to={'/'}>返回上一步</NavLink></button>
    </section>
  );
};
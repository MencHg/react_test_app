import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Routers from './router/index'
import BasicHeader from './components/basic/BasicHaeder'
// import BasicFooter from './components/basic/BasicFooter'
export default function () {
  return (
    <BrowserRouter>
      <BasicHeader />
      <Routers />
    </BrowserRouter>
  );
}
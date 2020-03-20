import React from 'react';
import { Route, Switch } from 'react-router-dom'
import AppHome from '../components/pages/AppHome'
import AppChaplist from '../components/pages/AppChapList'
import AppDetail from '../components/pages/AppDetail'
import AppAbout from '../components/pages/AppAbout'
import AppRegister from '../components/pages/AppRegister'
import AppNotFont from '../components/pages/AppNotFont'
import AppLogin from '../components/pages/AppLogin'
export default function () {
  return (
    <Switch>
      <Route exact path="/" component={(AppHome)}></Route>
      <Route path="/detail" component={AppDetail}></Route>
      <Route path="/about" component={AppAbout}></Route>
      <Route path="/login" component={AppLogin}></Route>
      <Route path="/register" component={AppRegister}></Route>
      <Route path="/chaplist" component={AppChaplist}></Route>
      <Route component={AppNotFont}></Route>
    </Switch>
  );
}
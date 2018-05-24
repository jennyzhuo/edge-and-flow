import React from "react";
import NavBar from './NavBar';
import Intro from './intro';
import Personal from './personal';
import Skills from './skills';
import Connect from './connect';

import { Router, Switch, Route, Redirect } from 'react-router-dom'

export default ({ history, match }) => (
  <div className="left-side home p-5">
    {/*<Route exact path={`${match.url}`} component={Intro} />*/}
		<Route exact path={`/`} component={Intro} />
    <Route path={`/personal`} component={Personal} />
    <Route path={`/interests`} component={Skills} />
    <Route path={`/connect`} component={Connect} />

    <NavBar history={history} />
  </div>
)


import React from "react";
import NavBar from './NavBar';
import Intro from './intro';
import Personal from './personal';
import Skills from './skills';
import Connect from './connect';

import { Route } from 'react-router-dom'

export default ({ history, match }) => (
  <div className="left-side home p-5">
		<Route path={`${match.url}`} component={Intro} />
    <Route path={`${match.url}/personal`} component={Personal} />
    <Route path={`${match.url}/interests`} component={Skills} />
    <Route path={`${match.url}/connect`} component={Connect} />

    <NavBar />
  </div>
)


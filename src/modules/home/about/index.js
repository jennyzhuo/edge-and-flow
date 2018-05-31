import React from "react";
import Personal from "./personal/index";
import Connect from "./connect/index";
import Intro from "./intro/index";
import Skills from "./skills/index";
import NavBar from "./NavBar";
import { Route } from 'react-router-dom'
import UpdateBlocker from '../../../components/UpdateBlocker';
import * as ROUTES from '../../../routes';

export default ({ match, location }) => (
  <div className="d-flex align-items-end">
    <div className="d-flex justify-content-center">
      <div className="left-side home">
        <Route exact path={ROUTES.INTRO} component={Intro} />
        <Route path={ROUTES.PERSONAL} component={Personal} />
        <Route path={ROUTES.INTERESTS} component={Skills} />
        <Route path={ROUTES.CONNECT} component={Connect} />
        <NavBar location={location} />
      </div>
    </div>
  </div>
)
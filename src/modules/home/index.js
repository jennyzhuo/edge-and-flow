import React from "react";
import ProjectMenu from './ProjectMenu';
import About from './about/index';
import { Route, Switch } from 'react-router-dom';
import DynamoPreview from "../projects/dynamo/index";
import CaptisPreview from "../projects/captis/index";
import BurrisPreview from "../projects/burris/index";
import HackathonPreview from "../projects/hackathon/index";
import { withRouter } from 'react-router';
import Preview from './preview';
import * as ROUTES from '../../routes';
import Transitions from '../transitions';
import Background from "./background";

export default ({ location }) => {

  const key = location.pathname.split("/")[2] || '/about';

  return (
  [ <Background/>
  	,
    <Route render={({ location }) => (
      <Transitions pageKey={key} transitionGroupClass={'home-transition-group'} cssTransitionClass={'home-css-transition'} {...location.state}>
        <Switch location={location}>
          <Route path={ROUTES.ABOUT} component={About} />
          <Route path={ROUTES.PREVIEW} component={Preview} />
        </Switch>
      </Transitions>

    )}/>,
    <ProjectMenu />
  ]
)}

export { default as homeReducer } from './reducer';
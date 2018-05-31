import React from "react";
import ProjectMenu from './ProjectMenu';
import About from './about/index';
import { Route, Switch } from 'react-router-dom';
import DynamoPreview from "../projects/dynamo/index";
import CaptisPreview from "../projects/captis/index";
import BurrisPreview from "../projects/burris/index";
import HackathonPreview from "../projects/hackathon/index";
import UpdateBlocker from '../../components/UpdateBlocker';
import { withRouter } from 'react-router';
import Preview from './preview';
import * as ROUTES from '../../routes';

export default withRouter(({ location }) => {

  // console.log("props = ", props);

  return (
  [
    <Route render={({ location }) => (
      <Switch location={location}>
        <Route path={ROUTES.HOME} component={About} />
        <Route path={ROUTES.PREVIEW} component={Preview} />
      </Switch>
    )}/>,
    <UpdateBlocker>
      <ProjectMenu />
    </UpdateBlocker>
  ]
)})

export { default as homeReducer } from './reducer';
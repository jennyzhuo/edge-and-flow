import React from "react";
import ProjectMenu from './ProjectMenu';
import About from './About';
import { Route, Switch } from 'react-router-dom';
import DynamoPreview from "../projects/dynamo/index";

export default () => (
  [
    <Route render={({ location }) => (
      <Switch location={location}>
        <Route path='/home' component={About} />
        <Route path='/preview/dynamo' component={DynamoPreview} />
      </Switch>
    )}/>,
    <ProjectMenu />
  ]
)


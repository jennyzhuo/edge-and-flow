import React from "react";
import ProjectMenu from './ProjectMenu';
import About from './About';
import { Route, Switch } from 'react-router-dom';
import DynamoPreview from "../projects/dynamo/index";
import CaptisPreview from "../projects/captis/index";
import BurrisPreview from "../projects/burris/index";
import HackathonPreview from "../projects/hackathon/index";


export default () => (
  [
    <Route render={({ location }) => (
      <Switch location={location}>
        <Route path='/home' component={About} />
        <Route exact path='/preview/dynamo' component={DynamoPreview} />
        <Route exact path='/preview/captis' component={CaptisPreview} />
        <Route exact path='/preview/burris' component={BurrisPreview} />
        <Route exact path='/preview/hackathon' component={HackathonPreview} />
      </Switch>
    )}/>,
    <ProjectMenu />
  ]
)


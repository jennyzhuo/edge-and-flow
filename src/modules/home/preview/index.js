import React from "react";
import { Route, Switch } from 'react-router-dom'
import DynamoPreview from "../../projects/dynamo/index";
import CaptisPreview from "../../projects/captis/index";
import BurrisPreview from "../../projects/burris/index";
import HackathonPreview from "../../projects/hackathon/index";
import * as ROUTES from '../../../routes';
import Transitions from '../../transitions';

export default ({ match, location }) => (

    <Route render={({ location }) => {
      const key = location.pathname.split("/")[3] || '/dynamo';
      console.log("preview key = ", key);

      return (
          <Transitions pathKey={key} transitionGroupClass={'preview-transition-group'} cssTransitionClass={'preview-css-transition'} {...location.state}>
            <Switch location={location}>
              <Route exact path={ROUTES.DYNAMO_PREVIEW} component={DynamoPreview} />
              <Route exact path={ROUTES.CAPTIS_PREVIEW} component={CaptisPreview} />
              <Route exact path={ROUTES.BURRIS_PREVIEW} component={BurrisPreview} />
              <Route exact path={ROUTES.HACKATHON_PREVIEW} component={HackathonPreview} />
            </Switch>
          </Transitions>
      )
    }} />
)
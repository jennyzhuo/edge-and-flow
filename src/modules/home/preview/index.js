import React from "react";
import { Route } from 'react-router-dom'
import DynamoPreview from "../../projects/dynamo/index";
import CaptisPreview from "../../projects/captis/index";
import BurrisPreview from "../../projects/burris/index";
import HackathonPreview from "../../projects/hackathon/index";
import * as ROUTES from '../../../routes';

export default ({ match, location }) => (
[
    <Route exact path={ROUTES.DYNAMO_PREVIEW} component={DynamoPreview} />,
    <Route exact path={ROUTES.CAPTIS_PREVIEW} component={CaptisPreview} />,
    <Route exact path={ROUTES.BURRIS_PREVIEW} component={BurrisPreview} />,
    <Route exact path={ROUTES.HACKATHON_PREVIEW} component={HackathonPreview} />,
]
)
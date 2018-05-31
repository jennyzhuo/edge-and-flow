import React from "react";
import { Route } from 'react-router-dom'
import DynamoPreview from "../../projects/dynamo/index";
import CaptisPreview from "../../projects/captis/index";
import BurrisPreview from "../../projects/burris/index";
import HackathonPreview from "../../projects/hackathon/index";


export default ({ match, location }) => (
[
        <Route exact path='/preview/dynamo' component={DynamoPreview} />,
        <Route exact path='/preview/captis' component={CaptisPreview} />,
        <Route exact path='/preview/burris' component={BurrisPreview} />,
        <Route exact path='/preview/hackathon' component={HackathonPreview} />,
]
)
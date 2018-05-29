import React from "react";
import Personal from "./personal";
import Connect from "./connect";
import Intro from "./intro";
import Skills from "./skills";
import NavBar from "./NavBar";
import { Route } from 'react-router-dom'

export default ({ match }) => (
	<div className="d-flex align-items-end">
	    <div className="d-flex justify-content-center">
			<div className="left-side home">
				<Route exact path={`${match.url}`} component={Intro} />
				<Route path={`${match.url}/personal`} component={Personal} />
				<Route path={`${match.url}/interests`} component={Skills} />
				<Route path={`${match.url}/connect`} component={Connect} />
				<NavBar />
			</div>
		</div>
	</div>
)
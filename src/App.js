import React, { Component } from "react";
import Home from "./modules/home/index";
import DynamoCase from "./modules/projects/dynamo/case";
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import Transitions from './modules/transitions'
import * as ROUTES from './routes';

import { hot } from 'react-hot-loader'

const history = createHistory()
class App extends Component {

  render() {
    return (
      <Router history={history}>
        <Route render={({ location }) => {
          const key = location.pathname.split("/")[1] || '/';
          return (
          <Transitions pageKey={key} {...location.state}>
            <div className="container d-flex">
              <div className="d-flex justify-content-center app">
                <Switch location={location}>
                  <Route path={ROUTES.HOME} component={Home} />
                  <Route path='/case/dynamo' component={DynamoCase} />
                  <Redirect from='/' to={ROUTES.INTRO} />
                </Switch>
              </div>
            </div>
          </Transitions>
          )}}
        />
      </Router>
    );
  }
}

export default hot(module)(App)

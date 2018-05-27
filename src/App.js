import React, { Component } from "react";
import Home from "./modules/home/index";
import Projects from "./modules/projects/Index";
import Dynamo from "./modules/projects/dynamo/index";
import DynamoCase from "./modules/projects/dynamo/case";
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'


// import splatter1 from "../assets/images/splatter1.svg";
// import splatter2 from "../assets/images/splatter2.svg";
// import splatter3 from "../assets/images/splatter3.svg";
import { hot } from 'react-hot-loader'

const history = createHistory()
class App extends Component {
  render() {
    return (
      <div className="container d-flex align-items-center">
        {/*<img src={splatter1} alt="backdrop"/>
        <img src={splatter2} alt="backdrop"/>
        <img src={splatter3} alt="backdrop"/>*/}
        <div className="d-flex justify-content-center">


          <Router history={history}>
            <Route render={({ location }) => (
                <Switch location={location}>
                  <Route path='/(home|preview)' component={Home} />
                  {/*<Route path='/preview' component={Home} />*/}
                  <Route path='/dynamo' component={DynamoCase} />
                  <Redirect from='/' to='/home' />
                </Switch>
              )}
            />
          </Router>


      {/*landing page------------------------*/}
          {/*<div>
            <Home />
          </div>
          <div>
            <Projects />
          </div>*/}
      {/*------------------------------------*/}

      {/*project intro-----------------------*/}
          {/*<div>*/}
            {/*<Dynamo />*/}
          {/*</div>*/}
          {/*<div>*/}
            {/*<Projects />*/}
          {/*</div>*/}
      {/*------------------------------------*/}

      {/*project case-----------------------*/}
          {/*<div>*/}
            {/*<DynamoCase />*/}
          {/*</div>*/}
      {/*------------------------------------*/}

        </div>
      </div>

    );
  }
}

export default hot(module)(App)

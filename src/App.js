import React, { Component } from "react";
import Home from "./sections/home/Index";
import Projects from "./sections/projects/Index";
import Bootstrap from "bootstrap";

// import splatter1 from "../assets/images/splatter1.svg";
// import splatter2 from "../assets/images/splatter2.svg";
// import splatter3 from "../assets/images/splatter3.svg";
import { hot } from 'react-hot-loader'


class App extends Component {
  render() {
    return (
      <div className="container d-flex align-items-center">
        {/*<img src={splatter1} alt="backdrop"/>
        <img src={splatter2} alt="backdrop"/>
        <img src={splatter3} alt="backdrop"/>*/}
        <div className="d-flex justify-content-center">
          <div className="col-6">
            <Home />
          </div>
          <div className="col-6">
            <Projects />
          </div>
        </div>
      </div>

    );
  }
}

export default hot(module)(App)

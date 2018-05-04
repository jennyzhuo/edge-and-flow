import React, { Component } from "react";
import Home from "./sections/home/Index";
import splatter1 from "../assets/images/splatter1.svg";
import splatter2 from "../assets/images/splatter2.svg";
import splatter3 from "../assets/images/splatter3.svg";
import { hot } from 'react-hot-loader'


class App extends Component {
  render() {
    return (
      <div className="backdrop-container">
        <img src={splatter1} alt="backdrop"/>
        <img src={splatter2} alt="backdrop"/>
        <img src={splatter3} alt="backdrop"/>
        <Home />
      </div>

    );
  }
}

export default hot(module)(App)

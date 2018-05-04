/**
 * Created by jennyzhuo on 4/1/18.
 */
import React, { Component } from "react";
import { connect } from "react-redux";

@connect(() => {})

class Projects extends Component {

  render() {

    return (
      <div className="projects">
        <div className="menu">
        	<h3>+ RECENT WORKS</h3>
        </div>
      </div>
    );
  }
}

export default Projects;

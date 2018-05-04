/**
 * Created by jennyzhuo on 4/1/18.
 */
import React, { Component } from "react";
import { connect } from "react-redux";

@connect(() => {})

class Projects extends Component {

  render() {

    return (
      <div className="right-side projects p-5">
        <div className="pl-5">
        	<h3>+ RECENT WORKS</h3>
        </div>
      </div>
    );
  }
}

export default Projects;

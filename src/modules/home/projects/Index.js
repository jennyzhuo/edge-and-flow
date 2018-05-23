
import React, { Component } from "react";
import { connect } from "react-redux";

@connect(() => {})

class Projects extends Component {

  render() {

    return (
      <div className="right-side projects p-5">
        <div className="menu pl-5">
        	<h3 className="pb-3">+ RECENT WORKS</h3>
        	<div className="pt-5 btn-group-vertical btn-group-sm" role="group">
			    <button type="button" className="btn px-3 py-2"><b>01  </b>DYNAMO</button>
			    <button type="button" className="btn px-3 py-2"><b>02  </b>CAPTIS</button>
			    <button type="button" className="btn px-3 py-2"><b>03  </b>BURRIS</button>
			    <button type="button" className="btn px-3 py-2"><b>04  </b>HACKATHON</button>
			    <button type="button" className="btn px-3 py-2"><b>05  </b>NORASACK DESIGN</button>
			    <button type="button" className="btn px-3 py-2"><b>06  </b>OTHER</button>
				<button type="button" className="btn px-3 py-2"><b>←  </b>BACK</button>
	      </div>
        </div>
      </div>
    );
  }
}

export default Projects;

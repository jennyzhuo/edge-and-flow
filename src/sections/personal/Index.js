import React, { Component } from "react";
import { connect } from "react-redux";

@connect(() => {})

class Personal extends Component {

  render() {

    return (
      <div className="left-side home p-5">
	      <div className="p-3">
	        <h1>EDGE & FLOW</h1>
	        <h4 className="pb-3">
	        	UI UX DESIGN  //  GRAPHIC DESIGN  //  PAINTER  //  ILLUSTRATOR
	        </h4>
	        <p>
	        	I love the thought that creativity can solve any problem, and so, 
	        	the creative process is always on my mind.  Making products as attractive
	         	& well formed as they are effective is where I apply myself.  
	         	I am currently looking to join a team where quality work comes 
	         	from the cross-pollination of each other's enthusiasm.
	         </p>
	      </div>
	      <div className="menu p-3">
	      	<div className="btn-group btn-group-sm" role="group">
			    <button type="button" className="btn btn-secondary px-3">01 HOME</button>
			    <button type="button" className="btn btn-secondary px-3">02 PERSONAL</button>
			    <button type="button" className="btn btn-secondary px-3">03 INTERESTS</button>
			    <button type="button" className="btn btn-secondary px-3">04 CONNECT</button>
			  </div>
	      </div>
      </div>
    );
  }
}

export default Personal;
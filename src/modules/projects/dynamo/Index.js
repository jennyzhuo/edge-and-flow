
import React, { Component } from "react";
import { connect } from "react-redux";
import iphone from "../../../../assets/images/01-intro-iphone.png";

@connect(() => {})

class Dynamo extends Component {

  render() {

    return (
      <div className="left-side dynamo p-5">
	      <div className="card project p-5">
	        <h2 className="number pb-2">01</h2>
	        <h2 className="pt-4 pb-2">
	        	DYNAMO
	        </h2>
	        <h4 className="pb-5">BRANDING // UI-UX DESIGN</h4>
	        <p className="intro py-5">
	        	One of my largest undertakings to date - rebranding and building up presence 
	        	for Dynamo. Completely transforming not only the logo but modernizing the 
	        	brand identity as whole. Long term project that went through many stages, 
	        	iterations, and production timelines. We set out to captivate our audience 
	        	and invigorate our Dynamo family by showcasing spark and evoking energy.
	         </p>
	         <button type="button" className="btn btn-secondary px-3">THERE'S MORE</button>
	      </div>
    	  <div className="iphone">
    	  	<img src={iphone} alt="iphone"/>
    	  </div>
      </div>
    );
  }
}

export default Dynamo;

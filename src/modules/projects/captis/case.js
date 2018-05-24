import React, { Component } from "react";
import { connect } from "react-redux";
import iphone from "../../../../assets/images/01-intro-iphone.png";
import header from "../../../../assets/images/01-case-header.png";
@connect(() => {})

class CaptisCase extends Component {

  render() {

    return (
    	<div className="case 01">
    		<div className="row">
	    	  <div className="col-6 header d-flex align-items-center">
				<img src={header} alt="macbook"/>
	    	  </div>
		      <div className="col-6 dynamo p-5">
			      <div className="p-5">
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
			         <div className="d-flex justify-content-between">
			         	<div>
			         		<h5>YEAR</h5>
			         		<h4>2017</h4>
			         	</div>
			         	<div>
			         		<h5>AGENCY</h5>
			         		<h4>DYNAMO</h4>
			         	</div>
			         	<div>
			         		<h5>ROLE</h5>
			         		<h4>CO-DESIGNER</h4>
			         	</div>
			         </div>
			      </div>
		    	  <div className="iphone">
		    	  	<img src={iphone} alt="iphone"/>
		    	  </div>
		    	</div>
	      </div>
	    </div>
    );
  }
}

export default CaptisCase;
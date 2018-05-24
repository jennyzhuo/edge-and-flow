
import React, { Component } from "react";
import { connect } from "react-redux";
import iphone from "../../../../assets/images/01-intro-iphone.png";
import header from "../../../../assets/images/01-case-header.png";
import iphone2 from "../../../../assets/images/01-case-iphone.png";
@connect(() => {})

class DynamoCase extends Component {

  render() {

    return (
      <div className="case 01">
        <div className="d-flex flex-row">

          <div className="header d-flex align-items-center">
            <img src={header} alt="macbook"/>
          </div>

          <div className="iphone">
            <img src={iphone} alt="iphone"/>
          </div>

          <div className="dynamo p-5">
              <div className="p-5">
                <h2 className="number pb-2">01</h2>
                <h2 className="pt-4 pb-2">DYNAMO</h2>
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
          </div>
          </div>

          <div className="d-flex">
            <h4>scroll</h4>
            <div className="v-bar"></div>
            <h3>BEYOND THE LOGO</h3>
            <p>
              One of my largest undertakings to date - rebranding and building up presence 
              for Dynamo. Completely transforming not only the logo but modernizing the brand 
              identity as whole. Long term project that went through many stages, iterations, 
              and production timelines. We set out to captivate our audience and invigorate our 
              Dynamo family by showcasing spark and evoking energy.
            </p>
          </div>

          <div className="d-flex">
            <div className="card case-short">
              <h3>INSPIRING FROM WITHIN</h3>
              <p>
                One of my largest undertakings to date - rebranding and building up presence 
                for Dynamo. Completely transforming not only the logo but modernizing the brand 
                identity as whole. Long term project that went through many stages, iterations, 
                and production timelines. We set out to captivate our audience and invigorate our 
                Dynamo family by showcasing spark and evoking energy.
              </p>
            </div>
          </div>

          <div className="d-flex flex-row">
            <div className="d-flex flex-row">
              <div>
                <ul>
                  <li>
                    RESEARCH
                  </li>
                  <li>
                    PROJECT MANAGEMENT
                  </li>
                  <li>
                    BRAND STRATEGY
                  </li>
                  <li>
                    VISUAL IDENTITY
                  </li>
                  <li>
                    GRID LAYOUTS
                  </li>
                  <li>
                    TYPOGRAPHY
                  </li>
                  <li>
                    COLOR THEORY
                  </li>
                  <li>
                    ICONOGRAPHY
                  </li>
                  <li>
                    BRANDING GUIDE
                  </li>
                  <li>
                    TEMPLATES
                  </li>
                </ul>
              </div>

              <div>
                <ul>
                  <li>
                    CONCEPT
                  </li>
                  <li>
                    SITEMAPPING
                  </li>
                  <li>
                    WIREFRAMING
                  </li>
                  <li>
                    PROTOTYPING
                  </li>
                  <li>
                    UI/UX
                  </li>
                  <li>
                    INTERACTION DESIGN
                  </li>
                  <li>
                    ILLUSTRATION
                  </li>
                </ul>
              </div>
            </div>
            <div className="iphone-iso">
              <img src={iphone2} alt="iphone isometric"/>
            </div>
          </div>

          <div className="d-flex">
            <div className="card case-long">
              <h3>A DISTINCT IDENTITY</h3>
              <p>
                One of my largest undertakings to date - rebranding and building up presence 
                for Dynamo. Completely transforming not only the logo but modernizing the brand 
                identity as whole. Long term project that went through many stages, iterations, 
                and production timelines. We set out to captivate our audience and invigorate our 
                Dynamo family by showcasing spark and evoking energy.
              </p>
            </div>
            <div classname="d-flex flex-row">
              <div className="case-square">
              </div>
              <div className="case-square">
              </div>
              <div className="case-square">
              </div>
            </div>
          </div>

          <div className="d-flex">
          </div>
      </div>
    );
  }
}

export default DynamoCase;
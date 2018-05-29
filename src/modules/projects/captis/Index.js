import React from "react";
import iphone from "../../../../assets/images/01-intro-iphone.png";
import { Link } from 'react-router-dom';
import { previewToCase } from '../../transitions';

export default () => (
  <div className="d-flex align-items-center">
    <div className="d-flex justify-content-center">
      <div className="left-side preview dynamo py-5 pl-5">
        <div className="card project p-5">
          <h2 className="number pb-2">02</h2>
          <h2 className="pt-4 pb-2">
            CAPTIS
          </h2>
          <h4 className="pb-5">RESEARCH // UI-UX DESIGN</h4>
          <p className="intro py-5">
            One of my largest undertakings to date - rebranding and building up presence
            for Dynamo. Completely transforming not only the logo but modernizing the
            brand identity as whole. Long term project that went through many stages,
            iterations, and production timelines. We set out to captivate our audience
            and invigorate our Dynamo family by showcasing spark and evoking energy.
          </p>
    			<Link to={{ pathname: '/case/dynamo', state: previewToCase }}>
            <button type="button" className="btn btn-secondary px-3 ">THERE'S MORE</button>
    			</Link>
        </div>
        <div className="iphone">
          <img src={iphone} alt="iphone"/>
        </div>
      </div>
    </div>
  </div>
)
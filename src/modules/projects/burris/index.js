import React from "react";
import iphone from "../../../../assets/images/03-intro-iphone.png";
import { Link } from 'react-router-dom';
import { previewToCase } from '../../transitions';

export default () => (
  <div className="d-flex align-items-center">
    <div className="d-flex justify-content-center">
      <div className="left-side preview dynamo py-5 pl-5">
        <div className="card project p-5">
          <h2 className="number pb-2 slide-in-left title">03</h2>
          <h2 className="pt-4 pb-2 slide-in-left title">
            BURRIS
          </h2>
          <h4 className="pb-5 slide-in-left subtitle">UI-UX DESIGN</h4>
          <p className="intro py-5 slide-in-left body">
            Burris Logistics is a end to end logistics company providing a vertical marketplace for
            all stakeholders in the Supply Chain. Supply Chain Portal is designed to manage 
            even the most complex aspects of the vendor buyer relationship, responsible for
            moving billions of dollars a year. The success of this app hinges on a clean and intuitive UI-UX. 
          </p>
          <Link to={{ pathname: '/case/burris', state: previewToCase }}>
            <button type="button" className="btn btn-secondary px-3 ">THERE'S MORE</button>
          </Link>
        </div>
      </div>
      <div className="iphone">
        <img src={iphone} alt="iphone"/>
      </div>
    </div>
  </div>
)
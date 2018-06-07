import React from "react";
import iphone from "../../../../assets/images/04-intro-iphone.png";
import { Link } from 'react-router-dom';
import { previewToCase } from '../../transitions';

export default () => (
  <div className="d-flex align-items-center">
    <div className="d-flex justify-content-center">
      <div className="left-side preview dynamo py-5 pl-5">
        <div className="card project p-5">
          <h2 className="number pb-2 slide-in-left title">04</h2>
          <h2 className="pt-4 pb-2 slide-in-left title">
            EXPEDITION HACKS
          </h2>
          <h4 className="pb-5 slide-in-left subtitle">BRANDING // UI-UX DESIGN</h4>
          <p className="intro py-5 slide-in-left body">
            A blockchain solution designed for the Expedition Hacks Human Trafficking Solutions Event.
            Human trafficking is a global enterprise that is second only to drug trafficking as the 
            most profitable criminal business. This database utilizes biometric encryption to help 
            countries' governments and law enforcement agencies to document and quickly identify 
            victims that have been found.
            <br/>

            Mobile mockups created by Geoff Nelowet
          </p>
          <Link to={{ pathname: '/case/hackathon', state: previewToCase }}>
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
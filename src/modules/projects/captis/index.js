import React from "react";
import iphone from "../../../../assets/images/02-intro-iphone.png";
import { Link } from 'react-router-dom';
import { previewToCase } from '../../transitions';

export default () => (
  <div className="d-flex align-items-center">
    <div className="d-flex justify-content-center">
      <div className="left-side preview captis py-5 pl-5">
        <div className="card project p-5">
          <h2 className="number pb-2 slide-in-left title">02</h2>
          <h2 className="pt-4 pb-2 slide-in-left title">
            CAPTIS
          </h2>
          <h4 className="pb-5 slide-in-left subtitle">BRANDING // UI-UX DESIGN</h4>
          <p className="intro py-5 slide-in-left body">
            Concept for a government contract proposal management system. Designed to easily bridge
            communication between Proposal Managers and multiple color teams throughout the timeline
            and iteration cycles. Captis is a seamless solution for companies to discover and stay on top of incoming
            and outgoing proposals as they vie for major contracts.
          </p>
          <Link to={{ pathname: '/case/captis', state: previewToCase }}>
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
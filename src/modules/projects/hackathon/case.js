import React from "react";
import iphone from "../../../../assets/images/04-intro-iphone.png";
import header from "../../../../assets/images/04-case-header.png";
import screens from "../../../../assets/images/hackathon/04-case-banner.png";

import { Link } from 'react-router-dom';
import { caseToPreview, previewToCase } from '../../transitions';

export default () => (
  <div className="case captis">
    <Link to={{ pathname: '/home/preview/hackathon', state: caseToPreview }}>
      <div className="d-flex align-items-center py-4">
        <div className="h-bar"></div>
        <h5 className="px-3 back">BACK</h5>
      </div>
    </Link>
    <div className="d-flex flex-row">

      <div className="header d-flex align-items-center">
        <img src={header} alt="macbook"/>
      </div>

      <div className="iphone">
        <img src={iphone} alt="iphone"/>
      </div>

      <div className="preview captis py-5 pl-5">
        <div className="p-4">
          <h2 className="number pb-2 title">04</h2>
          <h2 className="pt-4 pb-2 title">
            EXPEDITION HACKS
          </h2>
          <h4 className="pb-5 subtitle">BRANDING // UI-UX DESIGN</h4>
          <p className="intro py-5 body">
            A blockchain solution designed for the Expedition Hacks Human Trafficking Solutions Event.
            Human trafficking is a global enterprise that is second only to drug trafficking as the 
            most profitable criminal business. This database utilizes biometric encryption to help 
            countries' governments and law enforcement agencies to document and quickly identify 
            victims that have been found.
            <br/>

            Mobile mockups created by Geoff Nelowet
          </p>
          <div className="d-flex justify-content-between">
            <div className="p-2">
              <h5>YEAR</h5>
              <h4 className="pb-2">2018</h4>
            </div>

            <div className="v-bar mx-3"></div>

            <div className="p-2">
              <h5>AGENCY</h5>
              <h4 className="pb-2">DYNAMO</h4>
            </div>

            <div className="v-bar mx-3"></div>

            <div className="p-2">
              <h5>ROLE</h5>
              <h4 className="pb-2">DESIGNER</h4>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="section gray d-flex flex-column text-center">
      <div className="scroll">
        <div className="v-bar"></div>
        <h4 className="py-3">scroll</h4>
        <div className="v-bar"></div>
      </div>
      <h3 className="pt-5 pb-3">GLOBAL, AUDITED, AND TRUSTLESS</h3>
      
      <p className="p-5 mx-5">
        We chose to design this interface using dedicated cards associated to registered individuals
        in order to build cohesion from screen to screen throughout a hypothetically vast database. As law
        enforcement users move from search to identify, cards can easily expand to reveal more information 
        or collapse to maximize screen estate for scanning. With major actions designed within the context
        of each card, the user can make instantaneous updates without the need to leave the current screen.

      </p>
    </div>

    <div className="section red-gradient d-flex">
      <img src={screens} alt="hackathon screens" className="case-banner"/>
    </div>

  </div>
);







import React from "react";
import iphone from "../../../../assets/images/03-intro-iphone.png";
import header from "../../../../assets/images/03-case-header.png";
import stats from "../../../../assets/images/burris/stats.png";
import aws from "../../../../assets/images/burris/aws.png";
import notifications from "../../../../assets/images/burris/notifications.png";
import logo from "../../../../assets/images/burris/logo.svg";
import trio from "../../../../assets/images/trio.svg";
import { Link } from 'react-router-dom';
import { caseToPreview, previewToCase } from '../../transitions';

export default () => (
  <div className="case burris">
    <Link to={{ pathname: '/home/preview/burris', state: caseToPreview }}>
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

      <div className="preview burris py-5 pl-5">
        <div className="p-4">
          <h2 className="number pb-2 title">03</h2>
          <h2 className="pt-4 pb-2 title">
            BURRIS
          </h2>
          <h4 className="pb-5 subtitle">UI-UX DESIGN</h4>
          <p className="intro py-5 body">
            Burris Logistics is a end to end logistics company providing a vertical marketplace for
            all stakeholders in the Supply Chain. Supply Chain Portal is designed to manage 
            even the most complex aspects of the vendor buyer relationship, responsible for
            moving billions of dollars a year. The success of this app hinges on a clean and intuitive UI-UX.
          </p>
          <div className="d-flex justify-content-between">
            <div className="p-2">
              <h5>YEAR</h5>
              <h4 className="pb-2">2016 - 2018</h4>
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
      <h3 className="pt-5 pb-3">REDESIGNING THE SPREADSHEET</h3>
      
      <p className="p-5 mx-5">
        How do we design an app for users that handle thousands of lines of data a day?
       	We utilize the interface so that the data is digestible, easy to work with,
        and is organized to provide insight.<br/> Supply Chain Portal enables it's users to
        manage high volume orders through planning tools, a secure ordering system, and price negotiation.

      </p>
    </div>

    <div className="section case-banner blue-gradient d-flex justify-content-center">
      <div className="d-flex flex-row align-items-center ">
      	<img src={stats} alt="burris stats" className="stats m-5"/>
      	<img src={logo} alt="burris logo" className="logo m-5"/>
      </div>
    </div>

    <div className="section push features d-flex flex-column justify-content-center">
      <img src={trio} alt="trio" className="trio align-self-center"/>
      <img src={notifications} alt="notifications" className="notifications"/>
      <div className="card case-short p-5 align-items-center justify-content-center align-self-center">
        <h3 className="text-center pb-3">THE PIPELINE</h3>

        <p className="">
          The success of company's proposal winning pipeline depends on the ability of that team 
          to quickly discover eligible contracts, form color teams, and execute on a timeline. The Captis
          dashboard was designed to provide high level organization, reflecting any timeline tightness or
          compliance issues that require attention.
        </p>

  	</div>
      <img src={aws} alt="aws" className="aws align-self-end"/>
    </div>
  </div>
);

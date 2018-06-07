import React from "react";
import iphone from "../../../../assets/images/02-intro-iphone.png";
import header from "../../../../assets/images/02-case-header.png";
import screens from "../../../../assets/images/captis/02-case-banner.png";
import calendar from "../../../../assets/images/captis/calendar.png";
import proposals from "../../../../assets/images/captis/proposals.png";
import { Link } from 'react-router-dom';
import { caseToPreview, previewToCase } from '../../transitions';

export default () => (
  <div className="case captis">
    <Link to={{ pathname: '/home/preview/captis', state: caseToPreview }}>
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
          <h2 className="number pb-2 title">02</h2>
          <h2 className="pt-4 pb-2 title">
            CAPTIS
          </h2>
          <h4 className="pb-5 subtitle">BRANDING // UI-UX DESIGN</h4>
          <p className="intro py-5 body">
            Concept for a government contract proposal management system. Designed to easily bridge
            communication between Proposal Managers and multiple color teams throughout the timeline
            and iteration cycles. Captis is a seamless solution for companies to discover and stay on 
            top of incoming and outgoing proposals as they vie for major contracts.
          </p>
          <div className="d-flex justify-content-between">
            <div className="p-2">
              <h5>YEAR</h5>
              <h4 className="pb-2">2017</h4>
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
      <h3 className="pt-5 pb-3">FUNCTION & FLOW</h3>
      
      <p className="p-5 mx-5">
        As a b2b enterprise software solution, we wanted to provide the users with 
        an interface that promotes efficiency through function and flow.<br/> Considering the tasks
        confronting a Proposal Manager, Captis helps users stay organized by providing high level overviews, scheduling
        assistance, task assignment, and team organization.
      </p>
    </div>

    <div className="section green-gradient d-flex">
      <img src={screens} alt="captis screens" className="case-banner"/>
    </div>

    <div className="section features d-flex flex-row justify-content-center align-items-center my-5">
    	<div className="d-flex flex-column align-items-end p-4">
    		<img src={calendar} alt="dashboard calendar" className="calendar"/>
    		<img src={proposals} alt="dashboard proposal" className="proposals"/>
    	</div>
    	<div className="card case-short p-5 align-items-center justify-content-center">
	        <h3 className="text-center pb-3">THE PIPELINE</h3>

	        <p className="">
	          The success of company's proposal winning pipeline depends on the ability of that team 
	          to quickly discover eligible contracts, form color teams, and execute on a timeline. The Captis
	          dashboard was designed to provide high level organization, reflecting any timeline tightness or
	          compliance issues that require attention.
	        </p>

      	</div>
    </div>
  </div>
);
















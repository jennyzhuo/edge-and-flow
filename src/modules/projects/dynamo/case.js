import React from "react";
import iphone from "../../../../assets/images/01-intro-iphone.png";
import header from "../../../../assets/images/01-case-header.png";
// import iphone2 from "../../../../assets/images/01-case-iphone.png";
import iphone2 from "../../../../assets/images/01-case-iphone-layers.png";
import branding from "../../../../assets/images/01-case-brand.png";
import dynamoLogo1 from "../../../../assets/images/dynamo/dynamo-logo-1.jpg";
import dynamoLogo2 from "../../../../assets/images/dynamo/dynamo-logo-2.jpg";
import dynamoLogo3 from "../../../../assets/images/dynamo/dynamo-logo-3.jpg";
import dynamoLogo4 from "../../../../assets/images/dynamo/dynamo-logo-4.jpg";
import dynamoLogo5 from "../../../../assets/images/dynamo/dynamo-logo-5.jpg";
// import dynamoD from "../../../../assets/images/dynamo/dynamo-d.jpg";
import dynamoCheer from "../../../../assets/images/dynamo/dynamo-cheer.jpg";
import clients from "../../../../assets/images/dynamo/clients-screen.gif";
import burris from "../../../../assets/images/dynamo/burris-screen.gif";
import { Link } from 'react-router-dom';
import { caseToPreview, previewToCase } from '../../transitions';

export default () => (
  <div className="case dynamo">
    <Link to={{ pathname: '/home/preview/dynamo', state: caseToPreview }}>
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

      <div className="preview dynamo py-5 pl-5">
        <div className="p-4">
          <h2 className="number pb-2 title">01</h2>
          <h2 className="pt-4 pb-2 title">
            DYNAMO
          </h2>
          <h4 className="pb-5 subtitle">BRANDING // UI-UX DESIGN</h4>
          <p className="intro py-5 body">
            Rebranding and building up a recognizable and memorable presence
            for Dynamo. Completely transforming not only the logo but modernizing the
            brand identity as whole. This was a long term project that went through many stages,
            iterations, and production timelines. We set out to captivate our audience
            and invigorate our Dynamo family by showcasing spark and evoking energy.
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
              <h4 className="pb-2">CO-DESIGNER</h4>
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
      <h3 className="py-5">BEYOND THE LOGO</h3>
      <div className="d-flex logos justify-content-center">
        <img src={dynamoLogo1} alt="dynamo logo" className="m-3"/>
        <img src={dynamoLogo2} alt="dynamo logo" className="m-3"/>
        <img src={dynamoLogo3} alt="dynamo logo" className="m-3"/>
        <img src={dynamoLogo4} alt="dynamo logo" className="m-3"/>
        <img src={dynamoLogo5} alt="dynamo logo" className="m-3"/>


      </div>
      <p className="p-5 mx-5">
        In order to delve into how best to represent Dynamo, we took a look inward 
        and asked team members to define our culture. <br/> Bright, energetic, sincere, and 
        concise were some the most popular adjectives. Using this inspiration we created a
        color palette to reflect this culture.
      </p>
    </div>

    <div className="section gradient green-gradient d-flex">
      <img src={dynamoCheer} alt="dynamo cheer" className="cheer"/>
      <div className="card case-short  p-4 align-items-center justify-content-center">
        <h3 className="text-center mb-auto pb-3">INSPIRING FROM WITHIN</h3>
        {/*<img src={dynamoD} alt="dynamo d" className="logotype py-3"/>*/}

        <p className="">
          Our excitement about this vibrant palette made it easy to build momentum as we integrated
          the brand throughout each layer of our organization. We empowered teams to use our brand with
          creativity and enouraged them to use the Dymamo Branding Guide as a resource.
          The culmination of the project was the complete redesign of our corporate website.
        </p>

        {/*<p className="text-center p-2">
          "we strive to not limit ourselves <br/>or close off any opportunities"
        </p>
        <p className="text-center p-2">
          "We're here for you and we want to grow <br/>with you. We want to be your go-to"
        </p>
        <p className="text-center p-2">
          "Our brand is our people."
        </p>
        <p className="text-center p-2">
          "Sincere and genuine type of attitude, <br/>the right culture.""
        </p>*/}
      </div>
    </div>

    <div className="section push d-flex flex-row justify-content-center">
      <div className="d-flex flex-row p-5 justinfy-content-between">
        <div>
          <ul className="p-3">
            <li>
              RESEARCH
            </li>
            <li>
              PROJECT MGMT
            </li>
            <li>
              BRAND STRATEGY
            </li>
            <li>
              VISUAL IDENTITY
            </li>
            <li>
              COLOR THEORY
            </li>
            <li>
              GRID LAYOUTS
            </li>
            <li>
              TYPOGRAPHY
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
          <ul className="p-3">
            <li>
              UI-UX
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
              INTERACTION DESIGN
            </li>
            <li>
              PHOTO DIRECTION
            </li>
            <li>
              ILLUSTRATION
            </li>
            <li>
              SWAG
            </li>
          </ul>
        </div>
      </div>
      <div className="iphone-iso">
        <img src={iphone2} alt="iphone isometric"/>
      </div>
    </div>


    <div className="d-flex trio align-items-center justify-content-center">
      <div className="d-flex">
        <div className="p-2 case-square red-gradient">
        </div>
        <div className="p-2 case-square green-gradient">
        </div>
        <div className="p-2 case-square blue-gradient">
        </div>
      </div>
      <div className="zero screens d-flex">
          <img src={clients} alt="animated" className="p-4"/>
          <img src={burris} alt="animated" className="p-4"/>
      </div>
      <div className="zero">
        <div className="card case-tall p-4 align-items-start">
          <h3 className="text-center mb-auto p-2">THE VISUAL PRESENCE</h3>
          <p className="text-left p-2">
            From the gitgo we wanted our visual presence to be strong and a reflection of
            our teams capabilities. Particularly because it serves as the public gateway to an understanding
            of Dynamo's spirit. Ultimately we were proud to launch the MVP and V1 - pending release.
          </p>
        </div>
      </div>
    </div>

    <div className="section push branding d-flex">
      <img src={branding} alt="branding"/>
    </div>
  </div>
);
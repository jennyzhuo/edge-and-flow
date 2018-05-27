import React from "react";
import iphone from "../../../../assets/images/01-intro-iphone.png";
import header from "../../../../assets/images/01-case-header.png";
import iphone2 from "../../../../assets/images/01-case-iphone.png";
import branding from "../../../../assets/images/01-case-brand.png";

export default () => (
  <div className="case dynamo">
    <div className="d-flex flex-row">

      <div className="header d-flex align-items-center">
        <img src={header} alt="macbook"/>
      </div>

      <div className="iphone">
        <img src={iphone} alt="iphone"/>
      </div>

      <div className="dynamo-preview p-5">
        <div className="p-4">
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
      <p className="px-5 mx-5">
        One of my largest undertakings to date - rebranding and building up presence
        for Dynamo. Completely transforming not only the logo but modernizing the brand
        identity as whole. Long term project that went through many stages, iterations,
        and production timelines. We set out to captivate our audience and invigorate our
        Dynamo family by showcasing spark and evoking energy.
      </p>
    </div>

    <div className="section gradient green-gradient d-flex">
      <div className="card case-short p-4 align-items-start">
        <h3 className="text-center mb-auto p-2">INSPIRING FROM WITHIN</h3>
        <p className="text-left p-2">
          One of my largest undertakings to date - rebranding and building up presence
          for Dynamo. Completely transforming not only the logo but modernizing the brand
          identity as whole. Long term project that went through many stages, iterations,
          and production timelines. We set out to captivate our audience and invigorate our
          Dynamo family by showcasing spark and evoking energy.
        </p>
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
      <div className="zero">
        <div className="card case-tall p-4 align-items-start">
          <h3 className="text-center mb-auto p-2">INSPIRING FROM WITHIN</h3>
          <p className="text-left p-2">
            One of my largest undertakings to date - rebranding and building up presence
            for Dynamo. Completely transforming not only the logo but modernizing the brand
            identity as whole. Long term project that went through many stages, iterations,
            and production timelines. We set out to captivate our audience and invigorate our
            Dynamo family by showcasing spark and evoking energy.
          </p>
        </div>
      </div>
    </div>

    <div className="section push branding d-flex">
      <img src={branding} alt="branding"/>
    </div>
  </div>
);
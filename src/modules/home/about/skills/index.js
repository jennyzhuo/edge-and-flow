import React from "react";

export default () => (
  <div className="content">
    <h1 className="slide-in-left title pb-4 mb-4">SKILLS</h1>
    <h4 className="py-3 slide-in-left subtitle d-flex">
      CREATIVE STRATEGY <div className="red px-2 font-weight-bold"> // </div>  
      UI-UX  <div className="blue px-2 font-weight-bold"> // </div>  
      BRANDING  <div className="teal px-2 font-weight-bold"> // </div>  
      MANAGEMENT
    </h4>
    <p className="slide-in-left body">
      <div className="skills d-flex flex-row py-1">
        <ul className="soft py-3 pt-3">
          <li>PROJECT MGMT</li>
          <li>STRATEGIC PLANNING</li>
          <li>STORY BOARDING</li>
          <li>WIRE FRAMING</li>
          <li>PROTOTYPING</li>
        </ul>
        <ul className="programs p-3">
          <li>SKETCH</li>
          <li>PRINCIPLE</li>
          <li>INVISION</li>
          <li>INDESIGN</li>
          <li>ILLUSTRATOR</li>
        </ul>
        <ul className="programs p-3">
          <li>PHOTOSHOP</li>
          <li>CANON DSLR</li>
          <li>FINAL CUT PRO</li>
          <li>MAC OSX</li>
          <li>MICROSOFT OFFICE</li>
        </ul>
        <ul className="languages p-3">
          <li>HTML</li>
          <li>CSS & SCSS</li>
          <li>JAVASCRIPT</li>
          <li>REACT.JS</li>
          <li>MANDARIN</li>
        </ul>
      </div>
    </p>
  </div>
)
import React from "react";
import Phone from "../../../../../assets/images/phone-icon.svg";
import Email from "../../../../../assets/images/email-icon.svg";
import Instagram from "../../../../../assets/images/instagram-icon.svg";
import Dribbble from "../../../../../assets/images/dribbble-icon.svg";

export default () => (
  <div className="content connect">
    <h1 className="slide-in-left title pb-4 mb-4">SKILLS</h1>
    <h4 className="py-3 slide-in-left subtitle d-flex">
      I would love to pick your brain <div className="red px-2 font-weight-bold"> // </div>
      Let's connect
    </h4>
    <p className="slide-in-left body justify-content-center">
      I am currently located in <span className="blue"> Washington, DC. </span> 
      Relocating August 2018 to <span className="blue"> San Francisco. </span>
    </p>
    <p className="slide-in-left info justify-content-center pt-3">
      <img src={Phone} alt="phone"/> 484.868.5542
    </p>
    <p className="slide-in-left info justify-content-center">
      <img src={Email} alt="email"/> jerqunz@gmail.com
    </p>
    <p className="slide-in-left info justify-content-center">
      <img src={Instagram} alt="instagram"/> @edge.and.flow
    </p>
    <p className="slide-in-left info justify-content-center">
      <img src={Dribbble} alt="dribbble"/> @jennyzee
    </p>
  </div>
)
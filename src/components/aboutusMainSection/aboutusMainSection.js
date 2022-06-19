import React from "react";
import "./aboutusMainSection.css";
import aboutusImage from "../../assets/aboutsusMain/aboutusimage.svg";
import aboutusimg from "../../assets/aboutsusMain/aboutsec.png";

function AboutusMainSection() {
  return (
    <div className="aboutus-main-wrapper">
      <div className='aboutus-main'>
        <div className="aboutus-header"><span>AIaaS Ecosystem</span></div>
        <div className="aboutus-content">
          We are on a mission to build the next generation<br/>
           of AIaaS for the world and unravel the power <br/>
           of AI for your business.
        </div>
      </div>
      <div className="aboutus-image">
        <img src={aboutusImage} />
      </div>
    </div>
  );
}

export default AboutusMainSection;

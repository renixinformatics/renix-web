import React, { useState } from "react";
import "./Description.css";
import community from "../../../assets/believedesc/community.svg";
import freedom from "../../../assets/believedesc/freedom.svg";
import agile from "../../../assets/believedesc/agile.svg";
import hybrid from "../../../assets/believedesc/hybrid.svg";

function Description() {
  const [believeDesc, setBelieveDesc] = useState([
    {
      icon: community,
      header: "Open Community",
      content:"We are what our team makes us. A safe space for all employees to share resources, collaborate together and express creativity."
    },
    {
      icon: freedom,
      header: "Tech Freedom",
      content:"Encouraging use of diverse technological tools and methods for problem solving and out of the box thinking."
    },
    {
      icon:agile,
      header: "Agile System",
      content:
        "Revisiting strategies and swiftly pivoting through rapid experimentation and modular approach.",
    },
    {
      icon: hybrid,
      header: "Hybrid Workforce",
      content:" Working with the best talent across locations to provide impeccable services to our clients and ensure healthy work-life balance."
    },
  ]);
  return (
    <div className="believe-desc"> 
   { believeDesc.map((describe) => {
    return (
      <div className="aboutus-description">
        <div className="believe-icon">
          <img src={describe.icon} />
        </div>
        <div className="believe-header">{describe.header}</div>
        <div className="believe-content">{describe.content}</div>
      </div>
    )
  })}
  </div> 
  )
}

export default Description;

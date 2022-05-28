import React from "react";
import "./Description.css";

function Description(props) {
  return <div className="description-section">
      <div className="title-section">
            {props.project.title}
      </div>
      <div className="desc">
            {props.project.description}
      </div>
      <div className="last-sec">
          {props.project.lastsection}
      </div>
  </div>;
}

export default Description;

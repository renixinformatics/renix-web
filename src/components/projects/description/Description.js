import React,{useState} from "react";
import "./Description.css";
import rightArrow from "../../../assets/description/description.svg"
function Description(props) {
  const [showIsLearn,setIsShowLearn]=useState(false)
  return (
    <div className="description-section">
      <div className="title-section">{props.project.title}</div>
      <div className="desc">{props.project.description}</div>
      <div
        className="last-sec"
        onMouseEnter={() => {
          setIsShowLearn(true);
        }}
        onMouseLeave={() => {
          setIsShowLearn(false);
        }}
      >
        {props.project.lastsection}
       { showIsLearn && <img src={rightArrow} className="desc-section-icon"/>}
      </div>
    </div>
  );
}

export default Description;

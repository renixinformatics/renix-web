import React, { useState,useEffect } from "react";
import Description from "./description/Description";
import "./ProjectsComponent.css";

function ProjectsComponent() {
  const [projectsList, setProjectsList] = useState([]);

  useEffect(()=>{
    setProjectsList([
      {
        title: "Conversational AI Solutions",
        description:
         "Deliver excellent customer service and enhance user experience with our exceptionally crafted Chatbots and VoiceAI.",
        lastsection: "Learn More",
      },
      {
        title: "Document AI",
        description:
          "Derive fast, reliable and quality OCR from complex documents in seconds.",
        lastsection: "Learn More",
      },
      {
        title: "Computer Vision Solutions",
        description:"Easily capture, monitor and analyse visual information with our exemplary recognition and detection solutions.",
        lastsection: "Learn More",
      },
      {
        title: "Recommendation Engine",
        description:
          "Offer pertinent suggestions to users and increase conversion rate through personalised recommendations.",
        lastsection: "Learn More",
      },
      {
        title: "Data Analytics",
        description:
          "With the support of our expert analysts, leverage data to  make impactful business decisions and enforce smart strategies.",
        lastsection: "Learn More",
      },
      {
        title: "AI Consultancy",
        description:
          "Our AI wizards will devise customised solutions for your business using innovative algorithms and machine learning applications.",
        lastsection: "Learn More",
      },
    ])
  },[])

  return (
    <div className="project-section">
      <div className="project-header">What We Do?</div>
      <div className="project-content">
        {projectsList.map((each) => {
          return <Description project={each} />;
        })}
      </div>
    </div>
  );
}

export default ProjectsComponent;

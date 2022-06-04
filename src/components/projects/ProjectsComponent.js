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
          "Deliver excellent customer service and enhance the user’s experience via our exceptionally crafted Chatbots and VoiceAI.",
        lastsection: "Learn More",
      },
      {
        title: "Document AI",
        description:
          "Derive fast, reliable and quality OCR from complex documents  in seconds.",
        lastsection: "Learn More",
      },
      {
        title: "Computer Vision Solutions",
        description:"Easily capture, monitor and analyse visual information.",
        lastsection: "Learn More",
      },
      {
        title: "Recommendation Engine",
        description:
          "Offer relevant suggestions to the user’s and increase the chances of conversion through personalised recommendations.",
        lastsection: "Learn More",
      },
      {
        title: "Data Analytics",
        description:
          "With the support of our in-house experts analysts, leverage data to optimise resources, make impactful business decisions and enforce smart strategies.",
        lastsection: "Learn More",
      },
      {
        title: "AI Consultancy",
        description:
          " Our AI wizards will offer innovative algorithms and machine learning applications that’ll make your business smart.",
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

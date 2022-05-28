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
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio",
        lastsection: "Learn More",
      },
      {
        title: "Document AI",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio",
        lastsection: "Learn More",
      },
      {
        title: "Computer Vision Solutions",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio",
        lastsection: "Learn More",
      },
      {
        title: "Recommendation Engine",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio",
        lastsection: "Learn More",
      },
      {
        title: "Data Analytics",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio",
        lastsection: "Learn More",
      },
      {
        title: "AI Consultancy",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio",
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

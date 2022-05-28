import React from "react";
import "./MainComponent.css";

function MainComponent(props) {
  return (
    <section className="section-class">
      <div className="consultation-section">
        <div className="header-section">
          We help you in <span>automate and</span> <br/> <span>augment</span> your business workflows
        </div>
        <div className="content-section">
          We are a team of AI experts who combine state of the art services<br/>
           with access to a global ecosystem allows us to create the<br/> next big AI
          solutions for your product.
        </div>
        <div className="footer-section">
            <button type="button" className="btn btn-primary" onClick={()=>props.scrollClicked()}>Book a free consultation</button>
        </div>
      </div>
    </section>
  );
}

export default MainComponent;

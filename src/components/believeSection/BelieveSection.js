import React from 'react';
import "./BelieveSection.css"
import Description from './description/Description';

function BelieveSection() {
    return (
    <div className="believe-section">
      <div className="believe-header">We believe</div>
      <div className="believe-content">
        <Description />
      </div>
    </div>
    )
}

export default BelieveSection

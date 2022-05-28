import React,{useState} from 'react'
import "./Expertise.css"
import ExpertiseCards from './expertiseCards/ExpertiseCards'


function Expertise() {
const [expertiseList,setExpertiseList]= useState([
    {
        icon:"car",
        title:"Automotive"
    },
    {
        icon:"cart",
        title:"Retail"
    },
    {
        icon:"finance",
        title:"Finance"
    },
    {
        icon:"health",
        title:"HealthCare"
    }
])
    return (
        <div className='expertise-section'>
           
      <div className="expertise-header">Area of Expertise</div>
      <div className="expertise-content">
          {
              expertiseList.map((each)=>{
                  return  <ExpertiseCards list={each}/>
              })
          }
      
      </div>
        </div>
    )
}

export default Expertise

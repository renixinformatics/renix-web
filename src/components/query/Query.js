import React,{useState} from 'react'
import "./Query.css"
import QueryForm from './queryForm/QueryForm'
import QueryModal from './queryModal/QueryModal'

function Query(props) {
   
    return (
        <>
        <div className="query-section">
             <div className="query-header">Have a query? Come talk to us!</div>
             <div className="query-content">
             Book a time with our consultants to discuss your project <br/>and get a free quote. No strings attached.
            </div>
            <div className="footer-section">
                {
                    props.isAboutus?
                    <button 
                    type="button" 
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                    onClick={()=>props.showModal()}>Book a free consultation</button>
                    : <QueryForm/>
                }
               
            </div>
          
            </div>
              {/* {showQuery && <QueryModal/>} */}
              </>
    )
}

export default Query

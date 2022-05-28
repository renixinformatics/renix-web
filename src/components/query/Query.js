import React from 'react'
import "./Query.css"
import QueryForm from './queryForm/QueryForm'

function Query(props) {
    return (
        <div className="query-section">
             <div className="query-header">Have a query? Come talk to us!</div>
             <div className="query-content">
             Book a time with our consultants to discuss your project <br/>and get a free quote. No strings attached.
            </div>
            <div>
                <QueryForm/>
            </div>
            </div>
    )
}

export default Query

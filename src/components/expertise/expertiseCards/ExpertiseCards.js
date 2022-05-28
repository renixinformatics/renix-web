import React from 'react'
import "./ExpertiseCards.css"
import car from "../../../assets/expertise/car.svg";
import cart from "../../../assets/expertise/cart.svg";
import finance from "../../../assets/expertise/finance.svg";
import health from "../../../assets/expertise/health.svg";

function ExpertiseCards(props) {
    return (
        <div className='expertiseCard'>
            <div className='expertise-icon'>
            {props.list.icon=="car"? <img src={car}/>:
            props.list.icon=="cart"? <img src={cart}/>:
            props.list.icon=="finance"? <img src={finance}/>:
            props.list.icon=="health"? <img src={health}/>:""
            }
            </div>
            <div className='expertise-name'>
            {props.list.title}
            </div>
        </div>
    )
}

export default ExpertiseCards

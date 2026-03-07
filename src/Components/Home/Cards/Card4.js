import React from 'react'
import './card.css'

function Card4() {
  return (
    <div className="specialty-card">
        <div className="specialty-card-img-wrap">
            <img src="/images/general-surgery.png" alt="General Surgery" />
        </div>
        <h4 className="specialty-card-title">General Surgery</h4>
        <p className="specialty-card-desc">Our experts in general and minimally invasive surgery deliver world-class surgical care.</p>
    </div>
  )
}

export default Card4
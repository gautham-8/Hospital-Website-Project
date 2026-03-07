import React from 'react'
import './card.css'

function Card3() {
  return (
    <div className="specialty-card">
        <div className="specialty-card-img-wrap">
            <img src="/images/cardiology.png" alt="Cardiology" />
        </div>
        <h4 className="specialty-card-title">Cardiology</h4>
        <p className="specialty-card-desc">Latest technology and top specialists with best practices in emergency cardiac services and minimally invasive interventions.</p>
    </div>
  )
}

export default Card3
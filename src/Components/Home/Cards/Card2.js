import React from 'react'
import './card.css'

function Card2() {
  return (
    <div className="specialty-card">
        <div className="specialty-card-img-wrap">
            <img src="/images/plastic-surgery.png" alt="Plastic Surgery" />
        </div>
        <h4 className="specialty-card-title">Plastic Surgery</h4>
        <p className="specialty-card-desc">Focuses on the reconstruction or alteration of the facial or body tissues to improve a person's appearance.</p>
    </div>
  )
}

export default Card2
import React from 'react'
import './card.css'

function Card1() {
  return (
    <div className="specialty-card">
        <div className="specialty-card-img-wrap">
            <img src="/images/liver-transplantation.png" alt="Liver Transplantation" />
        </div>
        <h4 className="specialty-card-title">Liver Transplantation &amp; Hepatobiliary Pancreatic Surgery</h4>
        <p className="specialty-card-desc">Liver transplant is the substitution of a harmful liver with a healthy liver.</p>
    </div>
  )
}

export default Card1
import React from 'react'
import './Card.css'

function Card({ src, alt, heading, description }) {
    return (
        <div className="specialty-card">
            <div className="specialty-card-img-wrap">
                <img src={src} alt={alt} />
            </div>
            <h4 className="specialty-card-title">{heading}</h4>
            <p className="specialty-card-desc">{description}</p>
        </div>
    )
}

export default Card

import React from 'react'
import './Home.css'

function Cover() {
  return (
    <div className="hero-section">
      <img
        className="hero-image"
        src="/images/hospital-hero.jpg"
        alt="VJ Hospitals"
      />
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="hero-heading">Every Kind of Care<br />for Every Kind of Patient</h1>
        <p className="hero-subtext">World-class medicine. Human-centered care.</p>
      </div>
    </div>
  )
}

export default Cover
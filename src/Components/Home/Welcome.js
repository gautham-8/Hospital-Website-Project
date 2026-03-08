import React from 'react'
import './Home.css';

function Welcome() {
  return (
    <div>
      <section className="welcome-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h2 className="head-clr fw-bold mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
                Welcome to VJ Hospitals
              </h2>
              <p style={{ color: 'var(--clr-text-muted)', lineHeight: 1.8, fontSize: '1rem' }}>
                A reimagined space for health and healing, this extraordinary new facility doubles our
                capacity for patient care and modernizes our ability to treat and cure. It blends the
                most advanced medical technologies with a human-centered approach to patient care and
                brings us closer to achieving our vision to predict, prevent and cure more precisely.
              </p>
              <p style={{ color: 'var(--clr-text-muted)', lineHeight: 1.8, fontSize: '1rem' }}>
                For decades, VJ Medicine has driven the biomedical research that changes how health care
                is delivered here and around the world. The opening of the VJ Hospital continues our proud
                legacy of caring for our local community and for patients from around the globe.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="welcome-image-wrap">
                <img
                  src="/images/welcome-hospital.png"
                  alt="VJ Hospitals facility"
                  style={{ maxHeight: '420px', width: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="welcome-quote">
        <div className="container">
          <blockquote>
            "This hospital will be a place for firsts. New discoveries will be made here. New procedures
            will be performed. And through this state-of-the-art facility, we will revolutionize the way
            patient care is delivered at Vignana Jyothi."
          </blockquote>
          <cite>- CEO, VJ Hospitals</cite>
        </div>
      </div>
    </div>
  )
}

export default Welcome

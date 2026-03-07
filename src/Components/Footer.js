import React from 'react'
import './Styles/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFirstAid, faHospitalAlt, faCity, faBed, faUser, faMale } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <footer className="vj-footer">
            <div className="container">
                <div className="vj-footer-grid">
                    <div>
                        <p className="vj-footer-col-title">For Patients</p>
                        <div className="vj-footer-links">
                            <a className="vj-footer-link" href="https://www.google.com/">Specialties</a>
                            <a className="vj-footer-link" href="https://www.google.com/">Hospitals</a>
                            <a className="vj-footer-link" href="https://www.google.com/">Our Doctors</a>
                            <a className="vj-footer-link" href="https://www.google.com/">News Room</a>
                        </div>
                    </div>

                    <div>
                        <p className="vj-footer-col-title">Our Hospital</p>
                        <div className="vj-footer-links">
                            <a className="vj-footer-link" href="https://www.google.com/">Careers</a>
                            <a className="vj-footer-link" href="https://www.google.com/">Health Talks</a>
                            <a className="vj-footer-link" href="https://www.google.com/">Awards &amp; Recognitions</a>
                            <a className="vj-footer-link" href="https://www.google.com/">Privacy Policy</a>
                        </div>
                    </div>

                    <div>
                        <p className="vj-footer-col-title">Our Reach</p>
                        <div className="vj-footer-stats">
                            <div className="vj-footer-stat">
                                <span className="vj-footer-stat-icon"><FontAwesomeIcon icon={faHospitalAlt} /></span>
                                22 Hospitals
                            </div>
                            <div className="vj-footer-stat">
                                <span className="vj-footer-stat-icon"><FontAwesomeIcon icon={faCity} /></span>
                                8 Cities
                            </div>
                            <div className="vj-footer-stat">
                                <span className="vj-footer-stat-icon"><FontAwesomeIcon icon={faBed} /></span>
                                8,000+ Beds
                            </div>
                            <div className="vj-footer-stat">
                                <span className="vj-footer-stat-icon"><FontAwesomeIcon icon={faUser} /></span>
                                5 Lakh+ Patients
                            </div>
                            <div className="vj-footer-stat">
                                <span className="vj-footer-stat-icon"><FontAwesomeIcon icon={faMale} /></span>
                                10,000+ Employees
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="vj-footer-col-title">Contact Us</p>
                        <div className="vj-footer-links">
                            <span className="vj-footer-link">1234-5678-90</span>
                            <span className="vj-footer-link">vjhospitals@vnrvjiet.in</span>
                        </div>
                        <div className="vj-footer-social">
                            <a className="vj-footer-social-link" href="https://www.facebook.com/" aria-label="Facebook">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a className="vj-footer-social-link" href="https://www.instagram.com/" aria-label="Instagram">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a className="vj-footer-social-link" href="https://www.twitter.com/" aria-label="Twitter">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="vj-footer-bottom">
                    <div className="vj-footer-brand">
                        <FontAwesomeIcon icon={faFirstAid} /> VJ Hospitals
                    </div>
                    <p className="vj-footer-copy">
                        &copy; 2022 - 2026 VJ Hospitals. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
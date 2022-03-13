import React from 'react'
import './Styles/footer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFirstAid} from '@fortawesome/free-solid-svg-icons'
import {faFacebook,faInstagram,faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faHospitalAlt,faCity,faBed,faUser,faMale} from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return (
        <div className="bg-clr text-light pt-4 pb-2">
            <div className="row mx-auto container">
                <div className="cols col-lg-4">
                    <div className="display-6 fonter p-1 text-center">
                        For patients
                    </div>
                    <div className="text-center">
                        <ul>
                            <li><a className='link-light link-hover' href="https://www.google.com/">Specialties</a></li>
                        </ul>
                        <ul>
                            <li><a className='link-light link-hover' href="https://www.google.com/">Hospitals</a></li>
                        </ul>
                        <ul>
                            <li><a className='link-light link-hover' href="https://www.google.com/">Our doctors</a></li>
                        </ul>
                        <ul>
                            <li><a className='link-light link-hover' href="https://www.google.com/">News room</a></li>
                        </ul>
                    </div>
                </div>
                <div className="cols col-lg-4">
                    <div className="display-6 fonter p-1 text-center">
                        Our hospital
                    </div>
                    <div className="text-center">
                        <ul>
                            <li><a className='link-light link-hover' href="https://www.google.com/">Careers</a></li>
                        </ul>
                        <ul>
                            <li><a className='link-light link-hover' href="https://www.google.com/">Health talks</a></li>
                        </ul>
                        <ul>
                            <li><a className='link-light link-hover' href="https://www.google.com/">Awards and recognitions</a></li>
                        </ul>
                        <ul>
                            <li><a className='link-light link-hover' href="https://www.google.com/">Privacy policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="cols col-lg-4">
                    <div className="display-6 fonter p-1 text-center">
                        Be a part of us:
                    </div>
                    <div className="text-center fonter mb-1">
                        <FontAwesomeIcon icon={faHospitalAlt} size="lg"/> 22 Hospitals
                    </div>
                    <div className="text-center fonter mb-1">
                        <FontAwesomeIcon icon={faCity} size="lg"/> 8 Cities
                    </div>
                    <div className="text-center fonter mb-1">
                        <FontAwesomeIcon icon={faBed} size="lg"/> 8000+ Beds
                    </div>
                    <div className="text-center fonter mb-1">
                        <FontAwesomeIcon icon={faUser} size="lg"/> 5 Lakh+ Patients
                    </div>
                    <div className="text-center fonter mb-1">
                        <FontAwesomeIcon icon={faMale} size="lg"/> 10000+ Employees
                    </div>
                    <div className="display-6 fonter p-1 text-center">
                        Reach out to us:
                    </div>
                    <div className="text-center fonter">
                        <b>Phone:</b> 1234-5678-90 <br />
                        <b>Email:</b> vjhospitals@vnrvjiet.in <br />
                        <a className="link-light" href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} size='lg'/>   </a>
                        <a className="link-light" href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} size='lg'/>   </a>
                        <a className="link-light" href="https://www.twitter.com/"><FontAwesomeIcon icon={faTwitter} size='lg'/>   </a>
                    </div>
                </div>
            </div>
            <div className="text-center mt-4">
                <FontAwesomeIcon icon={faFirstAid} size='3x'/>
                <p className='display-6 text-light'>VJ Hospitals</p>
            </div>
            <p className='text-center text-secondary'>Copyrights © 2022 All Rights Reserved by VJ Hospitals</p>
        </div>
    )
}

export default Footer
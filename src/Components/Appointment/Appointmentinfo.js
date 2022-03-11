import React from 'react'
import './Appointmentinfo.css'
import {faHandshake,faFistRaised,faHospitalAlt,faCity,faBed,faUser,faMale} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function Appointmentinfo() {
  return (
    <div className="">
            {/* <div className="display-6 fonter p-1">
              Core values:
            </div>
            <div className="text-center fonter">
              <FontAwesomeIcon icon={faHandshake} /> Integrity
            </div>
            <div className="text-center fonter">
              <FontAwesomeIcon icon={faFistRaised} /> Empowerment
            </div> */}
            <div className="display-6 fonter p-1 text-center">
              Book an appointment and be a part of us:
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
              <b>Phone:</b> 1234-5678-90 <br></br>
              <b>Email:</b> vjhospitals@vnrvjiet.in
            </div>
    </div>
  )
}

export default Appointmentinfo
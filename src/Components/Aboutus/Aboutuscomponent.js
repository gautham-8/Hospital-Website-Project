import React from 'react'
import './style1.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDotCircle} from '@fortawesome/free-solid-svg-icons'

function Aboutuscomponent() {
  return (
    <div className="">
      <div className="background-clr pb-2">
        <img className="img-fluid container d-block mx-auto" src="https://www.perkinseastman.com/wp-content/uploads/2020/10/new-stanford-hospital-scaled.jpg" alt="" />
        <div className='container mt-4'>
            <p className="display-5 head-clr">About Us:</p>
            <p>VJ Hospitals is a globally recognised healthcare brand with operations in 8 countries: Germany, Sweden, Poland, Turkey, Hungary, Romania, Serbia, Ukraine, and India.</p>
            <p>VJ Hospitals is the leading Multispecialty Hospital chain in India. It is one of the largest healthcare providers in Europe with a significant presence in India. The Group provides a broad spectrum of Health care services and has an extensive network of clinics, hospitals, specialty care facilities, Fertility Centers, and diagnostic labs.</p>
            <p>VJ Hospitals is spread across Telangana, Andhra Pradesh, and Maharashtra treating millions of patients every year with a clear focus on raising the standards of health care in India. It has renowned medical teams who work with the greatest technologies and international evidence-based protocols which offer the most comprehensive treatment across all specialties of medicines.</p>
        </div>
      </div>
      <div className="pt-2 container">
        <p className="display-6 mb-1 head-clr">VJ Hospitals in numbers:</p>
        <div className='mb-1'>
          <FontAwesomeIcon icon={faDotCircle} size="md"/> 22 Hospitals
        </div>
        <div className='mb-1'>
          <FontAwesomeIcon icon={faDotCircle} size="md"/> 175 Medical centers
        </div>
        <div className='mb-1'>
          <FontAwesomeIcon icon={faDotCircle} size="md"/> 20 Fertility Centers in India and Europe
        </div>
        <div className='mb-1'>
          <FontAwesomeIcon icon={faDotCircle} size="md"/> 8000+ Beds
        </div>
        <div className='mb-1'>
          <FontAwesomeIcon icon={faDotCircle} size="md"/> 6.1 Million Medical Visits
        </div>
        <div className='mb-1'>
          <FontAwesomeIcon icon={faDotCircle} size="md"/> 2 Million Patients Served Per Year
        </div>
        <div className='mb-1'>
          <FontAwesomeIcon icon={faDotCircle} size="md"/> 10 Public-Private Partnerships
        </div>
        <div className='mb-1'>
          <FontAwesomeIcon icon={faDotCircle} size="md"/> 91 Medical Labs
        </div>
        <div className='mb-1'>
          <FontAwesomeIcon icon={faDotCircle} size="md"/> 92 Million Lab Tests Per Year
        </div>
        <div className='mb-1'>
          <FontAwesomeIcon icon={faDotCircle} size="md"/> 10000+ Employees
        </div>
      </div>
      <div className="background-clr pb-4 pt-2">
        <div className="container">
          <p className="display-6 mb-1 head-clr">From the desk of our CEO:</p>
          <div className="row">
            <div className="cols col-md-4">
              <img className="img-fluid mb-1 mt-1" src="https://static.vecteezy.com/system/resources/previews/000/524/761/large_2x/vector-person-working-at-desk-in-office.jpg"  alt="" />
            </div>
            <div className="cols col-md-8 d-flex align-items-center">
              "Our aim is to expand pan-India and overseas, and deliver European standard healthcare excellence to everyone in need of quality healthcare.
              Our mission is:  Caring for your health is all we do
              and our vision is: To be globally recognized for excellence in patient-centric healthcare, multi super-specialty expertise with precision treatment, affordable to patients. "
              <br/>- CEO VJ Hospitals
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutuscomponent
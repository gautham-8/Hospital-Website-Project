import React from 'react';
import Form from './Appointment/Appointmentform';
import './Styles/Appointment.css'
import Footer from './Footer'

function Appointment() {
    return <div className="background-clr pt-3">
        <div className="display-6 text-center appoint-header mb-2 head-clr">
            Book An Appointment at VJ Hospitals.
        </div>
        <div className="row mx-auto">
            <div className="cols col-lg-2"></div>
            <div className="cols col-lg-8">
                <Form />
            </div>
        </div>
        <Footer />
    </div>;
}

export default Appointment;
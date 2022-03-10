import React from 'react';
import Form from './Appointment/Appointmentform';
import Info from './Appointment/Appointmentinfo';
import './Styles/Appointment.css'

function Appointment() {
    return <div className="background-img mt-3">
        <div className="display-6 text-center appoint-header mb-2">
            Book An Appointment at VJ Hospitals.
        </div>
        <div className="row mx-auto">
            <div className="cols col-lg-7">
                <Form />
            </div>
            <div className="cols col-lg-5 p-0">
                <Info /> 
            </div>
        </div>
        
    </div>;
}

export default Appointment;
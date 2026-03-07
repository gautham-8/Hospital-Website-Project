import React from 'react';
import './Styles/Appointment.css'
import Footer from './Footer'
import { Outlet, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ViewAppointment from './Appointment/ViewAppointment'

function Appointment() {
    const { userObj } = useSelector((state) => state.user);
    const isPrivileged = userObj.isStaff === true || userObj.email === 'admin@vj.com';

    return (
        <div className="appt-page">
            <div className="container">
                {isPrivileged ? (
                    <>
                        <h2 className="appt-page-title">All Appointments</h2>
                        <ViewAppointment />
                    </>
                ) : (
                    <>
                        <div className="appt-tabs">
                            <NavLink
                                className={({ isActive }) => 'appt-tab-link' + (isActive ? ' active' : '')}
                                to="book-appointment"
                            >
                                Book Appointment
                            </NavLink>
                            <NavLink
                                className={({ isActive }) => 'appt-tab-link' + (isActive ? ' active' : '')}
                                to="view-appointments"
                            >
                                My Appointments
                            </NavLink>
                        </div>
                        <Outlet />
                    </>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default Appointment;
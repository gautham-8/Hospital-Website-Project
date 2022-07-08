import React from 'react';
import Form from './Appointment/Appointmentform';
import './Styles/Appointment.css'
import Footer from './Footer'
import {Nav} from 'react-bootstrap'
import {Outlet,NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'
import ViewAppointment from './Appointment/ViewAppointment'

function Appointment() {
    let { userObj, isError, isLoading, isSuccess, errMsg } = useSelector((state) => state.user);
    return(
        <div>
            {
                (userObj.isStaff===true || userObj.email==="admin@vj.com")?
                (
                <div className="container">
                    <p className="display-5 head-clr">All appointments</p>
                    <ViewAppointment />
                </div>)
                :(<>
                    <Nav className="justify-content-center mt-3" defaultActiveKey="/book-appointment">
                        <Nav.Item>
                            <Nav.Link to="book-appointment" as={NavLink}>
                                Book an appointment
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link to="view-appointments" as={NavLink}>
                                My appointments
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <div className="mt-3">
                        <Outlet />
                    </div>
                </>)
            }
            
        </div>
    );
}

export default Appointment;
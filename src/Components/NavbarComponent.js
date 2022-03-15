import React from 'react';
import {Nav, Navbar} from 'react-bootstrap'
import './Styles/Navbarstyle.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFirstAid} from '@fortawesome/free-solid-svg-icons'
import {Route,Routes,NavLink} from 'react-router-dom';
import Home from './Home';
import Aboutus from './Aboutus';
import Appointment from './Appointment';

function NavbarComponent() {
    return <div>
        <Navbar className="container-fluid" expand="md" bg="myBackgroud" variant="dark">
            <Navbar.Brand>
                <FontAwesomeIcon icon={faFirstAid} className="" /> VJ Hospitals
            </Navbar.Brand>

            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav>
                    <NavLink className="active nav-link" to="/">Home</NavLink>
                    <NavLink className="active nav-link" to="/Aboutus">About us</NavLink>
                    <NavLink className="active nav-link" to="/Appointment">Book an appointment</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Aboutus' element={<Aboutus />} />
            <Route path='/Appointment' element={<Appointment />} />
        </Routes>
    </div>;
}

export default NavbarComponent;

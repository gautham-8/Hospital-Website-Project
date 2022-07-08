import React from 'react';
import {Nav, Navbar} from 'react-bootstrap'
import './Styles/Navbarstyle.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFirstAid} from '@fortawesome/free-solid-svg-icons'
import {Route,Routes,NavLink} from 'react-router-dom';
import Home from './Home';
import Aboutus from './Aboutus';
import Appointment from './Appointment';
import Login from './Login';
import Signup from './Signup';
import { FaUserCircle } from "react-icons/fa";
import NavDropdown from 'react-bootstrap/NavDropdown';
import {clearLoginStatus} from "../Slices/userSlice";
import {useNavigate,Navigate} from 'react-router-dom'
import {useDispatch,useSelector} from "react-redux";

function NavbarComponent() {
    let { userObj, isError, isLoading, isSuccess, errMsg } = useSelector((state) => state.user);
    let navigate = useNavigate();
    
    let dispatch = useDispatch();
    const userLogout = () => {
        localStorage.clear();
        dispatch(clearLoginStatus());
        navigate("/login");
    };
    return <div>
        <Navbar className="container-fluid" expand="md" bg="myBackgroud" variant="dark">
            <Navbar.Brand>
                <FontAwesomeIcon icon={faFirstAid} className="" /> VJ Hospitals
            </Navbar.Brand>

            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="me-auto">
                    <NavLink className="active nav-link" to="/">Home</NavLink>
                    <NavLink className="active nav-link" to="/Aboutus">About us</NavLink>
                    <NavLink className="active nav-link" to="/Appointment">Appointments</NavLink>
                    <NavLink className="active nav-link" to="/Signup">Add staff</NavLink>
                </Nav>
                <Nav className="mr-5">
                    <NavDropdown title={userObj.email} id="">
                        <NavDropdown.Item onClick={userLogout} className="">
                        Logout
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Aboutus' element={<Aboutus />} />
            <Route path='/Appointment' element={<Appointment />} />
            {/* <Route path='/login' element={<Login />} /> */}
            <Route path='/Signup' element={<Signup />} />
        </Routes>
    </div>;
}

export default NavbarComponent;

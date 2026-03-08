import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Styles/Navbarstyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFirstAid } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { clearLoginStatus, userLogout as logoutThunk } from '../Slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';

function NavbarLogin() {
    const { email } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const userLogout = () => {
        dispatch(logoutThunk()).finally(() => {
            dispatch(clearLoginStatus());
            navigate('/login');
        });
    };

    return (
        <Navbar className="vj-navbar" expand="md" variant="dark" sticky="top">
            <div className="vj-navbar-inner">
                <Navbar.Brand as={NavLink} to="/" className="vj-brand">
                    <FontAwesomeIcon icon={faFirstAid} /> VJ Hospitals
                </Navbar.Brand>
                <Navbar.Toggle className="ms-auto" />
                <Navbar.Collapse>
                    <Nav className="me-auto vj-nav-links">
                        <NavLink className="vj-nav-link" to="/">Home</NavLink>
                        <NavLink className="vj-nav-link" to="/about-us">About Us</NavLink>
                        <NavLink className="vj-nav-link" to="/appointments">Appointments</NavLink>
                    </Nav>
                    <Nav className="align-items-center gap-2">
                        <span className="vj-user-email">{email}</span>
                        <button className="vj-logout-btn" onClick={userLogout}>
                            <FiLogOut /> Logout
                        </button>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}

export default NavbarLogin;

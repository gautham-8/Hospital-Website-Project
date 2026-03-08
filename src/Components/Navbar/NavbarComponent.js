import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './NavbarStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFirstAid } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

function NavbarComponent() {
    return (
        <Navbar className="vj-navbar" expand="md" variant="dark" sticky="top">
            <div className="vj-navbar-inner">
                <Navbar.Brand as={NavLink} to="/" className="vj-brand">
                    <FontAwesomeIcon icon={faFirstAid} /> VJ Hospitals
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="me-auto vj-nav-links">
                        <NavLink className="vj-nav-link" to="/">Home</NavLink>
                        <NavLink className="vj-nav-link" to="/about-us">About Us</NavLink>
                    </Nav>
                    <Nav>
                        <NavLink className="vj-nav-link vj-nav-cta" to="/login">
                            <FaUserCircle className="me-1" /> Login / Signup
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}

export default NavbarComponent;

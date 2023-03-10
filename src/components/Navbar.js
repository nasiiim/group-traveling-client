import React from 'react'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Button from 'react-bootstrap/Button'


import './Navbar.css'

const Navbar2 = () => {

    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

    return (

        <Navbar collapseOnSelect expand="lg" className="navbar-global">
            <Container>
                <Navbar.Brand >
                    <Link to="/" id='home'>
                        <h2 variant="light" className='btn-nav'>Group Travel</h2>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto" ></Nav>
                    {/* <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav> */}
                    <Nav>
                        <Nav.Link >
                            {isLoggedIn && (
                                <>
                                    <Button variant="light" onClick={logOutUser}>Logout</Button>
                                    <Link id='user-panel' to="/userPanel" className='link-nav'>{user && user.name}</Link>
                                </>
                            )}
                        </Nav.Link>
                        <Nav.Link eventKey={2} >
                            {!isLoggedIn && (
                                <>
                                    <Link to="/signup"> <Button variant="light">Sign Up</Button> </Link>
                                    <Link to="/login"> <Button variant="light">Login</Button> </Link>
                                </>
                            )}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        // <div className='container-nav'>


        //     <nav>
        // <Link to="/" id='home'>
        //     <Button variant="light" className='btn-nav'>Home</Button>
        // </Link>

        // {isLoggedIn && (
        //     <>
        //         <Button variant="light" onClick={logOutUser}>Logout</Button>
        //         <Link id='user-panel' to="/userPanel" className='link-nav'>{user && user.name}</Link>
        //     </>
        // )}

        // {!isLoggedIn && (
        //     <>
        //         <Link to="/signup"> <Button variant="light">Sign Up</Button> </Link>
        //         <Link to="/login"> <Button variant="light">Login</Button> </Link>
        //     </>
        // )}


        //     </nav>
        //   </div>

    )
}

export default Navbar2

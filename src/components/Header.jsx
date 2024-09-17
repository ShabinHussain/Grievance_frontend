import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import '../pages/Common.css'
import { Button, Row } from 'react-bootstrap';

import NavDropdown from 'react-bootstrap/NavDropdown';




function Header() {
  const navigate = useNavigate()


  const tokenlogin = sessionStorage.getItem('token')
  console.log(tokenlogin);

  const handleLogout = () => {
    sessionStorage.removeItem("existingUser");
    sessionStorage.removeItem("token");
    navigate('/'); // Redirect to login or homepage
  };


  const handleChange = (event) => {
    const value = event.target.value;
    if (value) {
      navigate(value);
    }
  };
  return (
    <>
      {/*<Navbar bg="dark" data-bs-theme="dark" className='border border-warning'>
        <Container>
          <Navbar.Brand href="#home" className='fs-2  px-2 text-warning'>Panther</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/aboutus">About</Nav.Link>
            {!tokenlogin && <><Nav.Link href="/signin">Signin</Nav.Link>
              <Nav.Link href="/signup">Signup</Nav.Link></>}
            {tokenlogin && <>
              <Nav.Link>
                <select name="account" id="account" className="rounded bg-dark" onChange={handleChange}>
                  <option value="">Account</option>
                  <option value="/editprofile">Edit-Profile</option>
                  <option value="/allgrievance">Grievances</option>
                  <option value="/grievance">New Complaint</option>
                </select>
              </Nav.Link>
              <Nav.Link type='button' className='' onClick={handleLogout}>Logout</Nav.Link> </>}
          </Nav>
        </Container>
      </Navbar>*/}

      <Navbar collapseOnSelect expand="lg" className="bg-secondary border border-warning" >
      <Container>
        <Navbar.Brand href="" className='fs-2  px-2 text-warning'><b>Panther</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className='text-white'>Home</Nav.Link>
            <Nav.Link href="/aboutus" className='text-white'>About</Nav.Link>
            {!tokenlogin && <><Nav.Link href="/signin" className='text-white'>SignIn</Nav.Link>
            <Nav.Link href="/signup" className='text-white'>SignUp</Nav.Link></>}
           {tokenlogin && <> <NavDropdown title="Account" id="collapsible-nav-dropdown" className='bg-warning rounded'>
              <NavDropdown.Item href="/editprofile">Edit-Profile</NavDropdown.Item>
              <NavDropdown.Item href="/allgrievance">
                 Grievances
              </NavDropdown.Item>
              <NavDropdown.Item href="/grievance">New Complaint</NavDropdown.Item>
             </NavDropdown>
             <Nav.Link type='button' className='text-warning' onClick={handleLogout}>Logout</Nav.Link> </>}

          </Nav>
          <Nav>
            <Nav.Link href="" className='text-white fs-2'>The Man Without Fear</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header
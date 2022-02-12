import React from 'react'
import './Header.css';
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar, Container, Nav, NavDropdown,} from 'react-bootstrap'
const Header = () => {
    return (
        <div>
           <Navbar bg="primary" expand="lg" variant="dark">
           
  <Container>
    <Navbar.Brand href="#home"><b>RG Sarkari Hub</b></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <LinkContainer to="/">
        <Nav.Link href="/">Home</Nav.Link>
        </LinkContainer>
        <NavDropdown title="Jobs" id="basic-nav-dropdown">
        <LinkContainer to="/login">
          <NavDropdown.Item href="#action/3.1">Latest Govt. Jobs</NavDropdown.Item>
          </LinkContainer>
          <NavDropdown.Item href="#action/3.2">Latest Private Jobs</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#link">Admit Card</Nav.Link>
        <Nav.Link href="#link">Result</Nav.Link>
        <Nav.Link href="#link">Syllabus</Nav.Link>
        <NavDropdown title="Preparation" id="basic-nav-dropdown">
          <NavDropdown.Item> </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Mock Test</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">E-Books</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Questions Paper</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#link">Blog</Nav.Link>
        <NavDropdown title="Company" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Contact Us</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Terms and Condition</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Register" id="basic-nav-dropdown" className='Register'>
          <NavDropdown.Item href="/register">Register</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>


        </div>
    )
}

export default Header

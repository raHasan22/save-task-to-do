import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand><Link to='/' className='text-decoration-none text-dark fw-bold'>Task<span className='fw-bolder text-warning'>TO-DO</span></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item className='mx-2'><Link to='/add' className='text-decoration-none text-dark'>Add-Task</Link></Nav.Item>
            <Nav.Item className='mx-2'><Link to='/add' className='text-decoration-none text-dark'>My-Task</Link></Nav.Item>
            <Nav.Item className='mx-2'><Link to='/add' className='text-decoration-none text-dark'>Completed-Task</Link></Nav.Item>
          </Nav>
          <Nav className="me-auto d-md-flex flex-lg-row flex-grow-1 justify-content-lg-end">
            <Nav.Item className='mx-2'><Link to='/login' className='text-decoration-none text-dark'>Log In</Link></Nav.Item>
            <Nav.Item className='mx-2'><Link to='/add' className='text-decoration-none text-dark'>User</Link></Nav.Item>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default NavBar;
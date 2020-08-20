import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import foodprintlogo from '../Assets/foodprintlogo.svg'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'

export default function Header(){
    return (
  <Navbar bg="light" variant="light" expand="lg" fixed='top' className="shadow-sm">
    <Navbar.Brand href="/">
      <img
        alt=""
        src={foodprintlogo}
        width="150"
        height="35"
        className="d-inline-block align-top"
       style={{
           paddingLeft: '10px',
           paddingBottom: '4px'
       }}/>{' '}
    </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <NavbarCollapse>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/try">Try It Out!</Nav.Link>
      </Nav>
    </NavbarCollapse>

  </Navbar>
    )
}
import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'


 function TheNav(props) {
           return(<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="/MyReact" onClick={() => props.handlePageChange("profile")}>Paul-Portfolio</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">

      <Nav>
        <Nav.Link className="mr-auto "  href="/MyReact/portfolio"  onClick={() => props.handlePageChange("portfolio")} >Projects</Nav.Link>

        <Nav.Link eventKey={2} href="/MyReact/contact"  onClick={() => props.handlePageChange("contact")} >
        Contact
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>)

 
}

export default TheNav
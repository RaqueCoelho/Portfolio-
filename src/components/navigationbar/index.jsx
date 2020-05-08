import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Navbar.Brand href="#home">Raquel Coelho</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item>
            <Nav.Link href="/">
              <i className="fas fa-home"></i>
              <p>Home</p>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#about">
              <i className="fas fa-portrait"></i>
              <p>About me</p>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#services">
              <i className="fas fa-laptop"></i>
              <p>Services</p>
            </Nav.Link>
          </Nav.Item>
          {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        <Nav>
          <Nav.Link href="https://github.com/RaqueCoelho">
            <i className="fab fa-github"></i> <p>GitHub</p>
          </Nav.Link>
          <Nav.Item>
            <Nav.Link href="https://www.linkedin.com/in/raquel-coelho-4a112860/">
              <i className="fab fa-linkedin-in"></i>
              <p>Linkedin</p>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavigationBar;

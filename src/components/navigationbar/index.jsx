import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  a,
  .navbar-nav,
  .navbar-light .nav-link {
    color: white;
    &:hover {
      color: white;
    }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: white;
    &:hover {
      color: grey;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Raquel Coelho</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link href="/">
              <i class="fas fa-home"></i>
              <p>Home</p>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#about">
              <i class="fas fa-portrait"></i>
              <p>About me</p>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#services">
              <i class="fas fa-laptop"></i>
              <p>Services</p>
            </Nav.Link>
          </Nav.Item>
          <Nav.Link href="https://github.com/RaqueCoelho">
            <i class="fab fa-github"></i> <p>GitHub</p>
          </Nav.Link>
          <Nav.Item>
            <Nav.Link href="https://www.linkedin.com/in/raquel-coelho-4a112860/">
              <i class="fab fa-linkedin-in"></i>
              <p>Linkedin</p>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);

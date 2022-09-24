import React from "react";
import "./navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
import { LinkContainer } from "react-router-bootstrap";

const navbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px", margin: "1rem" }}
            navbarScroll
          >
            <LinkContainer to="/">
              <Nav.Link
                style={{ marginLeft: "1.5rem" }}
                className="home"
                href="#home"
              >
                Home
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link
                style={{ marginLeft: "1.5rem" }}
                className="about"
                href="#about"
              >
                About Me
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/courses">
              <Nav.Link
                style={{ marginLeft: "1.5rem" }}
                className="courses"
                href="#courses"
              >
                Courses
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link
                style={{ marginLeft: "1.5rem" }}
                className="contact"
                href="../contact/contact.jsx"
              >
                Contact Me
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default navbar;

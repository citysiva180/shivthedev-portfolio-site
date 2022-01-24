import React from "react";
import { Navbar, Container, Nav, Col, Row, Image } from "react-bootstrap";
import Logo from "../../../static/LOGO/NavBarLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";
function NavBar() {
  return (
    <Navbar
      className="navbar navbar-expand-lg navbar-dark bg-primary"
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="/">
          <Row>
            <Col md="auto">
              <Image src={Logo} href="/" />
            </Col>
            <Col md="auto" style={{ textAign: "right", paddingLeft: "0" }}>
              <h3 style={{ fontFamily: "Oswald", fontSize: "3vh" }}>
                ShivTheDev.Tech
              </h3>
            </Col>
          </Row>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/resume">My Profile</Nav.Link>
            <Nav.Link href="articles">Articles</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link href="/signin">
              <FontAwesomeIcon icon={faSignInAlt}></FontAwesomeIcon>
              {"  "}Sign In
            </Nav.Link>

            <Nav.Link eventKey={2} href="/register">
              <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>
              {"  "}Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

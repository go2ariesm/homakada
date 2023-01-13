import { Navbar, Container, Nav } from "react-bootstrap";
import React from "react";
import logo from "../asset/images/images_1_1.png";

const NavigationBar = () => {
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand>
            <img src={logo} className="logo" />
          </Navbar.Brand>
          <Nav style={{ fontWeight: "bold" }}>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>About Us</Nav.Link>
            <Nav.Link>Careers</Nav.Link>
            <Nav.Link>Investor Relation</Nav.Link>
            <Nav.Link>Dropdown</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;

import { Container, Row, Col, Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import React from "react";
// import ImageSection2 from "../asset/images/images_3_1.png";

const Frequently = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="col-sm-4">
            <Button
              className="btn btn-lg"
              style={{ backgroundColor: "#4fD240", border: "none" }}
            >
              Frequently
            </Button>
            <h4 style={{ marginTop: "20px" }}>Asked Question</h4>
          </Col>
          <Col>
            <Accordion defaultActiveKey="0" style={{ boxShadow: "none" }}>
              <Accordion.Item eventKey="0">
                <Accordion.Header
                  style={{
                    border: "none",
                    backgroundColor: "#fff",
                    boxShadow: "none",
                  }}
                >
                  <b style={{ color: "#4fD240" }}>Where can I get Kada</b>
                </Accordion.Header>
                <Accordion.Body>
                  Kada Apps is accesible through App Store and Play Store. We'll
                  be coming soon in more platform to make sure you have the best
                  experience when using it
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <b style={{ color: "#4fD240" }}>
                    How do I register my merchant to Kada?
                  </b>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <b style={{ color: "#4fD240" }}>How do investor use Kada?</b>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
      <p>&nbsp;</p>
    </div>
  );
};

export default Frequently;

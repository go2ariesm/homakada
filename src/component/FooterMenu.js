import { Container, Row, Col, Table } from "react-bootstrap";
import React from "react";
import logo from "../asset/images/images_1_1.png";
import FollowUpImage from "../asset/images/images_6.png";

const FooterMenu = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="col-sm-3">
            <img src={logo} style={{ width: "70px" }} />
            <p
              style={{
                fontSize: "13px",
                paddingBottom: "20px",
                marginRight: "50px",
                paddingTop: "20px",
                color: "#9e9e9e",
              }}
            >
              Kada is platform for connecting customer and business in single
              mobile application
            </p>
          </Col>
          <Col>
            <h5>Company</h5>
            <div
              style={{
                paddingBottom: "20px",
                paddingTop: "10px",
              }}
            >
              <Table
                style={{
                  fontSize: "12px",
                  color: "#9e9e9e",
                }}
              >
                <tr>
                  <td>About Us</td>
                </tr>
                <tr>
                  <td>careers</td>
                </tr>
                <tr>
                  <td>Investor Relation</td>
                </tr>
              </Table>
            </div>
          </Col>
          <Col>
            <h5>Contact</h5>
            <div
              style={{
                paddingBottom: "20px",
                paddingTop: "10px",
              }}
            >
              <Table
                style={{
                  fontSize: "12px",
                  color: "#9e9e9e",
                }}
              >
                <tr>
                  <td>info@kada.id</td>
                </tr>
                <tr>
                  <td>contact@kada.id</td>
                </tr>
              </Table>
            </div>
          </Col>
          <Col>
            <h5>Location</h5>
            <div
              style={{
                paddingBottom: "20px",
                paddingTop: "10px",
              }}
            >
              <Table
                style={{
                  fontSize: "12px",
                  color: "#9e9e9e",
                }}
              >
                <tr>
                  <td>
                    Concepto.id Building 4th-5th Floor
                    <br />
                    Alfalah Road 19, Medan
                    <br />
                    North Sumatra, Indonesia
                  </td>
                </tr>
              </Table>
            </div>
          </Col>
          <Col>
            <h5>Follow Us</h5>
            <div
              style={{
                paddingBottom: "20px",
                paddingTop: "10px",
              }}
            >
              <img src={FollowUpImage} style={{ height: "30px" }} />
            </div>
          </Col>
        </Row>
      </Container>
      <p>&nbsp;</p>
    </div>
  );
};

export default FooterMenu;

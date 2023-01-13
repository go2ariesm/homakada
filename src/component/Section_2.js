import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import ImageSection2 from "../asset/images/images_3_1.png";
import ImageSection2_2 from "../asset/images/images_2_1.png";
import ImageSection2_DownloadCount from "../asset/images/images_4.png";
const Section_2 = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h3>Hyper Apps Integration</h3>
            <div className="section_2_col1_content">
              <span className="section_2_col1_text_color">
                Have the best lifestyle experience with single mobile
                application, <span className="kada_link">kada.id</span>
              </span>
            </div>
            <div>
              <img src={ImageSection2_2} className="section-2_ImageSize_1" />
            </div>
            <p>&nbsp;</p>
            <div>
              <img src={ImageSection2_DownloadCount} />
            </div>
          </Col>
          <Col className="section-2_Image">
            <img src={ImageSection2} className="section-2_ImageSize" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section_2;

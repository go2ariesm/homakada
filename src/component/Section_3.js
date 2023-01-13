import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import ImageSection3_1 from "../asset/images/images_5_1.png";
import ImageWhatWeDo1 from "../asset/images/whatwedo_1.png";
import ImageWhatWeDo2 from "../asset/images/whatwedo_2.png";
import ImageWhatWeDo3 from "../asset/images/whatwedo_3.png";

const Section_3 = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <img src={ImageSection3_1} />
          </Col>
          <Col className="WhatWeDo">
            <h4>What We Do</h4>
            <p></p>
            <Row className="WhatWeDoTextContentLineHeight">
              <Col className="col-sm-1">
                <img src={ImageWhatWeDo1} className="imgWhatWeDo" />
              </Col>
              <Col className="WhatWeDoTextContent">
                <h6 className="text-dark">Customer Side</h6>
                We are serving the best of the best product and services for
                every of our customer within our platform
              </Col>
            </Row>
            <Row className="WhatWeDoTextContentLineHeight">
              <Col className="col-sm-1">
                <img src={ImageWhatWeDo2} className="imgWhatWeDo" />
              </Col>
              <Col className="WhatWeDoTextContent">
                <h6 className="text-dark">Business Side</h6>
                Business doesn't have to worry about how to operate their
                business. Through Kada absence and operational will be piece of
                cake
              </Col>
            </Row>
            <Row className="WhatWeDoTextContentLineHeight">
              <Col className="col-sm-1">
                <img src={ImageWhatWeDo3} className="imgWhatWeDo" />
              </Col>
              <Col className="WhatWeDoTextContent">
                <h6 className="text-dark">Investor Side</h6>
                Owning a company? Your company collab with Kada? Then all you
                want to know about the company is in the palm of your hand
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section_3;

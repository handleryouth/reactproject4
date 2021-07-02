import React from "react";
import Smallcontainer from "./Smallcontainer";
import { Container, Col, Row } from "react-bootstrap";

function Secondslide() {
  return (
    <div className="secondslide">
      <h1 className="secondslide-header">Overview - Today</h1>
      <div>
        <Container fluid>
          <Row>
            <Col>
              <Smallcontainer
                type="Page Views"
                number="87"
                socialicon="/images/icon-facebook.svg"
                arrow="/images/icon-up.svg"
                percentage="3"
              />
            </Col>
            <Col>
              <Smallcontainer
                type="Likes"
                number="52"
                socialicon="/images/icon-facebook.svg"
                arrow="/images/icon-down.svg"
                percentage="2"
              />
            </Col>
            <Col>
              <Smallcontainer
                type="Likes"
                number="5462"
                socialicon="/images/icon-instagram.svg"
                arrow="/images/icon-up.svg"
                percentage="2257"
              />
            </Col>
            <Col>
              <Smallcontainer
                type="Profile Views"
                number="52k"
                socialicon="/images/icon-facebook.svg"
                arrow="/images/icon-up.svg"
                percentage="1375"
              />
            </Col>

            <Col>
              <Smallcontainer
                type="Retweets"
                number="117"
                socialicon="/images/icon-twitter.svg"
                arrow="/images/icon-up.svg"
                percentage="303"
              />
            </Col>

            <Col>
              <Smallcontainer
                type="Likes"
                number="507"
                socialicon="/images/icon-twitter.svg"
                arrow="/images/icon-up.svg"
                percentage="553"
              />
            </Col>
            <Col>
              <Smallcontainer
                type="Likes"
                number="107"
                socialicon="/images/icon-youtube.svg"
                arrow="/images/icon-down.svg"
                percentage="19"
              />
            </Col>
            <Col>
              <Smallcontainer
                type="Likes"
                number="1407"
                socialicon="/images/icon-youtube.svg"
                arrow="/images/icon-down.svg"
                percentage="12"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Secondslide;

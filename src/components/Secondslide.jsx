import React, {useContext} from "react";
import Smallcontainer from "./Smallcontainer";
import { Container, Col, Row } from "react-bootstrap";
import {ThemeContext} from "../contexts/ThemeContext"


function Secondslide() {

  const {state, blueFont, whiteBackground} = useContext(ThemeContext)

  return (
    <div style={state ? whiteBackground : null} className="secondslide">
      <h1 style={state? blueFont : null} className="secondslide-header">Overview - Today</h1>
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
                percentagecolor = "green"
              />
            </Col>
            <Col>
              <Smallcontainer
                type="Likes"
                number="52"
                socialicon="/images/icon-facebook.svg"
                arrow="/images/icon-down.svg"
                percentage="2"
                percentagecolor = "red"
              />
            </Col>
            <Col>
              <Smallcontainer
                type="Likes"
                number="5462"
                socialicon="/images/icon-instagram.svg"
                arrow="/images/icon-up.svg"
                percentage="2257"
                percentagecolor = "green"
              />
            </Col>
            <Col>
              <Smallcontainer
                type="Profile Views"
                number="52k"
                socialicon="/images/icon-facebook.svg"
                arrow="/images/icon-up.svg"
                percentage="1375"
                percentagecolor = "green"
              />
            </Col>

            <Col>
              <Smallcontainer
                type="Retweets"
                number="117"
                socialicon="/images/icon-twitter.svg"
                arrow="/images/icon-up.svg"
                percentage="303"
                percentagecolor = "green"
              />
            </Col>

            <Col>
              <Smallcontainer
                type="Likes"
                number="507"
                socialicon="/images/icon-twitter.svg"
                arrow="/images/icon-up.svg"
                percentage="553"
                percentagecolor = "green"
              />
            </Col>
            <Col>
              <Smallcontainer
                type="Likes"
                number="107"
                socialicon="/images/icon-youtube.svg"
                arrow="/images/icon-down.svg"
                percentage="19"
                percentagecolor = "red"
              />
            </Col>
            <Col>
              <Smallcontainer
                type="Likes"
                number="1407"
                socialicon="/images/icon-youtube.svg"
                arrow="/images/icon-down.svg"
                percentage="12"
                percentagecolor = "red"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Secondslide;

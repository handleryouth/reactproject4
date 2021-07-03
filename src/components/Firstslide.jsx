import React, {useContext} from "react";
import Bigcontainer from "./Bigcontainer";
import { Container, Row, Col } from "react-bootstrap";
import { ThemeContext } from "../contexts/ThemeContext";

function Firstslide() {

const {state, whiteBackground} = useContext(ThemeContext);

  return (
    <div style={state ? whiteBackground : null } className="firstslide">
      <Container fluid>
        <Row>
          <Col>
            <Bigcontainer
              socialicon="/images/icon-facebook.svg"
              user="@nathanf"
              people="1987"
              type="FOLLOWERS"
              gain="12"
              arrow="/images/icon-up.svg"
              borderstyle="facebookborder"
              percentagecolor = "green"
            />
          </Col>

          <Col>
            <Bigcontainer
              socialicon="/images/icon-twitter.svg"
              user="@nathanf"
              people="1044"
              type="FOLLOWERS"
              gain="99"
              arrow="/images/icon-up.svg"
              borderstyle="twitterborder"
              percentagecolor = "green"
            />
          </Col>

          <Col>
            <Bigcontainer
              socialicon="/images/icon-instagram.svg"
              user="@realnathanf"
              people="11K"
              type="FOLLOWERS"
              gain="1099"
              arrow="/images/icon-up.svg"
              borderstyle="instagramborder"
              percentagecolor = "green"
            />
          </Col>

          <Col>
            <Bigcontainer
              socialicon="/images/icon-youtube.svg"
              user="Nathan F."
              people="8239"
              type="SUBSCRIBERS"
              gain="144"
              arrow="/images/icon-down.svg"
              borderstyle="youtubeborder"
              percentagecolor = "red"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Firstslide;

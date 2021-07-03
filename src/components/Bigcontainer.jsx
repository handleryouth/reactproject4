import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function Bigcontainer(props) {
  const { state, blackFont, blueFont, grayBackground } =
    useContext(ThemeContext);

  return (
    <div
      style={state ? grayBackground : null}
      className={`bigcontainer ${props.borderstyle}`}
    >
      <div style={state ? blueFont : null} className="username">
        <img src={props.socialicon} alt="Social Icon" />
        <p>{props.user}</p>
      </div>

      <div className="followers">
        <h1 style={state ? blackFont : null}>{props.people}</h1>
        <p style={state ? blueFont : null}>{props.type}</p>
      </div>

      <div className={`percentage ${props.percentagecolor}`}>
        <img src={props.arrow} alt="Arrow" />
        <p>{props.gain} Today</p>
      </div>
    </div>
  );
}

export default Bigcontainer;

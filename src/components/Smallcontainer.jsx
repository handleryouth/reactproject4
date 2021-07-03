import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function Smallcontainer(props) {
  const { state, blueFont, grayBackground, blackFont} = useContext(ThemeContext);

  return (
    <div style={state ? grayBackground : null} className="smallcontainer">
      <div className="type2">
        <p style={state ? blueFont : null}>{props.type}</p>
        <h1 style={state ? blackFont : null}>{props.number}</h1>
      </div>

      <div className="social2">
        <img className="social2-img" src={props.socialicon} alt="Social Icon" />
        <div className="arrow2">
          <img src={props.arrow} alt="Arrow" />
          <p className={props.percentagecolor}>{props.percentage} %</p>
        </div>
      </div>
    </div>
  );
}

export default Smallcontainer;

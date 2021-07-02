import React from "react";

function Smallcontainer(props) {
  return (
    <div className="smallcontainer">
      <div className="type2">
        <p>{props.type}</p>
        <h1>{props.number}</h1>
      </div>

      <div className="social2">
        <img className="social2-img" src={props.socialicon} alt="Social Icon" />
        <div className="arrow2">
          <img src={props.arrow} alt="Arrow" />
          <p>{props.percentage} %</p>
        </div>
      </div>
    </div>
  );
}

export default Smallcontainer;
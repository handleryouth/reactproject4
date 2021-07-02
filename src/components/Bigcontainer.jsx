import React from "react";

function Bigcontainer(props) {
  return (
    <div className={`bigcontainer ${props.borderstyle}`}>
      <div className = "username">
        <img src={props.socialicon} alt="Social Icon" />
        <p>{props.user}</p>
      </div>

      <div className="followers">
        <h1>{props.people}</h1>
        <p>{props.type}</p>
      </div>

      <div className="percentage">
        <img src={props.arrow} alt="Arrow" />
        <p>{props.gain} Today</p>
      </div>
    </div>
  );
}

export default Bigcontainer;

import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function Navbar() {
  const { state, setState, whiteBackground, blueFont, blackFont} =
    useContext(ThemeContext);

  function ChangeColor() {
    setState((prevState) => {
      return !prevState;
    });
  }

  return (
    <div style={state ? whiteBackground : null} className="navbar">
      <div>
        <h1 style={state ? blackFont : null}>Social Media Dashboard</h1>
        <p style={state ? blueFont : null}>Total Followers: 23,004</p>
      </div>

      <div className="navbar-mode">
        <p style={state ? blueFont : null}>Dark Mode</p>
        <label class="switch">
          <input onClick={ChangeColor} type="checkbox" />
          <span class="slider round"></span>
        </label>
      </div>
    </div>
  );
}

export default Navbar;

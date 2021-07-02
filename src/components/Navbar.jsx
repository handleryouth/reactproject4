import React from "react";

function Navbar() {
  // use creacte context for this job
  // const [state, setState] = useState(false);

  // function ChangeColor() {
  //   setState((prevState) => {
  //     return !prevState;
  //   });
  // }

  return (
    <div className="navbar">
      <div>
        <h1>Social Media Dashboard</h1>
        <p>Total Followers: 23,004</p>
      </div>

      <div className="navbar-mode">
        <p>Dark Mode</p>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
      </div>
    </div>
  );
}

export default Navbar;

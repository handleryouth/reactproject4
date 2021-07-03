import React, { useState } from "react";
import Navbar from "./Navbar";
import Firstslide from "./Firstslide";
import Secondslide from "./Secondslide";
import { ThemeContext } from "../contexts/ThemeContext";

function App() {
  const [state, setState] = useState(false);

  const whiteBackground = {
    backgroundColor: "white",
  };

  const blackFont = {
    color: "black",
  };

  const blueFont = {
    color: "hsl(228, 12%, 44%)",
  };

  const grayBackground = {
    backgroundColor: "hsl(227, 47%, 96%)",
  };

  let body = document.body;

  if (state === true) {
    body.style.backgroundColor = "white";
  }

  return (
    <div>
      <ThemeContext.Provider
        value={{
          state,
          setState,
          whiteBackground,
          blackFont,
          blueFont,
          grayBackground,
        }}
      >
        <Navbar />
        <Firstslide />
        <Secondslide />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;

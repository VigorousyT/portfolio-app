import React, { useState } from "react";
import "./Component.css";

const Darkmode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#333" : "#FFF",
        color: darkMode ? "#FFF" : "#333",
      }}
    >
      <button
        style={{
          backgroundColor: darkMode ? "#333" : "#FFF",
          color: darkMode ? "#FFF" : "#333",
        }}
        className="button-dark"
        onClick={toggleDarkMode}
      >
        Toggle Mode
      </button>
    </div>
  );
};

export default Darkmode;

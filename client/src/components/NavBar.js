import React, { useState, useEffect } from "react";
import { useDarkMode } from "./hooks/useDarkMode";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useDarkMode();
  const [darkMode, setDarkMode] = useState(isDarkMode);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    setIsDarkMode(darkMode);
  }, [darkMode]);

  return (
    <nav className="navbar">
      <h1>Women's World Cup</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Navbar;

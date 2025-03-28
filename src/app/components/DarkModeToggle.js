"use client";

import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { MoonFill, SunFill } from "react-bootstrap-icons";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("dark-mode")) || false;
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = "#2c2c2c"; 
      document.body.style.color = "#e0e0e0"; 
    } else {
      document.body.style.backgroundColor = "#f5f5f5"; 
      document.body.style.color = "#222"; 
    }
    localStorage.setItem("dark-mode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const darkModeStyles = {
    backgroundColor: darkMode ? "#3a3a3a" : "#fff", 
    color: darkMode ? "#e0e0e0" : "#000",
    padding: "10px",
    borderRadius: "5px",
    transition: "background 0.3s ease, color 0.3s ease",
  };

  return (
    <div style={darkModeStyles}>
      <Button variant={darkMode ? "secondary" : "light"} onClick={toggleDarkMode} className="ms-2">
        {darkMode ? <SunFill /> : <MoonFill />}
      </Button>
    </div>
  );
}

"use client";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export function DarkModeButton() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const rootElement = document.documentElement;
    if (darkMode) {
      rootElement.classList.add("dark");
    } else {
      rootElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className={`focus:outline-none ${darkMode ? "dark" : ""}`}
      onClick={toggleDarkMode}>
      <FontAwesomeIcon
        icon={darkMode ? faSun : faMoon}
        className={`text-gray-800 ${darkMode ? "dark:text-gray-200" : ""}`}
      />
    </button>
  );
}

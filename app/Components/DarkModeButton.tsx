"use client";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export function DarkModeButton() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const hasDarkMode = localStorage.getItem("darkMode");
    if (hasDarkMode == "true") {
      setDarkMode(true);
    } else setDarkMode(false);
  }, []);

  useEffect(() => {
    const rootElement = document.documentElement;
    if (darkMode) {
      rootElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      rootElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
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

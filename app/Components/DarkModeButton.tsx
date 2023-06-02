"use client";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export function DarkModeButton() {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  // Check user preference on initial load
  useEffect(() => {
    const rootElement = document.documentElement;
    if (
      window.matchMedia("(prefers-color-scheme: dark)").matches ||
      rootElement.classList.contains("dark")
    ) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

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
